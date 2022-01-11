import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Subheading, Title} from 'react-native-paper';
import {Movie} from '../components/molecules/MovieCard';
import priceStyle from '../helpers/priceStyle/priceStyle';

export default (props: {route: {params: {movie: Movie}}}) => {
  const movie = props.route.params.movie;

  return (
    <View style={[styles.main]}>
      <Title>{movie.Title}</Title>

      <Image source={{uri: movie.Poster}} style={[styles.imageStyle]} />

      <Subheading
        style={[
          priceStyle(movie.PriceCinWorld, movie.PriceFilmWorld),
          styles.priceContainer,
        ]}>
        Cinema World ${movie.PriceCinWorld}
      </Subheading>
      <Subheading
        style={[
          priceStyle(movie.PriceFilmWorld, movie.PriceCinWorld),
          styles.priceContainer,
        ]}>
        Film World ${movie.PriceFilmWorld}
      </Subheading>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center'},
  imageStyle: {width: '100%', height: '75%'},
  priceContainer: {
    width: '100%',
    textAlign: 'center',
  },
});
