// Check if a day is weekend day or a working day. Your script will take day as an input.


    // What is the day  today? Saturday
    // Saturday is a weekend.

    // What is the day today? saturDaY
    // Saturday is a weekend.

    // What is the day today? Friday
    // Friday is a working day.

    // What is the day today? FrIDAy
    // Friday is a working day.


    let weekendDayorWorkingDay = prompt('what day is it today?')
    let day = weekendDayorWorkingDay.toUpperCase()

    switch(weekendDayorWorkingDay){
      case 'Saturday':
      console.log('Saturday is a weekend')
      break
      case 'saturDay':
      console.log('Saturday is a weekend')
      break
      case 'Friday':
      console.log('Friday is a working day')
      break
      case 'friDay':
        console.log('Friday is a working day')
        break
    }
