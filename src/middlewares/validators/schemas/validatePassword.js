const Joi = require('joi');
const Validation = require("../validation");

class ValidatePassword extends Validation {
  constructor() {
    super();
    this.property = 'password';
    this.minLength = 6;
    this.maxLength = 30;
    this.schema = Joi.string()
      .min(this.minLength)
      .max(this.maxLength)
      .empty()
      .required()
      .messages({
        'string.min': `The ${this.property} is very short.`,
        'string.max': `The ${this.property} is very long.`,
        'string.empty': `The ${this.property} does not empty.`,
        'string.email': `Enter a valid ${this.property}.`,
        'any.required': `Enter a ${this.property}.`,
      })
  }
};

module.exports = ValidatePassword;
