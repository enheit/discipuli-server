import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import {
  GraphQLDateTime
} from 'graphql-iso-date';

export default new GraphQLInputObjectType({
  name: 'LectureCreationFields',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of a lecture',
    },
    presentationId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of a presentation',
    },
    taskId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of a task',
    },
    homeworkId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of a homework',
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLDateTime),
      description: 'The starting date&time of a lecture',
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLDateTime),
      description: 'The ending date&time of a lecture',
    },
    lecturerId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of a lecturer',
    },
    courseId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of a course',
    }
  },
});
