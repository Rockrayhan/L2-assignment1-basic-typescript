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



// ====================================================================







  // 2. Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.


  // function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  //   const myItem = (items.map(item => item.rating ));
    
  //   return 
    
  // }

  // const books = [
  //   { title: "Book A", rating: 4.5 },
  //   { title: "Book B", rating: 3.2 },
  //   { title: "Book C", rating: 5.0 }
  // ];
  
  // filterByRating(books);



// ====================================================







//   5. Write a function that takes a string | number and returns:

// function processValue(value: string | number): number {

//     if ( typeof value === 'number' ) {
//         return value * 2 ;
//     }
//     else return value.length ;
// }

// console.log(processValue(""));


// ============================================================






// 6. Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.

// interface Product {
//   name: string;
//   price: number;
// }

// function getMostExpensiveProduct(products: Product[]): Product | null {

// if (products.length == 0 ){
//   return null
// }

// let highestPrice = products[0] ;

// for ( let i = 1; i < products.length; i++ ){
//   if ( products[i].price > highestPrice.price ){
//     highestPrice = products[i];
//   }
// }

// return highestPrice ;

// }


// const products = [
//   { name: "Pen", price: 100 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 }
// ];

// console.log(getMostExpensiveProduct(products));
  

// =========================================================================









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
  
// ===========================================================================






// 8. Create an async function that: Returns the square of a number after 1 second , Rejects if the number is negative


function waitOneSecond() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Number cannot be negative");
  }

  await waitOneSecond(); 
  return n * n;
}


squareAsync(6)
  .then(console.log)        
  .catch(console.error);

// squareAsync(-3)
//   .then(console.log)
//   .catch(console.error);   

// =========================================================









  //
}
