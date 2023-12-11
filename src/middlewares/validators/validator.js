class Validator {
  constructor(data) {
    this.validations = [];
    this.data = data;
  }

  addValidation(validation) {
    this.validations.push(validation);
  }

  run() {
    try {
      this.validations.forEach((validation) => {
        validation.setData(this.data);
        validation.execute();
      });
    } catch (error) {
      throw new Error(error.message, {
        cause: {
          code: 400,
          message: error.message
        }
      });
    }
  }
}

module.exports = Validator;
