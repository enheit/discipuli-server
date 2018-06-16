import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Country',
  description: 'The country',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Country\'s id',
      resolve(country) {
        return country.id;
      },
    },
    code: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The short name of the country',
      resolve(country) {
        return country.code;
      },
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the country',
      resolve(country) {
        return country.name;
      },
    },
  },
});
