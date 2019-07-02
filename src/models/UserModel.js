import { Model } from 'sequelize';

class UserModel extends Model {
  static init(sequelize, Sequelize) {
    return super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        name: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        }
      },
      {
        sequelize,
        tableName: 'users',
        modelName: 'User'
      }
    );
  }

}

export default UserModel;
