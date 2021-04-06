/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrix2 = new Array(matrix.length);
  for (let index = 0; index < matrix2.length; index++) {
    matrix2[index] = [];
  }
  function getMineCount(i, j) {
    let count = 0;
    for (let iz = i - 1; iz <= i + 1; iz++) {
      for (let j2 = j - 1; j2 <= j + 1; j2++) {
        if (iz >= 0 && j2 >= 0 && iz < matrix.length && j2 < matrix[0].length) {
          if (iz === i && j2 === j); else if (!matrix[iz][j2]);
          else { count++; }
        }
      }
    }
    return count;
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix2[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      matrix2[i].push(getMineCount(i, j));
    }
  }
  return matrix2;
}
module.exports = minesweeper;
