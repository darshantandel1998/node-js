const events = require('events');
var eventEmitter = new events.EventEmitter();

function funev1() {
    console.log('Event 1 Called...')
}
function funev2() {
    console.log('Event 2 Called...')
}

eventEmitter.on('ev1', funev1);
eventEmitter.on('ev1', funev2);

eventEmitter.emit('ev1');
eventEmitter.emit('ev2');