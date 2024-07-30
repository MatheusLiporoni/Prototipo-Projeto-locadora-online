import { Model, Optional , DataTypes} from "sequelize"
import { sequelize } from "../database"

export interface Cars {
    id: number,
    locid: number
    preco: string
    modelo: string
    marca: string
    grupo: string
    situation: boolean
    
    
}

export interface CarsCreationAttributes extends Optional<Cars , 'id'> {}
export interface CarsInstance extends Model<Cars ,CarsCreationAttributes>, Cars{}

export const Cars = sequelize.define<CarsInstance, Cars>("carros" ,{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      locid:{
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Locadora', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'     
      },
      preco:{
        type: DataTypes.STRING,
        allowNull: false
      },
      modelo:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false
      },
      marca:{
        type: DataTypes.STRING,
        allowNull: false
      },
      grupo:{
        type: DataTypes.STRING,
        allowNull: false
      },
      situation: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
  
})

