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
    lecturer: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The speacker of the lecture',
      resolve(lecture) {
        return lecture.lecturer;
      },
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLDateTime),
      description: 'The start date of the lecture',
      resolve(lecture) {
        return lecture.startDate;
      },
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLDateTime),
      description: 'The end date of the lecture',
      resolve(lecture) {
        return lecture.endDate;
      },
    },
  },
});

// courseId: {
//   type: DataTypes.INTEGER,
//   field: 'course_id',
//   allowsNull: false,
// },
// lecturerId: {
//   type: DataTypes.INTEGER,
//   field: 'lecturer_id',
//   allowsNull: false,
// },
// lecturePresentationId: {
//   type: DataTypes.INTEGER,
//   field: 'lecture_presentation_id',
//   allowsNull: false,
// },
