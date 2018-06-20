import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import model from '../../../models';
import { Course } from '../../types';

export default {
  type: Course,
  args: {
    courseId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (root, args, context) => {
    try {
      const course = await model.Course.findOne({
        where: {
          id: args.courseId,
        },
        include: [{
          model: model.City,
          include: [{
            model: model.Country,
          }],
        }],
      });

      // TODO: Add or not to add specializationId, specialization
      // cuz it another query like Courses supports these fields
      return {
        courseId: course.courseId,
        name: course.name,
        startDate: course.startDate,
        endDate: course.endDate,
        city: course.city.name,
        country: course.city.country.name
      };
    } catch (error) {
      console.error(error);
    }
  }
};
