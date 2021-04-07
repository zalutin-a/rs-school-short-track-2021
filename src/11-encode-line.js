/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str;
  const resArr = [];
  function getCount(el, i) {
    const n = 1;
    if (arr[i] === arr[i + 1]) {
      return n + getCount(arr[i + 2], i + 1);
    }
    return n;
  }
  for (let i = 0; i < arr.length; i++) {
    const n = getCount(arr[i], i);
    resArr.push(n > 1 ? n + arr[i] : arr[i]);
    i += n - 1;
  }
  return resArr.join('');
}

module.exports = encodeLine;
