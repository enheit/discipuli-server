import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'PersonProfile',
  description: 'The profile of a user',
  fields: {
    accountId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The account id',
      resolve(personProfile) {
        return personProfile.accountId;
      },
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of a user',
      resolve(personProfile) {
        return personProfile.firstName;
      }
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The surname of a user',
      resolve(personProfile) {
        return personProfile.lastName;
      }
    },
    fullName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The full name of the user',
      resolve(personProfile) {
        return `${personProfile.firstName} ${personProfile.lastName}`;
      }
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The email of a user\'s account',
      resolve(personProfile) {
        return personProfile.email;
      },
    },
    about: {
      type: GraphQLString,
      description: 'The short information about a user',
      resolve(personProfile) {
        return personProfile.about;
      },
    },
    role: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The role of a user\'s account',
      resolve(personProfile) {
        return personProfile.role;
      }
    }
  },
});
