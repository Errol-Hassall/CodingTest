import {StyleSheet} from 'react-native';

export default (priceA: number, priceB: number) => {
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

  return priceA <= priceB ? styles.cheap : styles.expensive;
};
