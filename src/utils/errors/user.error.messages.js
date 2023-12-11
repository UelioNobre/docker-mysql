function wrongEmailOrPassword() {
  const causeErrorMessage = 'Email/password wrong'
  const causeErrorCode = 400
  const causeError = {
    code: causeErrorCode,
    message: causeErrorMessage
  };

  throw new Error("Bad request", { cause: causeError });
}

function notFound() {
  const causeErrorMessage = 'User not found.'
  const causeErrorCode = 404
  const causeError = {
    code: causeErrorCode,
    message: causeErrorMessage
  };

  throw new Error("Not found", { cause: causeError });
}

module.exports = {
  wrongEmailOrPassword,
  notFound,
};
