//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task is complete");
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise Consumed")
})




new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})




const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "HARSH", email: "harsh@gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})




const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "harsh", password: 12345 })
        }
        else {
            reject("error, something went wrong")
        }
    }, 1000)
})

promiseFour.then(
    (user) => {
        console.log(user);
        return user.username
    }
).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))





const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: 12345 })
        }
        else {
            reject("error js went wrong")
        }
    }, 1000)
})

async function ConsumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

ConsumePromiseFive();