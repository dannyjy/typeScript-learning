/*
TypeScript gives us built-in tools like Partial<T> (makes everything optional) or Omit<T> (removes specific properties). Why is it better to use these tools to modify an existing interface, rather than just copy-pasting and creating a slightly different, brand-new interface?
*/

// Example 1
let genericHeader = "Hello";
const specificHeader = "Hello";

let response: "yes";
response = "yes";
// response = "no";  // Error: Type '"no"' is not assignable to type '"yes"'

// Example 2
type ButtonSize = "small" | "medium" | "large";

function createButton(size: ButtonSize) {
  // ... logic
}

createButton("small");  // OK
// createButton("huge");   // Error: Argument of type '"huge"' is not assignable to parameter of type 'ButtonSize'.

// Example 3
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function sendRequest(url: string, method: HttpMethod) {
  // ...
}

sendRequest("/api/user", "GET");  // OK
// sendRequest("/api/user", "CONNECT"); // Error

// Example 4
type Vertical = "top" | "bottom";
type Horizontal = "left" | "right";

// This automatically creates: "top-left" | "top-right" | "bottom-left" | "bottom-right"
type Alignment = `${Vertical}-${Horizontal}`;

let myPos: Alignment = "top-left"; // OK

// Example 5
type FileExtension = ".json" | ".txt" | ".png";

function saveFile(name: string, ext: FileExtension){
    let file: string = `${name}${ext}`

    console.log("File saved with the extension",ext)
    return file;
}

console.log(saveFile("Users",".json"))
// console.log(saveFile("Users",".mp4"))
