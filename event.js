var events = require('events');
var yayici = new events.EventEmitter();

var olayCozucu = function(){
    console.log("Bir kedi gordum sanki!");
}

yayici.on('Miyav',olayCozucu);
yayici.emit('Miyav');