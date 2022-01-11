import {StyleSheet} from 'react-native';

/**
 * Compares the first price to the second and determines if its cheaper or not
 * to then return the correct styling for the first price either red or green
 */
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
