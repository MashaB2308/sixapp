let button = 1;
let button2 = prompt("Когда у тебя др, бро?")

if(button2>5) {
    console.log("не верно")
} else if (button2<4) {
   console.log("верно, но не точно")
}

switch(button, button) {
    case 1:
    console.log("Верно")
    break

    default:
    console.log("Совсем не верно")
}

let result0r = button ?? button2;
console.log(result0r);


let x = 9

if(x=1 && x<=3) {
    console.log("Зима")
} else if (x>=4 && x<=6) {
    console.log("Весна")
} else if (x>=7 && x<=9) {
    console.log("Лето")
} else if (x>=10 && x<=12) {
    console.log("Осень")
} else {

}



const value = null;
const defaultValue = 7;
const value1 = 25;

const result = value ?? defaultValue ?? value1;
console.log(result);


// const value = 0;
// const result0r = value || 10;

// console.log(result0r);


// let age = 23

// if (age === 22) {
//     console.log(true)
// } else if(age>=22) {
//     console.log("близко")
// } else {
//     console.log(false)
// }

// let x = 6

// switch(x) {
//     case 1:
//     console.log("верно")
//     break

//     case 2:
//     console.log("да, вы правы, тут лежит 2")
//     break

//     default:
//     console.log("Вы ошиблись в каждом кейсе")
// }


// let temperature = 15

// if(temperature<10) {
//     console.log("Надень тёплую куртку.")
// } else if (temperature>=10 && temperature<=15) {
//     console.log("Можно надеть свитер")
// } else {
//     console.log("Надень футболку")
// }


// let button = 3

// switch(button) {
//     case 1:
//     console.log("Включить телевизор")
//     break

//     case 2:
//     console.log("Сделать громче")
//     break

//     case 3:
//     console.log("Сделать тише")
//     break

//     default:
//     console.log("Кнопка не работает")
// }


// let fruit = "яблоко"

//     if (fruit === "яблоко") {
//         console.log("Ты любишь яблоки")
//     } else if (fruit === "банан") {
//         console.log("Ты любишь бананы") 
//     } else {
//         console.log("Ты любишь что-то другое") 
//     }
    
    
// let fruit = "апельсин"

// switch(fruit) {
//     case "яблоко":
//     console.log("Ты любишь яблоки")
//     break

//     case "банан":
//     console.log("Ты любишь бананы")
//     break

//     case "апельсин":
//     console.log("Ты любишь апельсины")
//     break

//     default:
//     console.log("ты любишь что-то другое")
// }

