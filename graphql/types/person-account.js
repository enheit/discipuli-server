import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'PersonAccount',
  description: 'The account of the user',
  fields: {
    personId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Person\'s id',
      resolve(account) {
        return account.person_id;
      },
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The email of the user\'s account',
      resolve(account) {
        return account.email;
      },
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The hashed password of the user\'s account',
      resolve(account) {
        return account.password_hash;
      },
    },

  },
});
