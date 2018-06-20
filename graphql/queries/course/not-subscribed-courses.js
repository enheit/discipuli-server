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
  resolve: async (root, args, context) => {
    try {
      const subscriptions = await model.Subscriptions.findAll({
        where: {
          personAccountId: args.personAccountId,
        },
      });

      const listOfSubscribedCoursesIds = subscriptions
        .map(subscription => {
          return subscription.courseId;
        });

      const result = await model.Courses.findAll({
        where: {
          courseId: {
            [sequelize.Op.notIn]: listOfSubscribedCoursesIds,
          },
        },
        include: [{
          model: model.Course,
          attributes: ['courseId', 'name', 'startDate', 'endDate'],
          include: [{
            model: model.City,
            attributes: ['name'],
            include: [{
              model: model.Country,
              attributes: ['name'],
            }]
          }]
        }, {
          model: model.Specialization,
          attributes: ['id', 'name'],
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
