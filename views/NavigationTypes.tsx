import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Movie} from '../components/molecules/MovieCard';

export type RootStackParamList = {
  Movies: undefined;
  Movie: {movie: Movie};
};

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Movies'
>;
