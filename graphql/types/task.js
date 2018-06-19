import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Task',
  description: 'The task',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Task\'s id',
      resolve(task) {
        return task.id;
      }
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the task',
      resolve(task) {
        return task.name;
      }
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The description of the task',
      resolve(task) {
        return task.description;
      }
    },
    specializationId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The specialization id',
      resolve(task) {
        return task.specializationId;
      }
    },
    createdBy: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The creator\'s id of the task',
      resolve(task) {
        return task.createdBy;
      }
    },
  },
});
