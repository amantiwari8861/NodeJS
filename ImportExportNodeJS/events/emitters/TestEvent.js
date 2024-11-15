let EventEmitter=require("events");

// console.log(event);

let eventEmitter=new EventEmitter ();

eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});


eventEmitter.emit("greet","Aman");

eventEmitter.once('connect', () => {
    console.log('Connected!');
});

eventEmitter.emit('connect'); // Triggered
eventEmitter.emit('connect'); // Not triggered again

const greet = (name) => console.log(`Hello, ${name}!`);
eventEmitter.on('greet', greet);

eventEmitter.emit('greet', 'Alice'); // Outputs: Hello, Alice!
eventEmitter.off('greet', greet);     // Remove the listener
eventEmitter.emit('greet', 'Bob');    // No output, listener removed
