import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'LectureStatus',
  description: 'The status of a lecture',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The status id',
      resolve(lectureStatus) {
        return lectureStatus.id;
      }
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The status name',
      resolve(lectureStatus) {
        return lectureStatus.name;
      }
    },
  },
});
