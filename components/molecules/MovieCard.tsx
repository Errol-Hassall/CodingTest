import React from 'react';
import {Card, Subheading, Title} from 'react-native-paper';
import {StyleSheet} from 'react-native';

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

  const priceStyle = (priceA: number, priceB: number) => {
    return priceA <= priceB ? styles.cheap : styles.expensive;
  };

  return (
    <>
      <Card>
        <Card.Content>
          <Card.Cover source={{uri: movie.Poster}} />
          <Title>{movie.Title}</Title>
          <Subheading
            style={[priceStyle(movie.PriceCinWorld, movie.PriceFilmWorld)]}>
            Cinema World ${movie.PriceCinWorld}
          </Subheading>
          <Subheading
            style={[priceStyle(movie.PriceFilmWorld, movie.PriceCinWorld)]}>
            Film World ${movie.PriceFilmWorld}
          </Subheading>
        </Card.Content>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  cheap: {
    backgroundColor: 'green',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
  },
  expensive: {
    backgroundColor: 'red',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
  },
});
