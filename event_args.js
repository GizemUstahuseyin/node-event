var events = require('events');
var EventEmitter = new events.EventEmitter();

EventEmitter.on('Miyav', function(sayi1, sayi2){
    console.log(sayi1 + " tane kedinin " +sayi2+ " defa miyavladığını duydum sanki!");
});
EventEmitter.emit('Miyav', 5,2);