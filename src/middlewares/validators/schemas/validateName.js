const Joi = require('joi')
const Validation = require("../validation");

class ValidateName extends Validation {
  constructor() {
    super();
    this.property = 'name';
    this.minLength = 5;
    this.maxLength = 30;
    this.schema = Joi.string()
      .min(this.minLength)
      .max(this.maxLength)
      .empty()
      .required()
      .messages({
        'string.empty': `The ${this.property} does not empty.`,
        'string.min': `The ${this.property} is very short.`,
        'string.max': `The ${this.property} is very long.`,
        'any.required': `Enter a ${this.property}.`,
      });
  }
};

module.exports = ValidateName;
