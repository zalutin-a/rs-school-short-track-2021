/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const sObj1 = {};
  const sObj2 = {};
  const arr1 = [...s1];
  const arr2 = [...s2];
  const leng = Math.max(s1.length, s2.length);
  let result = 0;
  for (let i = 0; i < leng; i++) {
    if (i < s1.length) {
      sObj1[arr1[i]] = sObj1[arr1[i]] + 1 || 1;
    }
    if (i < s2.length) {
      sObj2[arr2[i]] = sObj2[arr2[i]] + 1 || 1;
    }
  }
  const keys = Object.keys(sObj1);
  for (let i = 0; i < keys.length; i++) {
    if (sObj1[keys[i]] && sObj2[keys[i]]) {
      result += Math.min(sObj1[keys[i]], sObj2[keys[i]]);
    }
  }

  return result;
}

module.exports = getCommonCharacterCount;
