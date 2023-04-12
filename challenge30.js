// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let fourSeasons = '';

switch(season){
  case 'September, October, November':
    console.log('The season is Autumn.')
    break
    case 'December, January, February':
      console.log('The season is Winter')
    break
    case 'March, April, May':
    console.log('The season is Spring')
    break
    case 'June , July, August':
      console.log('The Season is Summer')
      break
      default:
        console.log('No more seasons')
}
