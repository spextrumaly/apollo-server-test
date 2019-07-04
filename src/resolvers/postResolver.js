import GraphQLJSON from 'graphql-type-json';

export default {
  JSON: GraphQLJSON,

  Query: {
    posts: async (parent, args, { models }) => {
      const posts = await models.Post.findAll();
      return posts;
    },
    post: async (parent, { id }, { models }) => {
      const post = await models.Post.findOne({
        where: { id }
      });
      return post;
    }
  },

  Mutation: {
    newPost: async (parent, { title, UserId }, { models }) => {
      await models.Post.create(
        { title, UserId },
        { fields: ['title', 'UserId'] }
      );
      return 'Success!';
    }
  },

};
