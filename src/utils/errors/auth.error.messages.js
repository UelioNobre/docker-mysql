function show({ message }) {
  const causeErrorCode = 400;
  const causeError = JSON.stringify({ code: causeErrorCode, message });

  throw new Error("Unauthorized access.", { cause: causeError });
}

module.exports = {
  show,
};
