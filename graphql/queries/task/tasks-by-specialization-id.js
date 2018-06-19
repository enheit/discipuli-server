import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import model from '../../../models';
import { Task } from '../../types';

export default {
  type: new GraphQLList(Task),
  args: {
    specializationId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (root, args, context) => {
    const tasks = await model.Task.findAll({
      where: {
        specializationId: args.specializationId,
      },
      attributes: ['id', 'name']
    });

    return tasks;
  },
};
