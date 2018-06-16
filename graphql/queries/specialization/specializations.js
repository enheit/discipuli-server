import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import model from '../../../models';
import { Specialization } from '../../types';

export default {
  type: new GraphQLList(Specialization),
  resolve: async (root, args, context) => {
    try {
      const result = await model.Specialization.findAll({
        attributes: ['id', 'name'],
      });

      return result;
    } catch(error) {
      console.log(error);
    }
  }
}