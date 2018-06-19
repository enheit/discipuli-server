import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import model from '../../../models';
import { Homework } from '../../types';

export default {
  type: new GraphQLList(Homework),
  args: {
    specializationId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (root, args, context) => {
    const homeworks = await model.Homework.findAll({
      where: {
        specializationId: args.specializationId,
      },
    });

    return homeworks;
  },
};
