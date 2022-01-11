import priceStyle from './priceStyle';

describe('Price Styles', () => {
  test('should return the correct styles for a cheaper price', () => {
    const testData = {
      priceA: 25,
      priceB: 26,
    };
    const computedStyle = priceStyle(testData.priceA, testData.priceB);

    expect(computedStyle.backgroundColor).toBe('green');
  });

  test('should return the correct styles for a more expensive price', () => {
    const testData = {
      priceA: 25,
      priceB: 4,
    };
    const computedStyle = priceStyle(testData.priceA, testData.priceB);

    expect(computedStyle.backgroundColor).toBe('red');
  });
});
