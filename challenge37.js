// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

const itCompaniesThree = ['FaceBook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let index = itCompaniesThree.indexOf('Apple')


let index = itCompanies.indexOf('Apple')
if(index === -1){
  console.log('This company does exist')
} else {
  console.log('This company does not exist')
}
