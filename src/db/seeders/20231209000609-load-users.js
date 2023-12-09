'use strict';

const { mockUser } = require('../../../mocks/user.mock');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * npx sequelize-cli db:seed:all
    */

    await queryInterface.bulkInsert('Users', mockUser, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * npx sequelize-cli db:seed:undo
     * npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
     * npx sequelize-cli db:seed:undo:all
    */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
