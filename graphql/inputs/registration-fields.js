import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'RegistrationFields',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The email address of a user',
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name a user',
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The surname a user',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The password of a user',
    },
    repeatPassword: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The password of a user',
    },
  },
});