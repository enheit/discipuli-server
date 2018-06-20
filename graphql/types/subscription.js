import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Subscription',
  description: 'The subscription of the person',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Subscription\'s id',
      resolve(subscription) {
        return subscription.id;
      },
    },
    personAccountId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The account id of a person',
      resolve(subscription) {
        return subscription.personAccountId;
      },
    },
    courseId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The course id of a specialization',
      resolve(subscription) {
        return subscription.courseId;
      },
    },
  },
});
