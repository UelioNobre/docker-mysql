'use strict';

const { mockAccount } = require('../../../mocks/user.mock');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Accounts', mockAccount, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Accounts', null, {});
  }
};
