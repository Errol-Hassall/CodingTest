import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Subheading, Title} from 'react-native-paper';
import MovieCards from '../components/organisms/MovieCards';

export default () => {
  return (
    <View style={[styles.main]}>
      <Title>Prince's Theatre</Title>

      <Subheading>Classic Movies At Home</Subheading>
      <MovieCards />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
