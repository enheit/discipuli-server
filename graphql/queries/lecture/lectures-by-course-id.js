import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

import model from '../../../models';
import { Lecture } from '../../types';
import sequelize from '../../../models/models.setup';

export default {
  type: new GraphQLList(Lecture),
  args: {
    courseId: {
      type: new GraphQLNonNull(GraphQLID)
    },
  },
  resolve: async (root, args, context) => {
    const lectures = await model.Lecture.findAll({
      order: sequelize.col('startDate'),
      where: {
        courseId: args.courseId,
      },
      include: [{
        model: model.PersonAccount,
        include: [{
          model: model.Person
        }]
      }]
    });

    return lectures.map(lecture => {
      const { firstName, lastName } = lecture.personAccount.person;
      return {
        id: lecture.id,
        name: lecture.name,
        lecturer: `${firstName} ${lastName}`,
        startDate: lecture.startDate,
        endDate: lecture.endDate
      }
    });
  }
};
