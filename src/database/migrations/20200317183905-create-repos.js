module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('repos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      issues: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      user_id: {
        type: Sequelize.INTEGER,
        model: 'users',
        key: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('repos');
  },
};
