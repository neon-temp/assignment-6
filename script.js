// an array of five intern objects
// An array of numerical scores
let interns = [
  { name: "Tobechukwu Aki", scores: [10, 10, 10, 9, 9] },

  { name: "Tochukwu Nwagu", scores: [10, 10, 10, 10, 9] },

  { name: "Chinonso Nnadi", scores: [8, 10, 10, 9, 10] },

  { name: "Jenifer Ileh", scores: [6, 6, 4, 8, 9] },

  { name: "Chidera Uwandu", scores: [9, 0, 7, 9, 9] },
];

// calculates the average of an array of scores.
function calculateAverage(intern) {
  let scores = Object.values(intern.scores);

  // check if the array is empty and return an error message
  if (scores.length === 0) {
    return 0;
  }

  // using the reduce() method to sum up the scores.

  const sum = scores.reduce((sum, score) => sum + score, 0);

  // divide the total sum by the number of scores

  return sum / scores.length;
}
interns.forEach((intern) => {
  console.log(intern.name + "'s average is? ", calculateAverage(intern));
});
