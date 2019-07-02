import { Model } from 'sequelize';

class PostModel extends Model {
  static init(sequelize, Sequelize) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            is: ['^[a-z]+$', 'i'],
            notNull: {
              msg: 'Please enter the title'
            }
          }
        },
        UserId: {
          type: Sequelize.INTEGER,
          foreignKey: true
        },
      },
      {
        sequelize,
        tableName: 'posts',
        modelName: 'Post'
      }
    );
  }
}

export default PostModel;
