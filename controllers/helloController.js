const helloService = require('../services/helloService');

exports.handleRequest = (req, res) => {
  const message = helloService.sayHello();
  res.send(`<h1>${message}</h1>`);
};
