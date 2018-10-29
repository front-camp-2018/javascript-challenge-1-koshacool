/* eslint-disable-next-line */
export const doubleNum = num => {
  const numString = `${num}`;
  const symbolsLength = numString.length;

  if (numString.substring(0, symbolsLength / 2) === numString.substring(symbolsLength / 2)) {
    return num;
  }

  return num * 2;
};
