import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import {
  GraphQLDateTime
} from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'Lecture',
  description: 'The lecture',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Lecture\'s id',
      resolve(lecture) {
        return lecture.id;
      }
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the lecture',
      resolve(lecture) {
        return lecture.name;
      }
    },
  },
});
