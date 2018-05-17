import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Person',
  description: 'The user of the application',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Person\'s id',
      resolve(person) {
        return person.id;
      }
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the user',
      resolve(person) {
        return person.first_name;
      }
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The surname of the user',
      resolve(person) {
        return person.last_name;
      }
    },
    about: {
      type: GraphQLString,
      description: 'The short information of the user',
      resolve(person) {
        return person.about;
      }
    },
  },
});
