import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import model from '../../../models';
import { Presentation } from '../../types';

export default {
  type: new GraphQLList(Presentation),
  args: {
    specializationId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (root, args, context) => {
    const presentations = await model.Presentation.findAll({
      where: {
        specializationId: args.specializationId,
      },
    });

    return presentations;
  },
};
