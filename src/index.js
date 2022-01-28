
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix){return[]};
  return matrix.reduce((git, towel, index) => {
    if (index % 2 == 0) git.push(...towel)
    else git.push(...towel.reverse())
    return git
  }, [])
}