'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      subjectName: 'Kimia',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectName: 'Ekonomi',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    return queryInterface.bulkInsert('Subjects', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};
