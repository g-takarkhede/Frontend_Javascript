// part of RxJS (Reactive Extensions for JavaScript)  not native to javascript
// Observables, Observers and Subscriptions
//for async data stream

//Observable pattern

//Observable (event emitter) - next , error, completion event
//Observer (event listener, subscriber) - subscribe()
//Handler (event handler) - next(), error(), completion()

const {Observable} = require('rxjs');
const data= [];

myObservable = new Observable((observer)=>{
    setTimeout(() => observer.next(1), 1000);
    setTimeout(() => observer.next(2), 2000);
    setTimeout(() => observer.next(3), 3000);
    // setTimeout(() => observer.error("Something went wrong!"), 3500);
    setTimeout(() => observer.next(4), 4000);
    setTimeout(() => observer.next(5), 5000);
    setTimeout(() => observer.complete(), 6000);
    setTimeout(() => observer.next(7), 7000);
});

function GetAsyncData(){
    myObservable.subscribe((val)=>{
        data.push(val);
        console.log("Received:", val);
        console.log("Current data:", data);
    })
}

GetAsyncData();