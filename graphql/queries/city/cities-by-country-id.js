import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';

import model from '../../../models';
import { City } from '../../types';

export default {
  type: new GraphQLList(City),
  args: {
    countryId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (root, args, context) => {
    try {
      const result = await model.City.findAll({
        where: {
          countryId: args.countryId,
        },
        attributes: ['id', 'countryId', 'name', 'isActive'],
      });

      return result;
    } catch(error) {
      console.log(error);
    }
  }
}