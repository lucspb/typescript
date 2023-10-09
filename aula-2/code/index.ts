//any
let a: any = 10
let b: any = 'Lucas'
let c: any = true
let d: any = undefined

//array
let values: number[] = [10, 20, 40, 75]

//tupla
let item: [string, number, boolean] = ['Xiaomi', 5, false]

//enum
enum Role{
    admin = 1,
    dev = 2,
    qa = 3    
}

const user1 = {
    firstName: 'Lucas',
    age: 27,
    role: Role.dev
}
console.log(user1)

//function return
function add(n1: number, n2: number): number{
    return n1 + n2
}

// function void
function result(price: number){
    console.log('the result is ' + price)   
}

console.log(result(add(6,5)))

//object
const user2 = {
    firstName: 'Andreza',
    age: 28
}

//unknown
let itemInput: unknown
let itemName: string

itemInput = 10
itemInput = 'orange'

if(itemInput === 'string'){
    itemName = itemInput
}

//never
function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code}
}

generateError('The application crashed', 500)
console.log(generateError('The application crashed', 500))