// Enum is a group of named constant values.
// Enum stands for enumeration type

enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec = "DECEMBER"
};

console.log(Month.Apr)

enum Weather{
    Sunny = "SUNNY", 
    Rainy = "RAINY",
    Cloudy = "CLOUDY"
}

console.log(Weather.Cloudy)

enum UserRole {
    Admin,
    User,
    Guest
}

function checkAccess(role: UserRole): boolean{
    return role === 0
}

console.log(checkAccess(UserRole.Admin))
console.log(checkAccess(UserRole.Guest))

enum Level{
    Low = 1,
    Medium,
    High
}

console.log(Level[3])

enum Move { Left = "LEFT", Right = "RIGHT" }
let myMove: Move = Move.Left;
console.log(myMove)


enum KeyValue{
    
}