import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

import model from '../../../models';

export default {
  type: GraphQLBoolean,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    courseId: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async (root, args, context) => {
    try {
      const lecture = await model.Lecture.findOne({
        where: {
          name: {
            ilike: args.name, // case-insensitive
          },
          courseId: args.courseId,
        },
        attributes: ['name']
      });

      return !!lecture;
    } catch (error) {
      console.error(error);
    }
  }
};
