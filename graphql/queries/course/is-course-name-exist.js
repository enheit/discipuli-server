import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import model from '../../../models';

export default {
  type: GraphQLBoolean,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (root, args, context) => {
    try {
      const course = await model.Course.findOne({
        where: {
          name: {
            ilike: args.name, // case-insensitive
          },
        },
        attributes: ['name']
      });

      return !!course;
    } catch (error) {
      console.error(error);
    }
  }
};