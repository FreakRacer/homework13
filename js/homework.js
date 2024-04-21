/*
let a = 2;
let b = 5;

let 1a = "error"
let -b = "error"
   
b = a + b
b = a - b
a = a - b

//console.log(a);

let name = "John";
let admin = name;

alert(admin)


//console.log(a); */

//mission ; JavaScript 2

/*
let data = "28.02.1999";
//let P = MATH.P;

let a = 2;

const b = 2;

// b = 3;

console.log(b)
 
let ruble = 100 
let dollar = 1

alert(' ruble =  ' + ruble + '   dollar =   ' + dollar)

let i_have = prompt ('i have rubles') 
let i_give = i_have / ruble

alert(i_give)

let name = prompt ('your name?')

let adress = prompt('your adress?')

let phone = prompt('your phone?')

console.log(    
    `student name: ${name}; 
    student adress: ${adress};
    student phone: ${phone} `
)
*/

// js mission: 3

/* 1
const num = prompt("rite number")

if(num < 10){
    alert( 'constanta < 10')
} else{
    alert('constanta > 10')
} 
*/
/* 2
let y = 7
let x = 10 < y ? 'x < y' : 'x > y';

console.log(x)
*/

/* 3
let num = prompt('number?')

if(num%2===0){
    console.log('chet')
} else{
    console.log('nechet')
}
*/

/* 4
let userN1 = prompt('your number?')
let userN2 = prompt('your number 2?')
let userN3 = prompt('your number 3?')

if(userN1 > userN2 && userN1 > userN3){
    console.log(userN1)
} else if(userN2 > userN1 && userN2 > userN3){
    console.log(userN2)
} else if(userN3 > userN1 && userN3 > userN2){
    console.log(userN3)
}
*/

// js mission: 4

/*
function hey(x) {
    if (x > 10) {
        console.log( `${x} more 10`);
    } else {
        console.log(` ${x} min 10`);
    }
    
};
hey(5);

function hello(text) {
    alert(text)
};

hello("hello world!");

function console__text(text) {
    console.log(text);
}
console__text("JavaScript") 

function text(text){
   if (text == "lorem"){
    console.log("you got mistake in text");
   } else {
    console.log(`mine text: ${text}`);
   }
}
text("lor")
*/

// js missio: 5
/*
let a = 0;

while(a < 10){
    console.log(a)
    a++
}

console.log(a)*/
/*
for( b = 0; b < 11; b++){
   //if (b % 2 == 0) continue;
    console.log(b);
}
*/
/*
let man = {
   '-name': "1",
   age: {
    data:0. 0. 2002,
    age: 2;
   },
   weight:  3,
   skinColor: "4",
   text: function(a) {
     a = prompt('text')
    console.log(`hello, that is post write, i just send ${this.skinColor} )
   },
   password: 12,
   login: 13,
}
man.height = 190

//man.text();

console.log(man);  


let name = prompt("your name?");
let login = prompt("your login?")
let password = prompt("your password?");

if (password == man.password && login == man.login ) {
  console.log(`welcome ${name}!`);
}else if( password != man.password && login == man.login){
    console.log("wrong password")
} else if( password == man.password && login != man.login){
    console.log("wrong login")
} else {
  console.log(`${password} is wrong! try again`);
}

*/

/*
let num = 0;
while (num < 3) {
  console.log(`your ${num}`);
  num++;
}
*/

//  mission js : 6

//let arr = [1, "a", false, 4555,4,77,'aaa'];

//arr.pop()

//arr.push("end")

//console.log(arr[arr.length - 1])

//arr.shift()

//arr.unshift("hello!")

//arr[1] = "text"

//let arr2 = arr.splice(2,3)

//console.log(arr2[2])

//let arr2 = arr.slice(0, 5)

//console.log(arr)

//  1


let a = ["lorem", 123, true, "ipsum"]

console.log(a.length);

console.log(a[0], a[a.length - 1]);

let em = []

em.unshift('a', 1, 'a', 1);
em.shift()
em.shift()
em[2] = 'b';
em.push(2, 'c', 2, 'c');
em.pop()
em.pop()
em.push('text', 'text', 'text')
em.splice(5, 3)
console.log(em)



let n = [1,3,5,7,9] ;
let b = n.map(
    item => item + 1);

    console.log(b)






//for( b = 0; b < 11; b++){
    //if (b % 2 == 0) continue;
 //    console.log(b);



