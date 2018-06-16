import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import model from '../../../models';
import { Country } from '../../types';

export default {
  type: new GraphQLList(Country),
  resolve: async (root, args, context) => {
    try {
      const result = await model.Country.findAll({
        attributes: ['id', 'code', 'name'],
      });

      return result;
    } catch(error) {
      console.log(error);
    }
  }
}