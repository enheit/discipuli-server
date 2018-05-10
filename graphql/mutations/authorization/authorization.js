import {
  GraphQLObjectType
} from 'graphql';
import jwt from 'jsonwebtoken';

import model from '../../../models';
import { Credentials } from '../../inputs';
import { JWT } from '../../types';
import { secretKey } from '../../../src/configs/jwt.config';

export default {
  type: JWT,
  description: 'Authorize a user',
  args: {
    credentials: {
      type: Credentials
    }
  },
  resolve(root, args, context) {
    return model.personAccount.findOne({
      attributes: ['personId'],
      where: {
        email: args.credentials.email,
        passwordHash: args.credentials.password
      },
      include: [{
        model: model.person,
        attributes: ['id', 'firstName', 'lastName'],
        include: [{
          model: model.personRole,
          attributes: ['role']
        }],
      }],
    })
    .then(response => {
      return response
        ? jwt.sign({
            id: response.person.id,
            fullName: `${response.person.firstName} ${response.person.lastName}`,
            role: response.person.personRole.role,
          }, secretKey)
        : null;
    })
    .catch(error => {
      throw new Error(error);
    });
  }
};