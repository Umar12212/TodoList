export let value: number = 100

let value2: string | number = 'hi'

let array: string[] = ['html','css']
let array2: Array<string> = ['html','css']

// кортежи tuple

let tuple:[string,number, boolean] = ['zafar',24,true]

// type - используется в основном для описания примитивов


type Text = string | string[]

let word: Text = 'hello'
let secret: Text = ['html', 'css']


type User = {
    id:number
    name: string
    age: number
    gender: string
    city: string
    working?: boolean | string[]
}

type Pro = {
    skills: string[]
}

type Admin = User & Pro

let user: Admin = {
    id: 2,
    name: 'Zafar',
    age: 24,
    gender: 'male',
    city: 'Tashkent',
    skills: ['s']
}



// interface - используются Только для описания объектов и массивов


// interface IProduct  {
//     id: number
//     title: string
//     description: string | string[]
//     price: string | number
//     info: () => string
// }

// interface IPro {
//     discount: string
// }

// interface IBest extends IProduct, IPro {}


// let apple: IProduct = {
//     id: 1,
//     title: 'Яблоко',
//     description: 'Вкусно',
//     price: '1000сум',
//     info() {
//         console.log('dasdsa');
//     }
// }




// generics - универсальные типы данных

function find<T>(value: T): T[] {
    return [value]
}

find<string>('typescript')
find<number>(100)
find<boolean>(true)