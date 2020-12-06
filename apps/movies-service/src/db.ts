import { environment } from './environment';
import mongoose from 'mongoose';

mongoose
  .connect(environment.mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.error('Error connecting to MongoDB', err));
