import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Presentation',
  description: 'The presentation',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Presentation\'s id',
      resolve(presentation) {
        return presentation.id;
      }
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the presentation',
      resolve(presentation) {
        return presentation.name;
      }
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The description of the presentation',
      resolve(presentation) {
        return presentation.description;
      }
    },
    specializationId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The specialization id',
      resolve(presentation) {
        return presentation.specializationId;
      }
    },
    createdBy: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The creator\'s id of the presentation',
      resolve(presentation) {
        return presentation.createdBy;
      }
    },
  },
});
