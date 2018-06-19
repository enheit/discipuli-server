import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Homework',
  description: 'The homework',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Homework\'s id',
      resolve(homework) {
        return homework.id;
      },
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the homework',
      resolve(homework) {
        return homework.name;
      },
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The description of the homework',
      resolve(homework) {
        return homework.description;
      },
    },
    specializationId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The specialization id',
      resolve(homework) {
        return homework.specializationId;
      },
    },
    createdBy: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The creator\'s id of the homework',
      resolve(homework) {
        return homework.createdBy;
      },
    },
  },
});
