import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'Course',
  description: 'The course of a specialization',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Course\'s id',
      resolve(course) {
        return course.courseId;
      }
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the course',
      resolve(course) {
        return course.name;
      }
    },
    city: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The city of the course location',
      resolve(course) {
        return course.city;
      }
    },
    country: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The country of the course location',
      resolve(course) {
        return course.country;
      }
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLDate),
      description: 'The start date of the course',
      resolve(course) {
        return course.startDate;
      }
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLDate),
      description: 'The start date of the course',
      resolve(course) {
        return course.endDate;
      }
    },
    // TODO: Should be removed from the course
    specializationId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of the course specialization',
      resolve(course) {
        return course.specializationId;
      }
    },
    // TODO: Should be removed from the course
    specialization: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The name of the specialization',
      resolve(course) {
        return course.specialization;
      }
    },
  },
});
