import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import model from '../../../models';
import { Lecture } from '../../types';

export default {
  type: Lecture,
  args: {
    lectureId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (root, args, context) => {
    const lecture = await model.Lecture.findOne({
      where: {
        id: args.lectureId,
      },
      include: [{
        model: model.PersonAccount,
        include: [{
          model: model.Person,
        }]
      }]
    });

    const {
      firstName,
      lastName
    } = lecture.personAccount.person;

    return {
      id: lecture.id,
      name: lecture.name,
      lecturer: `${firstName} ${lastName}`,
      startDate: lecture.startDate,
      endDate: lecture.endDate,
    };
  }
};
