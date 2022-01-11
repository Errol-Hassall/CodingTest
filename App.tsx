import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Movies from './views/movies/MoviesView';
import Movie from './views/movie/MovieView';
import {RootStackParamList} from './views/navigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Movies">
          <Stack.Screen name="Movies" component={Movies} />
          <Stack.Screen name="Movie" component={Movie} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
