'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("carros", {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      locid:{
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'locadoras', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'     
      },
      preco:{
        type: Sequelize.STRING,
        allowNull: false
      },
      modelo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      marca:{
        type: Sequelize.STRING,
        allowNull: false
      },
      grupo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      situation: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
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
    await queryInterface.dropTable("carros")
  }
};
