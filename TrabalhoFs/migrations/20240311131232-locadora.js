'use strict';

const { type } = require('os');
const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('locadoras', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      phone:{
        type:Sequelize.STRING,
        allowNull:false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cnpj_cpf:{
        type: Sequelize.STRING,
        allowNull: false   
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: false
      },
      estado:{
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco:{
        type: Sequelize.STRING,
        allowNull: false
      },

      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at:{  
        type: Sequelize.DATE,
        allowNull:false
      }


    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Locadora')
   
  }
};
