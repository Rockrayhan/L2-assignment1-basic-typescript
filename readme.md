
## 1. Provide an example of using union and intersection types in TypeScript.

Before we get into the example of **Union** and **Intersection** lets get shortly know about them. Union and Intersection is the or (||) and (&&) version of typescript. When we need to use or operator we can use union `|` and when we need to use and operator we can use intersection `&` in typescript.


#### A short example : 

*  union type 
Union type (can be either Male or Female)
` type Gender = Male | Female ; `

*  intersection type
Intersection type (must be both Bowler and Batsman)

`type Allrounder = Bowller & Batsman ;`


#### Now let's see a detailed example : 

` 
type Book = {
        name: string;
        publishYear: number;
        author: string;
        color: "black & white" | "colorful" ;
    }

    type Megazine = {
        name: string;
        publishYear: number;
        author: string;
        color: "black & white" | "colorful" ;
        glocyCover: boolean
    }


    // ✅ Union Type
    type BookOrMegazine = Book | Megazine;

    // ✅ Intersection Type
    type BookAndMegazine = Book & Megazine;


    const MishirAli: Book = {
        name: "Mishir ALir Chosma",
        publishYear: 2007,
        author: "Humayon Ahmed",
        color: "black & white"
    }


    const times: Megazine = {
        name: "Mishir ALir Chosma",
        publishYear: 2007,
        author: "Humayon Ahmed",
        color: "black & white",
        glocyCover: true
    }

`

In the above details example,
*  first we declared two types, **Book** and **Megazine** and provide their values.

* Both types have common properties like **name**, **publishYear**, **author**, and **color**.

* The **Magazine** type has one extra property called **glossyCover**.

-  then, we created:

 - A Union Type **BookOrMagazine** which means it can be either a **Book** or a **Magazine**.

 - An Intersection Type **BookAndMagazine** which means it must have all the properties from both **Book** and **Magazine**.






## How does TypeScript help in improving code quality and project maintainability?


Typescript is oop (Object Oriented Programming) language that builds based on javaScript with some advanced extra features. it extends from javaScript with it's individual extra features. 

#### problems of javaScript.
1. javaScript is a dynamic types language. that means we can insert a string, number , array , object , function into a variable. 
example 
`
let a = "kashem" ;
a = 123 ;
a = [1 , 5 , 9] ;
etc.

`

so in small project type checking may not cause much issue but in large scale project it is very difficult to get or solve type checking errors and manage type checkings. 

2. In TypeScript we don't get the errors in compile we need to get in run time to get the error. but in Typescript we get the errors in compile time ( while coding ). 

3. JavaScript don't support OOP by default but Typescript is by default an OOP language.

4. In large application when multiple developers works together it is very much harder to manage and solve bugs in JavaScript. 
but as typeScript is an OOP language it is easily manageable. 

5. If we need to convert a project into older version like ES3 it is very easily manageable with typeScript. we can use typeScript config file to convert our code to our required javaScript version. because at the end of the day typeScript converts itself as JavaScript. 


6. TypeScript has its own types like **enum**, **array**,  **void**, **tuple**, **interface**, **union**, **intersaction**. Using this advance types developers can easily manage the application and it's types. 

7. If we write a function export it and important in to another file, when we ty to write the function's parameters, typeScript suggest us the params types automatically. it is very productive for the developers. 


8 . so using type script we get much less bugs. so it takes also much less time for testing the application. 


#### drawbacks 

1. existing javaScript to  Typescript conversion in an application it takes a lot of time and effort. so it is very challenging in migration from javaScript to Typescript.

2. we need to declare every types for each variable so it is also very time consuming.

3. Typescript doesn't support some library /packages by default. so we need to get  additional type Libra support