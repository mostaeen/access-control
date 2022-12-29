import express, { json } from 'express';
import { connect, set } from 'mongoose';

import birds from './routes/birds.js';
import genres from './routes/genre.js';
import movies from './routes/movie.js';
import users from './routes/user.js';

import * as dotenv from 'dotenv';
dotenv.config();

set('strictQuery', false);
connect('mongodb://127.0.0.1:27017/mongo-role')
  .then(() => console.log('Connected to mongo db'))
  .catch(err => console.log(err));

const app = express();
app.use(json());

app.use('/birds', birds);
app.use('/genres', genres);
app.use('/movies', movies);
app.use('/user', users);

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
