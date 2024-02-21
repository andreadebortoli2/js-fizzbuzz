// console.log('Hi');

// -write the loop for numbers from 1 to 100
//     -show on console

/*for (let i = 1 ; i <= 100 ; i++) {
    console.log(i);
}*/

// -find numbers divisible by 3

// i % 3 == 0

//     -add 'f' string to the numbers

/*if (i % 3 == 0) {
    
}*/

//     -show on console

/*if (i % 3 == 0) {
    console.log(i + 'f')
}*/

// -find numbers divisble by 5 

// i % 5 == 0

//     -add 'b' string to the numbers

/*if (i % 3 == 0) {
    
}*/

//     -show on console

/*if (i % 3 == 0) {
    console.log(i + 'b')
}*/

// -check on console if:
//     -numbers divisble by 3 have 'f'
//     -numbers divisble by 5 have 'b'
//     -numbers divisble by 3 and 5 have 'f' and 'b'

/*
    if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + 'f' + 'b')
    } else if (i % 3 == 0) {
        console.log(i + 'f')
    } else if (i % 5 == 0) {
        console.log(i + 'b');
    }
*/
// -add 'Fizz' and 'Buzz' instead of 'f' , 'b' and numbers
//     -set variables for 'fizz' and 'buzz'
const fizz = 'Fizz'
const buzz = 'Buzz'

//     -edit the code with the variables
//     -show on console

/*
for (let i = 1 ; i <= 100 ; i++) {
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
    console.log(fizz + buzz);
    } else if (i % 3 == 0) {
        console.log(fizz);
    } else if (i % 5 == 0) {
        console.log(buzz);
    }
}
*/

// -BONUS 1
//     -create an <ul> in index.html
//     -add <li> with js (different methods)

const list = document.querySelector('ul')

//-with .innerHTML
// list.innerHTML = '<li>x</li>'

//-with .insertAdjacentHTML
// list.insertAdjacentHTML('beforeend' , '<li>y</li>')

//-with .append

// const listItem = document.createElement('li')
// list.append(listItem)
// listItem.innerHTML = 'z'

//     -set the i or strings inside the <li>

for (let i = 1 ; i <= 100 ; i++) {
    // console.log(i);
    const listItem = document.createElement('li')
    list.append(listItem)
    listItem.innerHTML = i
    if (i % 3 == 0 && i % 5 == 0) {
        // console.log(fizz + buzz);
        listItem.innerHTML = fizz + buzz
        
    } else if (i % 3 == 0) {
        // console.log(fizz);
        listItem.innerHTML = fizz
        
    } else if (i % 5 == 0) {
        // console.log(buzz);
        listItem.innerHTML = buzz
    } 
}

