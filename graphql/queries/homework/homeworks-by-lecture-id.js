import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import model from '../../../models';
import { Homework } from '../../types';

export default {
  type: new GraphQLList(Homework),
  args: {
    lectureId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (root, args, context) => {
    const homeworks = await model.LectureHomeworks.findAll({
      where: {
        lectureId: args.lectureId,
      },
      include: [{
        model: model.LectureHomework,
        include: [{
          model: model.Homework,
          include: [{
            model: model.PersonAccount,
            include: [{
              model: model.Person
            }]
          }]
        }]
      }]
    });

    return homeworks.map(homework => {
      const {
        firstName,
        lastName
      } = homework.lectureHomework.homework.personAccount.person;

      return {
        id: homework.id,
        name: homework.lectureHomework.name,
        description: homework.lectureHomework.description,
        specializationId: homework.lectureHomework.homework.specializationId,
        createdBy: `${firstName} ${lastName}`
      }
    });
  },
};
