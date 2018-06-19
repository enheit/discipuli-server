import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import model from '../../../models';
import { Specialization } from '../../types';

export default {
  type: Specialization,
  args: {
    courseId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (root, args, context) => {
    try {
      const course = await model.Courses.findOne({
        where: {
          courseId: args.courseId,
        },
        include: [{
          model: model.Specialization,
        }],
      });

      return course.specialization;
    } catch(error) {
      console.log(error);
    }
  }
}
