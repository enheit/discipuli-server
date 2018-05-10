import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'PersonRole',
  description: 'The role of the user',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Role\'s id',
      resolve(role) {
        return role.id;
      },
    },
    role: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the role',
      resolve(role) {
        return role.role;
      },
    },
  },
});
