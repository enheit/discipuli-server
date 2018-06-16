import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

export default new GraphQLInputObjectType({
  name: 'CourseCreationFields',
  fields: {
    courseName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of a course',
    },
    specializationId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of a specialization',
    },
    countryId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of a country',
    },
    cityId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of a city',
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLDate),
      description: 'The starting date of a course',
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLDate),
      description: 'The ending date of a course',
    },
  },
});