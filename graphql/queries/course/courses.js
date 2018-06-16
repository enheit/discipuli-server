import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import model from '../../../models';
import { Course } from '../../types';

export default {
  type: new GraphQLList(Course),
  resolve: async (root, args, context) => {
    try {
      const result = await model.Courses.findAll({
        include: [{
          model: model.Course,
          attributes: ['id', 'name', 'startDate', 'endDate'],
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
          id: courses.course.id,
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