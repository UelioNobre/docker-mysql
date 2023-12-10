function unauthorizedAccess() {
  const causeErrorMessage = "Authentication is required.";
  const causeErrorCode = 401;
  const causeError = JSON.stringify({ code: causeErrorCode, message: causeErrorMessage });

  throw new Error("Unauthorized access.", { cause: causeError })
}
function invalidToken() {
  const causeErrorMessage = "Invalid token.";
  const causeErrorCode = 400;
  const causeError = JSON.stringify({ code: causeErrorCode, message: causeErrorMessage });

  throw new Error("Unauthorized access.", { cause: causeError });
}

module.exports = {
  unauthorizedAccess,
  invalidToken,
};
