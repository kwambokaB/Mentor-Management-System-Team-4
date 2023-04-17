/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('labels', {
      label_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mentor_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'mentors',
          key: 'mentor_id',
        },
      },
      mentor_manager_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'mentor_managers',
          key: 'mentor_manager_id',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('labels');
  },
};