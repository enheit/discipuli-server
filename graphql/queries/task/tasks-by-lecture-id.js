import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import model from '../../../models';
import { Task } from '../../types';

export default {
  type: new GraphQLList(Task),
  args: {
    lectureId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (root, args, context) => {
    const tasks = await model.LectureTasks.findAll({
      where: {
        lectureId: args.lectureId,
      },
      include: [{
        model: model.LectureTask,
        include: [{
          model: model.Task,
          include: [{
            model: model.PersonAccount,
            include: [{
              model: model.Person
            }]
          }]
        }]
      }]
    });

    return tasks.map(task => {
      const {
        firstName,
        lastName
      } = task.lectureTask.task.personAccount.person;

      return {
        id: task.id,
        name: task.lectureTask.name,
        description: task.lectureTask.description,
        specializationId: task.lectureTask.task.specializationId,
        createdBy: `${firstName} ${lastName}`
      }
    });
  },
};
