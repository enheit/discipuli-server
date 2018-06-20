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
  resolve: async (root, args, context) => {
    if(args.registrationFields.password.length === 0) {
      throw new Error('The password cannot be empty');
    }

    if(args.registrationFields.password !== args.registrationFields.repeatPassword) {
      throw new Error('The passwords are not the same');
    }

    const email = await model.PersonAccount.findOne({
      where: {
        email: args.registrationFields.email,
      }
    });

    if(email) {
      throw new Error('The user with the same email address already exist!');
    }

    const person = await model.Person.create({
      firstName: args.registrationFields.firstName,
      lastName: args.registrationFields.lastName,
      about: null,
    });

    const personAccount = await model.PersonAccount.create({
      email: args.registrationFields.email,
      // The args.registrationFields.password should be Base64 encoded
      passwordHash: md5(Base64.decode(args.registrationFields.password)),
      roleId: 3, // User role
      personId: person.id,
    });

    const role = await model.PersonRole.findOne({
      where: {
        id: personAccount.roleId
      },
      attributes: ['role'],
    });

    return {
      accountId: personAccount.id,
      email: personAccount.email,
      firstName: person.firstName,
      lastName: person.lastName,
      fullName: `${person.firstName} ${person.lastName}`,
      about: person.about,
      role: role.role
    }
  }
};
