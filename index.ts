{
  // 1. Create a function that takes a string and an optional boolean.

  //   function formatString(input: string, toUpper?: boolean): string {
  //     if (toUpper == true || toUpper === undefined) {
  //       return input.toUpperCase();
  //     } else {
  //       return input.toLocaleLowerCase();
  //     }
  //   }

  //   console.log(formatString("I am kashem", false));

  // 2. Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.



//   5. Write a function that takes a string | number and returns:

function processValue(value: string | number): number {

    if ( typeof value === 'number' ) {
        return value * 2 ;
    }
    else return value.length ;
}

console.log(processValue(""));





  // 7. Create a function that returns "Weekday" or "Weekend" based on the input day.

//   enum Day {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday,
//   }

//   function getDayType(day: Day): string {
//     const Weekend1 = day == Day.Saturday  ;
//     const Weekend2 = day == Day.Sunday  ;

//     if (Weekend1 || Weekend2) {
//       return "weekend";
//     } else return "weekday";
//   }

//   console.log(getDayType(Day.Monday));
//   console.log(getDayType(Day.Saturday));
  
  

  //
}
