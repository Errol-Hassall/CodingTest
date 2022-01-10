import React from 'react';
import {Card, Subheading, Title} from 'react-native-paper';

export interface Movie {
  Actors: string;
  ID: string;
  Poster: string;
  Title: string;
  Type: string;
  PriceCinWorld: number;
  PriceFilmWorld: number;
}

export interface MovieApi {
  Actors: string;
  ID: string;
  Poster: string;
  Title: string;
  Type: string;
  Price: number;
}

export default (props: {movie: Movie}) => {
  const {movie} = props;

  return (
    <>
      <Card>
        <Card.Content>
          <Card.Cover source={{uri: movie.Poster}} />
          <Title>{movie.Title}</Title>
          <Subheading>Cinema World ${movie.PriceCinWorld}</Subheading>
          <Subheading>Film World ${movie.PriceFilmWorld}</Subheading>
        </Card.Content>
      </Card>
    </>
  );
};
