
// Write a code which can give grades to students according to theirs scores:

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F


let studentTestScores;

if(studentTestScores > 80){
  console.log('Your grade is A')
} else if(studentTestScores < 89){
  console.log('Your grade is B')
} else if(studentTestScores < 69){
  console.log('Your score is C')
} else if(studentTestScores < 59){
  console.log('Your score is D')
} else if(studentTestScores < 49){
  console.log('Your grade is F')
}
