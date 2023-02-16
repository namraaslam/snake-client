const { connect } = require('http2');

// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  // your code here
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      connection.write('Move: up')
    }
    if (key === 'a') {
      connection.write('Move: left')
    }
    if (key === 's') {
      connection.write('Move: down')
    }
    if (key === 'd') {
      connection.write('Move: right')
    }

    // canned messages 
    if (key === 'b') {
      connection.write("Say: DRACARYS")
    }
  };

module.exports = { setupInput };