const Joi = require('joi');

class Validation {
  setData(data) {
    this.data = data;
  }

  execute() {
    Joi.assert(this.data[this.property], this.schema);
  }
};

module.exports = Validation;
