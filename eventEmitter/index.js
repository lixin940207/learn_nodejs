const EventEmitter = require('events').EventEmitter

class GeekTime extends EventEmitter{
    constructor() {
        super();
        setInterval(()=>{
            this.emit('newlesson', {price: 25})
        }, 3000)
    }
}

const geekTime = new GeekTime()
geekTime.addListener('newlesson', (res)=>{
    console.log('oh ho', res)
})
