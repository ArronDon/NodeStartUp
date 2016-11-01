/**
 * Created by Arron on 2016/11/1.
 */

var events = require('events');
//create an eventEmitter object
var eventEmitter = new events.EventEmitter();
//create an event handler as follows
var connectHandler = function connected() {
    console.log('connection successful');
    eventEmitter.emit('data_received');
};
//bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
//bind the data_received event with the anonymous function
eventEmitter.on('data_received', function () {
    console.log('data received successfully.');
});
//fire the connection event
eventEmitter.emit('connection');
console.log("Program Ended");
