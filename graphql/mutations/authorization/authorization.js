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
  resolve: async (root, args, context) => {
    const personAccount = await model.PersonAccount.findOne({
      where: {
        email: args.credentials.email,
        // The args.credentails.password should be Base64 encoded
        passwordHash: md5(Base64.decode(args.credentials.password))
      },
      include: [{
        model: model.PersonRole,
        attributes: ['id', 'role'],
      }],
    });

    const rules =  !!personAccount
      ? await getRules(personAccount)
      : [];

    console.log(rules);

    return personAccount
      ? jwt.sign({
          accountId: personAccount.id,
          role: personAccount.personRole.role,
          rules: rules,
        }, secretKey)
      : null;
  }
};

const getRules = async (personAccount) => {
  const permissions = await model.Permissions.findAll({
    where: {
      roleId: personAccount.personRole.id,
    },
    include: [{
      model: model.PermissionSubject,
      attributes: ['name'],
    }],
  });

  // From [{action: 'create', permissionSubject: {name: 'course'}}]
  // to [{subject: 'course', actions: ['create']}]
  const rules = permissions.reduce((acc, item) => {
    const subject = item.permissionSubject.name;
    const action = item.action;
    const subjectIndex = acc.findIndex(rule => rule.subject === subject);

    if(subjectIndex !== -1) {
      acc[subjectIndex].actions.push(action);

      return acc;
    } else {
      return [
        ...acc,
        {
          subject: subject,
          actions: [action]
        }
      ];
    }
  }, []);

  return rules;
}
