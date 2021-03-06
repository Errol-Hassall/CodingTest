import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from 'react-query';
import moviesCinemaWorld from '../../api/queries/moviesCinemaWorld';
import moviesFilmWorld from '../../api/queries/moviesFilmWorld';
import MovieCard, {Movie, MovieApi} from '../molecules/MovieCard';

export default () => {
  const {
    data: dataMoviesCinemaWorld,
    error: errorMoviesCinemaWorld,
    isLoading: cinLoading,
  } = useQuery('moviesCinemaWorld', moviesCinemaWorld, {
    retry: 5, // flakey api must retry 5 times
  });

  const {
    data: dataMoviesFilmWorld,
    error: errorMoviesFilmWorld,
    isLoading: filmLoading,
  } = useQuery('moviesFilmWorld', moviesFilmWorld, {
    retry: 5, // flakey api must retry 5 times
  });

  const renderItems = useCallback(({item}) => <MovieCard movie={item} />, []);

  const keyExtractor = useCallback(item => item.ID, []);

  if (
    errorMoviesCinemaWorld ||
    errorMoviesFilmWorld ||
    cinLoading ||
    filmLoading
  ) {
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  }

  // extracts out the film world data
  const filmWorldData: MovieApi[] = dataMoviesFilmWorld?.data?.Movies.map(
    (movie: Movie) => {
      return movie;
    },
  );

  // extracts out the cinema world data
  const cinemaWorldData: MovieApi[] = dataMoviesCinemaWorld?.data?.Movies.map(
    (movie: Movie) => {
      return movie;
    },
  );

  // constructs the movie object used to render each list item
  const movieData: Movie[] = filmWorldData?.map((movie: MovieApi) => {
    const cinemaWorldMatch: MovieApi = cinemaWorldData?.find(
      // ID's does not match so must use Title should be improved
      (m: MovieApi) => m.Title === movie.Title,
    ) as MovieApi;

    return {
      ...movie,
      PriceCinWorld: cinemaWorldMatch?.Price,
      PriceFilmWorld: movie.Price,
    };
  });

  return (
    <SafeAreaView style={[styles.view]}>
      <FlatList
        data={movieData}
        renderItem={renderItems}
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={5}
        windowSize={5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
