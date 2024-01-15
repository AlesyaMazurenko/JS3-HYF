// Exercise 1
// Using async await

// 1.
// fetch yes or no from this api: https://yesno.wtf/api. log out the answer

fetch("https://yesno.wtf/api")
    .then((response) => response.json())
    .then((answer) => {
        console.log(answer.answer)
        if (answer.answer === 'yes') {
           console.log(answer.answer)
        } else {
           return fetch("https://knajskdskj.jasdk");
        }
    })
    .then((response) => response.json())
    .then((answer) => console.log(answer))
  .catch((error) => console.log(error));




// Exercise 2
// Using promises

// 1.
// fetch yes or no from this api: https://yesno.wtf/api. log out the answer
// 2.
// Try fetching a url that rejects fx https://knajskdskj.jasdk. Log out the error message

// fetch("https://knajskdskj.jasdk")
//     .then((responce) => {
      
//   })
//   .catch((error) => console.log(error));

// Exercise 3
// 1.
// Create a promise that resolves after 4 seconds. 
// Use this promise to log out the text 'hello' after 4 seconds.
// 2.
// Now make the promise fail by rejecting it with an error message 
// instead of resolving it, and log the error message to the console.

const promise = new Promise(function (resolve, reject) {
    //Success:
    setTimeout(() => resolve("Hello"), 4000);
    // resolve('result');

    //Error:
    // reject('failed')
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => { console.error(error); });


    
// Exercise 4
  
// Create a function that returns a promise, that you can use like this:
// YesNoFail4Seconds should wait 4 seconds before it does one of the following 3 things:
// resolves with a yes
// resolves with a no
// or rejects
// Look into Math.random()

const YesNoFail4Seconds = new Promise((resolve, reject) => {
    setTimeout(() => {
        const answer = Math.random();
        console.log(answer);
        if (answer < 0.5) {
            resolve('yes');
        } else {
            resolve('no');
        }
    }, 4000);
    reject('failed')
});

YesNoFail4Seconds 
  .then((data) => {
    console.log(`The answer is ${data}`);
})
    .catch((error) => {
            console.log(error);
        })
;
