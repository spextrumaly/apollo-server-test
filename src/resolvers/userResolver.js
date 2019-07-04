import GraphQLJSON from 'graphql-type-json';
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';

export const createToken = async (user) => 
  // const { id, email, name } = user;
  // console.log('SECRET::', process.env.SECRET);
  await jwt.sign({user}, process.env.SECRET, { expiresIn: '90 days' })
;

export default {
  JSON: GraphQLJSON,

  Query: {
    user: async (parent, { id }, { models }) => {
      const user = await models.User.findOne({
        where: { id: id }
      });
      return user;
    },
    users: async (parent, args, { models }) => {
      const users = await models.User.findAll();
      return users;
    },
    usersDESC: async (parent, args, { models }) => {
      const users = await models.User.findAll({
        order: [['age', 'DESC']]
      });
      return users;
    },
    userAgeGreaterThan: async (parent, { age }, { models }) => {
      const users = await models.User.findAll({
        where: { age: { [Sequelize.Op.gt]: age } }
      });
      return users;
    },
    numberOfUsers: async (parent, args, { models }) => {
      let no = 0;
      await models.User.count().then((c) => {
        no = c;
      });
      return no;
    },
    postsOfUser: async (parent, { id }, { models }) => {
      const user = await models.User.findAll({
        where: {
          id
        },
        include: [{
          model: models.Post
        }]
      });
      return user;
    }
  },

  Mutation: {
    
    signUp: async (parent, { name, email, password, age }, { models }) => {
      let repeated = true;
      await models.User.findOne({ where: { email } }).then((user) => {
        if (user === null) {
          repeated = false;
        }
      });
      if (!repeated) {
        await models.User.create(
          { name, email, password, age },
          { fields: ['name', 'email', 'password', 'age'] }
        );
        return 'Success!';
      } else {
        return 'Failed!';
      }
    },
    signIn: async (parent, { email, password }, { models }) => {
      const user = await models.User.findOne({
        where: {
          email
        }
      });
      if (!user) {
        throw new Error('Invalid email');
      }
      if (user.password === password) {
        const jwtToken = await createToken(user);
        const token = { token: jwtToken, user };
        return token;
      } else {
        return null;
      }
      
    }
  },

  User: {
    posts: async (parent, args, { models }) => {
      const posts = await models.Post.findAll(
        {
          where: { UserId: parent.id }
        }
      );
      return posts;
    }
  }
};
