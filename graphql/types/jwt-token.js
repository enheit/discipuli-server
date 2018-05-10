import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'JWT',
  description: 'The JWT token',
  fields: {
    jwtToken: {
      type: GraphQLString,
      description: 'token',
      resolve(jwtToken) {
        return jwtToken;
      },
    },
  },
});
