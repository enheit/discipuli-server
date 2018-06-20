import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import model from '../../../models';
import { Course } from '../../types';
import sequelize from '../../../models/models.setup';

export default {
  type: new GraphQLList(Course),
  args: {
    personAccountId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  // TODO: Remove specializationId and specialization from the Course model
  resolve: async (root, args, context) => {
    try {
      const subscriptions = await model.Subscriptions.findAll({
        where: {
          personAccountId: args.personAccountId,
        },
        include: [{
          model: model.Course,
        }]
      });

      const coursesId = subscriptions.map(subscription => {
        return subscription.course.courseId;
      });

      const result = await model.Courses.findAll({
        where: {
          courseId: {
            [sequelize.Op.in]: coursesId,
          },
        },
        include: [{
          model: model.Course,
          include: [{
            model: model.City,
            include: [{
              model: model.Country,
            }],
          }],
        }, {
          model: model.Specialization,
        }],
      });

      return result.map(courses => {
        return {
          courseId: courses.course.courseId,
          name: courses.course.name,
          country: courses.course.city.country.name,
          city: courses.course.city.name,
          startDate: courses.course.startDate,
          endDate: courses.course.endDate,
          specializationId: courses.specialization.id,
          specialization: courses.specialization.name,
        }
      });

    } catch(error) {
      console.log(error);
    }
  }
}
