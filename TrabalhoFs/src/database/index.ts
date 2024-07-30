import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: "localhost",
    port: 5432,
    database: 'locadora-development',
    username: "postgres",
    password: "2407",
    define:{
        underscored:true
    }

})