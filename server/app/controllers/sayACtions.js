// Declare the action

const sayHello = (req, res) => {
    res.send("Welcome to Wild Series !");
  };
  
  // Export it to import it somewhere else
  
  module.exports = { sayHello };