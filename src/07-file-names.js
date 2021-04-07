/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = names;
  function changeName(elem, j) {
    let n = 1;
    for (let i = j; i < arr.length; i++) {
      if (arr[i] === elem) {
        arr[i] = `${elem}(${n})`;
        changeName(arr[i], i + 1, n);
        n++;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    changeName(arr[i], i + 1, 1);
  }
  return arr;
}

module.exports = renameFiles;
