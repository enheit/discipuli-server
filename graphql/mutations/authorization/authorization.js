import jwt from 'jsonwebtoken';

import model from '../../../models';
import { Credentials } from '../../inputs';
import { JWT } from '../../types';
import { secretKey } from '../../../src/configs/jwt.config';
import { Base64 } from 'js-base64';
import md5 from 'md5';

export default {
  type: JWT,
  description: 'Authorize a user',
  args: {
    credentials: {
      type: Credentials
    }
  },
  resolve(root, args, context) {
    return model.PersonAccount.findOne({
      where: {
        email: args.credentials.email,
        // The args.credentails.password should be Base64 encoded
        passwordHash: md5(Base64.decode(args.credentials.password))
      },
      include: [{
        model: model.PersonRole,
        attributes: ['role'],
      }],
    })
    .then(personAccount => {
      return personAccount
        ? jwt.sign({
            accountId: personAccount.id,
            role: personAccount.personRole.role,
          }, secretKey)
        : null;
    })
    .catch(error => {
      throw new Error(error);
    });
  }
};