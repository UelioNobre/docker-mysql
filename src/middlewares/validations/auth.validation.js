const Joi = require('joi');
const autErrorMessages = require('../../utils/errors/auth.error.messages');

async function validateEmailPassword({ email, password }) {
  const schema = Joi.object({
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
      .messages({
        'object.regex': "Enter a password between 8  and 30 characters.",
        'string.pattern.base': "Enter a password between 6 and 30 characters.",
      }),
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required()
      .messages({
        'string.email': 'Enter a valid e-mail.',
        'any.required': "Enter a email.",
      })
  });

  try {
    await schema.validateAsync({ email, password });
  } catch (error) {
    const message = error.details[0].message;
    autErrorMessages.show({ message });
  }
}

module.exports = {
  validateEmailPassword,
};
