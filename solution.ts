//problem 1
function formatValue(value:string|number|boolean):string|number|boolean
{


    if(typeof value==="string")
    {
        return value.toUpperCase();

    }
    else if (typeof value==="number"){
        return value*value;
    }
    else if (typeof value==="boolean"){
        return !value;
    }

    return value;
}



//problem 2 



function getLength(value:string |unknown[]):number
{

   return value.length;
      

}

//problem 3


class Person {
    name : string;
    age : number ;

    constructor(name :string ,age:number){
        this.name =name ;
        this.age=age;
    }

    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}




//][problem 4
type Item={
    title:string;
    rating:number;
};
const filterByRating = (items: readonly Item[]): Item[] => {
  return items.filter(item => item.rating >= 4);
    }

    //problem 5


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const filterActiveUsers = (users: readonly User[]): User[] => {
    return users.filter(user => user.isActive);
};

//problem 6
 
interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}
const printBookDetails = (book: Book): string => {
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`;
};


//problem 7
function getUniqueValues(
    array1: (string | number)[],
    array2: (string | number)[]
): (string | number)[] {
    const result: (string | number)[] = [];

    for (let i = 0; i < array1.length; i++) {
        let exists = false;

        for (let j = 0; j < result.length; j++) {
            if (result[j] === array1[i]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result[result.length] = array1[i];
        }
    }

    for (let i = 0; i < array2.length; i++) {
        let exists = false;

        for (let j = 0; j < result.length; j++) {
            if (result[j] === array2[i]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result[result.length] = array2[i];
        }
    }

    return result;
}


//Problem 8


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) return 0;

    return products.reduce((total, product) => {
        const basePrice = product.price * product.quantity;

        const discountAmount = product.discount
            ? (basePrice * product.discount) / 100
            : 0;

        return total + (basePrice - discountAmount);
    }, 0);
}

