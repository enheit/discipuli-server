import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'Credentials',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The email address of a user',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The password of a user',
    },
  },
});