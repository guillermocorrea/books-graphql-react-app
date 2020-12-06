import { IMovie } from 'movie-model';
import { logger } from '@guillermocorrea/express-common';
import { Movie } from '../models/movie';

export const resolvers = {
  movies: async () => {
    const movies = await Movie.find().exec();
    logger.info(movies, 'movies resolver');
    return movies;
  },
  movieByName: async ({ name }: { name: string }) => {
    return Movie.findOne({ name });
  },
  addMovie: async ({ name, genre, year, image }: IMovie) => {
    const newMovie = new Movie({
      name,
      genre,
      year,
      image,
    });
    await newMovie.save();
    return newMovie;
  },
};
