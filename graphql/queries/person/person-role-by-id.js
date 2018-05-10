import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import model from '../../../models';
import { PersonRole } from '../../types';

export default {
  type: PersonRole,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, args) {
    return model.person.getPersonRoleById(args.id)
      .then(response => {
        return response.rowCount === 1
          ? response.rows[0]
          : null;
      })
      .catch(error => {
        throw new Error(error);
      })
  }
};