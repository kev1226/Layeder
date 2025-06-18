const helloRepository = require('../repositories/helloRepository');

exports.sayHello = () => {
  return helloRepository.getMessage();
};
