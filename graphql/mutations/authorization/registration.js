import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';
import md5 from 'md5';
import { Base64 } from 'js-base64';

import model from '../../../models';
import { RegistrationFields } from '../../inputs';
import { PersonProfile, personAccount } from '../../types';
import { secretKey } from '../../../src/configs/jwt.config';

export default {
  type: PersonProfile,
  description: 'Register a guest',
  args: {
    registrationFields: {
      type: RegistrationFields
    }
  },
  async resolve(root, args, context) {
    if(args.registrationFields.password.length === 0) {
      throw new Error('The password cannot be empty');
    }

    if(args.registrationFields.password !== args.registrationFields.repeatPassword) {
      throw new Error('The passwords are not the same');
    }

    const [personAccount, isCreated] = await model.PersonAccount.findOrCreate({
      where: {
        email: args.registrationFields.email,
      },
      defaults: {
        email: args.registrationFields.email,
        // The args.registrationFields.password should be Base64 encoded
        passwordHash: md5(Base64.decode(args.registrationFields.password)),
        roleId: 3, // User role
      },
      include: [{
        model: model.PersonRole,
      }],
    });

    if(!isCreated) {
      throw new Error('The user with the same email address already exist!');
    }

    const role = await model.PersonRole.findOne({
      where: {
        id: personAccount.roleId
      },
      attributes: ['role'],
    });

    const person = await model.Person.create({
      firstName: args.registrationFields.firstName,
      lastName: args.registrationFields.lastName,
      about: null,
      personAccountId: personAccount.id,
    });

    return {
      accountId: personAccount.id,
      email: personAccount.email,
      firstName: person.firstName,
      lastName: person.lastName,
      about: person.about,
      role: role.role
    }
  }
};