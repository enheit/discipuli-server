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
      });

      return course;
    } catch (error) {
      console.error(error);
    }
  }
};
