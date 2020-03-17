const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class Repo extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        issues: Sequelize.ARRAY(Sequelize.TEXT),
        user_id: {
          name: 'user_id',
          type: Sequelize.INTEGER,
          references: 'users',
          referencesKey: 'id',
        },
      },
      { sequelize }
    );
    return this;
  }
}

module.exports = Repo;
