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
          unique: true,
          validate: {
            isEmail: true,
            notNull: {
              msg: 'Please enter the email'
            }
          }
        },
        name: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING
        },
        age: {
          type: Sequelize.INTEGER
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
