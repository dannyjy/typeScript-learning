/**
 // Note:  5️⃣Optional Properties

Create a Product type with:
id
name
price
discount (optional)

Then create multiple product objects (with and without discount).
*/

/**
 // Note: 6️⃣ Readonly Properties

Create a Config object type where:
apiKey cannot be modified
baseUrl cannot be modified
timeout can be modified
Try changing values.
 */

/** 9️⃣ Array Inside Object
Create a BlogPost type with:
title
content
tags (array of strings)
comments (array of objects with user and message)
*/

/**
1️⃣3️⃣ E-Commerce Order System

Create a type Order with:
orderId
customer (object with name + email)
items (array of objects: productId, quantity, price)
totalAmount
status ("processing" | "shipped" | "delivered")
*/

interface User {
    id: number
    name: string
    email: string
}

let obj: User = {
    id: 1,
    name: "John Doe",
    email: "danieljohn@example.com"
}


let email: string = "john@gmail.com"

console.log(obj)
obj = {...obj,email}
console.log(obj)

type Direction = "north" | "south";
type Distance = "10m" | "50m";

type Movement = `${Direction}-${Distance}`;