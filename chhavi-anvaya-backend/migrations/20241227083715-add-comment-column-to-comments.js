"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Comments", "comment", {
      type: Sequelize.TEXT,
      allowNull: true,
      defaultValue: null, 
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Comments", "comment");
  },
};
