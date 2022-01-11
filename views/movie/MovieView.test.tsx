import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Movie} from '../../components/molecules/MovieCard';
import MovieView from './MovieView';

describe('Movie detail screen', () => {
  test('renders the movie detail screen', async () => {
    const movie: Movie = {
      Actors: 'Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley',
      ID: 'cw2527338',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg',
      PriceCinWorld: 23,
      PriceFilmWorld: 23,
      Title: 'Star Wars: Episode IX - The Rise of Skywalker',
      Type: 'movie',
    };

    const {getByText, getByTestId} = render(
      <NavigationContainer>
        <MovieView route={{params: {movie: movie}}} />
      </NavigationContainer>,
    );

    expect(getByText(movie.Title)).toBeTruthy();
    expect(getByTestId('imgBackground')).toBeTruthy();
    expect(getByText(`Cinema World $${movie.PriceCinWorld}`)).toBeTruthy();
    expect(getByText(`Film World $${movie.PriceFilmWorld}`)).toBeTruthy();
  });
});
