var events = require('events');
var EventEmitter = new events.EventEmitter();

EventEmitter.on('isim', function(isim){
    console.log(" Merhaba " + isim );
});
EventEmitter.emit('isim','Gizem');