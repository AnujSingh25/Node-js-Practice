const EventEmitter = require('events')

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter()
myEmitter.on('event', () => {
    console.log('event occured');
    setTimeout(() => {
        console.log("another event");
    }, 3000);
})
myEmitter.emit('event')