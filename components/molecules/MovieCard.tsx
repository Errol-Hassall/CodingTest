import React from 'react';
import {Card, Subheading, Title} from 'react-native-paper';
import priceStyle from '../../helpers/price/priceStyle';
import {useNavigation} from '@react-navigation/native';

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

  const navigation = useNavigation();

  const navigateToDetailView = () => {
    // issue with typing here, complains it should be never, when it should be a string
    navigation.navigate('Movie', {
      movie,
    });
  };

  return (
    <>
      <Card onPress={() => navigateToDetailView()}>
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
