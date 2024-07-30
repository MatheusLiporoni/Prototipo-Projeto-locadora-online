const bcrypt = require("bcrypt")
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const password_criptografada = await bcrypt.hash('localiza123' , 10)
    await queryInterface.bulkInsert('locadoras' ,[
      {name: 'Localiza' , phone: '991256815', email:"localiza@gmail.com.br", password: password_criptografada ,cnpj_cpf:"45723499831", cidade:"Franca" , estado:"São Paulo", endereco:"Avenida Hélio Palermo", created_at: new Date(), updated_at: new Date()}
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locadora', null, {});
    
  }
};
