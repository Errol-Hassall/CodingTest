import React from 'react';
import {View} from 'react-native';
import {Subheading, Title} from 'react-native-paper';
import MovieCards from '../components/organisms/MovieCards';

export function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Title>Prince's Theatre</Title>

      <Subheading>Classic Movies At Home</Subheading>
      <MovieCards />
    </View>
  );
}
