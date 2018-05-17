import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import { authenticated } from '../../common';
import model from '../../../models';
import { Lecture } from '../../types';

export default {
  type: Lecture,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, args, context) => {
    return model.lecture.findOne({
      where: {
        id: args.id,
      },
    }).then(lecture => {
      if(lecture) {
        return {
          id: lecture.id,
          name: lecture.name,
        }
      }

      return null;
    })
    .catch(error => {
      throw new Error(error);
    });
  }
};