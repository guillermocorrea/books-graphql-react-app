import { buildSchema } from 'graphql';

export const movieSchema = buildSchema(`
  type Query {
    movies: [Movie]
    movieByName(name: String!): Movie
  }

  type Movie {
    id: String
    name: String
    genre: String
    year: String
    image: String
  }

  type Mutation {
    addMovie(name: String!, genre: String!, year: String!, image: String!): Movie
  }
`);
