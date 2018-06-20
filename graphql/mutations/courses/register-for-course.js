import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import model from '../../../models';
import { Subscription } from '../../types';

export default {
  type: Subscription,
  description: 'Create a subscription',
  args: {
    courseId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    personAccountId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (root, args, context) => {
    try {
      const subscription = await model.Subscriptions.create({
        courseId: args.courseId,
        personAccountId: args.personAccountId,
      });

      return subscription;
    } catch (error) {
      throw new Error(error);
    }
  }
};
