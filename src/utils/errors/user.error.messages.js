function userNotFound() {
  const causeErrorMessage = 'Email/password wrong'
  const causeErrorCode = 404
  return JSON.stringify({
    code: causeErrorCode,
    message: causeErrorMessage
  });
}

module.exports = {
  userNotFound,
};
