/* eslint-disable-next-line */
export const sortByWeight = arr => {
  const sumNumbers = number =>
    number
      .split('')
      .reduce((prev, current) => parseInt(prev) + parseInt(current));

  return arr.sort((a, b) => sumNumbers(a) > sumNumbers(b));
};
