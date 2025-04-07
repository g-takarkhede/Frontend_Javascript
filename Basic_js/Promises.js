// asynchronous task return promise 
// states of promises
// pending 
// fulfilled
// rejected 

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task complete");
        resolve({ username: "Gauri", email: "g@gmaail.com" })
    }, 1000)
})

promiseOne.then(function (user) {
    console.log("Promise consumed", user);
})


const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Gauri", password: "123" })
        }
        else {
            reject('ERROR : Something went wrong')
        }
    }, 1000)
}).then((user) => {
    console.log(user);
    return user.username
}).then(function (username) {
    console.log(usernam)
    // reject("rejected")
}).catch(function (error) {
    console.log( "Hii")
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Gauri", password: "123" })
        }
        else {
            reject('ERROR : Something went wrong')
        }
    }, 1000)
})

async function consumePromiseThree() {
    try {
        const response = await promiseThree
        console.log(response)
    } catch {
        console.log(error)
    }
}

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    console.log("Hello")
})
.catch((error)=> console.log(error, "lastError"))