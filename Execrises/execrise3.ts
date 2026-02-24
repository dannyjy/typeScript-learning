/*
    Implement an overloaded function 'search' that accepts: 
    1. A search term (string) and a limit (number). 
    2. A configuration object containing 'query' and 'filters'. 
    Ensure the function returns a Promise of an array of strings.
*/

type Configuration = {
    query: string
    filters: string[]
}

function search(term: string,limit: number): Promise<Array<string>>;
function search(configuration: Configuration): Promise<Array<string>>;

function search(param1: string | Configuration, param2?: number): Promise<Array<string>>{
    let query: string;
    let limit: number = 10
    let filters: string[] = []
    if(typeof param1 === "string"){
        query = param1
        limit = param2 ?? 10
    }else{
        query = param1.query
        filters = param1.filters
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Result1","Result2","Result3"])
        },300)
    })
}