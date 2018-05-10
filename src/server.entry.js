import express from 'express';
import graphqlHTTP from 'express-graphql';
import jwtMiddleware from 'express-jwt';
import path from 'path';

import { secretKey } from './configs/jwt.config';
import schema from '../graphql';
import sequelize from '../models/models.setup';

sequelize
  .authenticate()
  .then(resp => {
    console.log('Connected succesfully');
  })
  .catch(err => {
    console.log('Connection failed');
  });

const app = express();

app.use(jwtMiddleware({
  secret: secretKey,
  credentialsRequired: false,
}));

app.use('/graphql', graphqlHTTP((request, response, graphQLParams) => ({
  schema: schema,
  graphiql: true,
  context: {
    request,
  },
})));

app.use(express.static(path.join(__dirname, '../../dist')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../dist/index.html')));

app.listen(3000, () => console.log('Example app listening on port 3000!'))