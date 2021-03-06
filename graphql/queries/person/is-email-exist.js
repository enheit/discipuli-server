import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import model from '../../../models';

export default {
  type: GraphQLBoolean,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (root, args, context) => {
    try {
      const email = await model.PersonAccount.findOne({
        where: {
          email: args.email
        },
        attributes: ['email']
      });

      return !!email;
    } catch (error) {
      console.error(error);
    }
  }
};