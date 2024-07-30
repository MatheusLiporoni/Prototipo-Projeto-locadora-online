import { sequelize } from '../database';
import { DataTypes, Model, Optional } from 'sequelize';
import bcrypt from 'bcrypt';

// Interface para os atributos do modelo
interface LocadoraAttributes {
  id: number;
  name: string;
  phone: string;
  email: string;
  password: string;
  cnpj_cpf: string;
  cidade: string;
  estado: string;
  endereco: string;
}

// Interface para a criação do modelo
interface LocadoraCreationAttributes extends Optional<LocadoraAttributes, 'id'> {}

// Definição do modelo
class Locadora extends Model<LocadoraAttributes, LocadoraCreationAttributes> implements LocadoraAttributes {
  public id!: number;
  public name!: string;
  public phone!: string;
  public email!: string;
  public password!: string;
  public cnpj_cpf!: string;
  public cidade!: string;
  public estado!: string;
  public endereco!: string;

  public async checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

// Inicialização do modelo
Locadora.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cnpj_cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'locadoras',
    hooks: {
      beforeSave: async (locadora) => {
        if (locadora.changed('password')) {
          locadora.password = await bcrypt.hash(locadora.password, 10);
        }
      },
    },
  }
);

export default Locadora;
