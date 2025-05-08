
# Provide an example of using union and intersection types in TypeScript.

Before we get into the example of **Union** and **Intersection** lets get shortly know about them. Union and Intersection is the or (||) and (&&) version of typescript. When we need to use or operator we can use union `|` and when we need to use and operator we can use intersection `&` in typescript.


#### A short example : 

*  union type 
Union type (can be either Male or Female)
` type Gender = Male | Female ; `

*  intersection type
Intersection type (must be both Bowler and Batsman)

`type Allrounder = Bowller & Batsman ;`


#### Now let's see a detailed example : 

` type Book = {
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



