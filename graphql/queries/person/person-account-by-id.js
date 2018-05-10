import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import { authenticated } from '../../common';
import model from '../../../models';
import { PersonAccount } from '../../types';

export default {
  type: PersonAccount,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: authenticated((root, args, context) => {
    return model.person.getPersonAccountById(args.id)
      .then(response => {
        return response.rowCount === 1
          ? response.rows[0]
          : null
      })
      .catch(error => {
        throw new Error(error);
      });
  })
};