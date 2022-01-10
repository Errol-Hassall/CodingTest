import React from 'react';
import {FlatList} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from 'react-query';
import moviesCinemaWorld from '../../api/queries/moviesCinemaWorld';
import moviesFilmWorld from '../../api/queries/moviesFilmWorld';
import isCheapestPrice from '../../helpers/movie/isCheapestPrice';
import MovieCard, {Movie, MovieApi} from '../molecules/MovieCard';

export default () => {
  const {
    data: dataMoviesCinemaWorld,
    error: errorMoviesCinemaWorld,
    isLoading: cinLoading,
  } = useQuery('moviesCinemaWorld', moviesCinemaWorld, {
    retry: 5,
  });

  const {
    data: dataMoviesFilmWorld,
    error: errorMoviesFilmWorld,
    isLoading: filmLoading,
  } = useQuery('moviesFilmWorld', moviesFilmWorld, {
    retry: 5,
  });

  if (
    errorMoviesCinemaWorld ||
    errorMoviesFilmWorld ||
    cinLoading ||
    filmLoading
  ) {
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  }

  const filmWorldData: MovieApi[] = dataMoviesFilmWorld?.data?.Movies.map(
    (movie: Movie) => {
      return movie;
    },
  );

  const cinemaWorldData: MovieApi[] = dataMoviesCinemaWorld?.data?.Movies.map(
    (movie: Movie) => {
      return movie;
    },
  );

  const movieData: Movie[] = filmWorldData?.map((movie: MovieApi) => {
    const cinemaWorldMatch: MovieApi = cinemaWorldData?.find(
      // ID's does not match so must use Title
      (m: MovieApi) => m.Title === movie.Title,
    ) as MovieApi;

    return {
      ...movie,
      PriceCinWorld: cinemaWorldMatch?.Price,
      PriceFilmWorld: movie.Price,
    };
  });

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={movieData}
        renderItem={({item}) => <MovieCard movie={item} />}
        keyExtractor={movie => movie.ID}
      />
    </SafeAreaView>
  );
};
