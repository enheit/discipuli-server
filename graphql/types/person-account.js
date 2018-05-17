import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'PersonAccount',
  description: 'The account of a user',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The account id',
      resolve(personAccount) {
        return personAccount.id;
      },
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The email of a user\'s account',
      resolve(personAccount) {
        return personAccount.email;
      },
    },
    passwordHash: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The hashed password of a user\'s account',
      resolve(personAccount) {
        return personAccount.passwordHash;
      },
    },
    role: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The role of a user\'s account',
      resolve(personAccount) {
        return personAccount.role;
      }
    }
  },
});
