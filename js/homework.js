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

/*
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

*/


// misiion js : 7

/*
let mas = [1, 2];

let mas2 = ['lorem', 2, true,  898,]

let Text = 'lorem ipsum text more'


const data = 
[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
]
 */
/*
let mas3 = mas.reduce(function(acc, item, idex, Array){
     return item + acc
}, 0 )

console.log(mas3)
*/

/*
let mas3 = data.filter(function(item, index, arr){
    if( item.id > 1){
     return item
    }
}) 
*/


/*
let mas3 = data.map(function(item , idex, array){
    return item.title
})

console.log(mas3)
*/


/*
let mas5 = mas.map(function(item, index, Array) {
    //return item + 1
    return `i can change ${item} and: ${index}`
})
*/


/*
mas2.forEach(function(item, index, Array){
    console.log(`elem : ${item } index: ${index}`)

}) */


//let mas3 = mas.concat(mas2)

//mas.reverse()

//let mas3 = mas2.includes('lorem')

//let mas3 = mas.indexOf(9)

//let mas3 = Text.split( ' ')

//let mas4 =  mas3.join(' ')



/*

let aaa = [10, 2762, 0.42, 192 , 3, 28, 1125, 2018, 34, 66, 100]

aaa.forEach(function(item, index, array){
    if(  item % 2 != 0){
        console.log(item)
    }
});


let ass = 'lerem text dollar me bigboss junky funky worm'

let ass2 = mas.split( ' ');


let ass3 = ass2.filter (function(item, index){
    if( item.length < 4){
       return item
    }
});
console.log(ass3)

*/

/*
let agg = [1, -3, 5, 6, -7, 8, 9, -11]

let agg2 = agg.filter(function(item, index, array){
    return item < 0
    
})
console.log(agg2)

let ann = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];

let ann2 = ann.filter(function(item, index, array){
    if(item % 2 == 0){
        return item
    }
})
console.log(ann2)

let aff = [ "lorem",  "ipsum", "javascript", "php", "css", "react", "git", "html", "mysql"]

let aff2 = aff.map(function(item, index, array){
    if(item.length != 3){
        console.log(item)
    }
})

let att = [5, 6, 7, 8, 9];

let att2 = att.map(function(item, index){
    return item * item
})
console.log(att2)



let ajj = [-13, 0, 12, 1662, -0.32, -102, -2];

let ajj2 = ajj.filter(function(item, index){
    if( item < 0){
        return item 
    }
})
let ajj3 = ajj2.reduce(function(acc,item, index){
 
    return acc + item 

}, 0)

console.log(ajj3)

let ahh = [{a : 10,
            b : 5},
           {a : 20, 
            b : 22},
           {a : 131, 
            b : 55}];


let ahh2 = ahh.map(function( item, index){
   return item.a + item.b})
console.log(ahh2)

let ayy = [{ x : 10, y : 'lorem'}, { x : 21, y : 'lorem'}, { x : - 17, y : 'lorem'}, { x : 156, y : 'lorem'}];

let ayy2 = ayy.reduce(function(acc, item, index){
        return item.x + acc
}, 0)
console.log(ayy2);
*/