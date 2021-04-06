/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr3 = [...arr];
  const arr2 = [...arr];
  function getI(ind, j) {
    for (let i = ind; i <= j; i++) {
      if (arr3[i] !== -1) return i;
    }
    return false;
  }
  for (let j = arr2.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr2[i] !== -1) {
        if (arr2[i + 1] === -1) {
          const ind2 = getI(i + 2, j);
          if (arr2[i] > arr2[ind2]) {
            [arr2[i], arr2[ind2]] = [arr2[ind2], arr2[i]];
          }
        } else if (arr2[i] > arr2[i + 1]) {
          [arr2[i], arr2[i + 1]] = [arr2[i + 1], arr2[i]];
        }
      }
    }
  }
  return arr2;
}

module.exports = sortByHeight;
