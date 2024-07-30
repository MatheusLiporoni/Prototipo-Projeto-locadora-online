import { sequelize } from '../database';
import { DataTypes, Model, Optional } from 'sequelize';
import bcrypt from 'bcrypt';

// Interface para os atributos do modelo
interface ClienteAttributes {
  id: number;
  name: string;
  idade: string;
  dataNascimento: Date;
  email: string;
  password: string;
  phone: string;
  cpf: string;
}

// Interface para a criação do modelo
interface ClienteCreationAttributes extends Optional<ClienteAttributes, 'id'> {}

// Definição do modelo
class Cliente extends Model<ClienteAttributes, ClienteCreationAttributes> implements ClienteAttributes {
  public id!: number;
  public name!: string;
  public idade!: string;
  public dataNascimento!: Date;
  public email!: string;
  public password!: string;
  public phone!: string;
  public cpf!: string;

  public async checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

// Inicialização do modelo
Cliente.init(
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
    idade: {
      type: DataTypes.STRING, // Alterado para INTEGER para corresponder ao tipo de idade
      allowNull: false,
    },
    dataNascimento: {
      type: DataTypes.DATE,
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'clientes',
    hooks: {
      beforeSave: async (cliente) => {
        if (cliente.changed('password')) {
          cliente.password = await bcrypt.hash(cliente.password, 10);
        }
      },
    },
  }
);

export default Cliente;
