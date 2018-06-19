import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import model from '../../../models';
import { PersonProfile } from '../../types';

export default {
  type: new GraphQLList(PersonProfile),
  args: {
    roleId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (root, args, context) => {
    const accounts = await model.PersonAccount.findAll({
      where: {
        roleId: args.roleId,
      },
      include: [{
        model: model.Person,
      }, {
        model: model.PersonRole
      }]
    });

    return accounts.map(account => {
      return {
        accountId: account.id,
        email: account.email,
        firstName: account.person.firstName,
        lastName: account.person.lastName,
        fullName: `${account.person.firstName} ${account.person.lastName}`,
        about: account.person.about,
        role: account.personRole.role,
      }
    });
  },
};
