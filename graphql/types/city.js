import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'City',
  description: 'The city of a country',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'City\'s id',
      resolve(city) {
        return city.id;
      },
    },
    countryId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The country id',
      resolve(city) {
        return city.countryId;
      }
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the city',
      resolve(city) {
        return city.name;
      },
    },
    isActive: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Activation status of the city',
      resolve(city) {
        return city.isActive;
      }
    }
  },
});
