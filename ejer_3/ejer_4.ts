const getOddList = (to: number): number[] | Error => {
  if (to < 1) return new Error('Incorrect value: "to" has to be >= 1');

  if (to < 3) return [1];

  const list = [1];

  for (let i = 3; i <= to; i += 2) {
    list.push(i);
  }
  return list;
};

// Memoized version of getOddList
const memoizedOddList = () => {
  const list = [1];

  return (to: number): number[] | Error => {
    if (to < 1) return new Error('Incorrect value: "to" has to be >= 1');

    if (to < 3) return [1];

    // Function for get the index of a number in the list
    const getIndex = (num: number): number => {
      /* we asume num >= 1.
       * if num == 1|2, -> index == 0.
       * if num == 3|4, -> index == 1.
       */
      return Math.floor((num - 1) / 2);
    };

    const index = getIndex(to);
    const lastIndex = list.length - 1;

    if (index <= lastIndex) {
      //TODO: remove! debug only
      console.log(`${to} already calculated`);

      return list.slice(0, index + 1);
    }

    // start from the next odd number
    const startLoop = list[lastIndex] + 2;

    for (let i = startLoop; i <= to; i += 2) {
      list.push(i);
    }

    return list;
  };
};

console.log(getOddList(9));

const getMemoOddList = memoizedOddList();

getMemoOddList(9);
getMemoOddList(5); // this return the memoized list
