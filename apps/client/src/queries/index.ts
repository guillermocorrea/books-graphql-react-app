import { gql } from '@apollo/client';

export const MOVIES = gql`
  query {
    movies {
      id
      name
      genre
      year
      image
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation AddMovie(
    $name: String!
    $genre: String!
    $year: String!
    $image: String!
  ) {
    addMovie(name: $name, genre: $genre, year: $year, image: $image) {
      id
      name
      genre
      year
      image
    }
  }
`;
