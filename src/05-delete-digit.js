/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  const result = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === result) {
      arr[i] = '';
      break;
    }
  }
  return Number(arr.join(''));
}
module.exports = deleteDigit;
