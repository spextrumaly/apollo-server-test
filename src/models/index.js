import PostModel from './PostModel';
import Sequelize from 'sequelize';
import UserModel from './UserModel';

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres'
  }
);

const models = {
  User: UserModel.init(sequelize, Sequelize),
  Post: PostModel.init(sequelize, Sequelize)
};
models.User.hasMany(models.Post);
models.Post.belongsTo(models.User);

export { sequelize };

export default models;
