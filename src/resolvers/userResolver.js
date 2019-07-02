import GraphQLJSON from 'graphql-type-json';
import Sequelize from 'sequelize';

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
    postsOfUser: async (parent, { name }, { models }) => {
      const user = await models.User.findAll({
        where: {
          name
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
