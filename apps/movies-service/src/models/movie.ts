import mongoose, { Schema, Document } from 'mongoose';

export interface IMovie extends Document {
  name: string;
  genre: string;
  year: string;
  image: string;
}

const movieSchema: Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: String, required: false },
    image: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const Movie = mongoose.model<IMovie>('Movie', movieSchema);
