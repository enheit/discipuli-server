import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Specialization',
  description: 'The specialization of lab',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Specialization\'s id',
      resolve(specialization) {
        return specialization.id;
      },
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the specialization',
      resolve(specialization) {
        return specialization.name;
      },
    },
  },
});
