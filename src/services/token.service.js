const jwt = require('jsonwebtoken')
const { createHmac } = require('crypto')

function createExpiresDate() {
  const timeZone = 'America/Fortaleza';
  const currentDate = new Date();
  const daysToExpire = currentDate.getDate() + 15;

  currentDate.toLocaleDateString('pt-BR', { timeZone });
  currentDate.setDate(daysToExpire);

  return currentDate.getTime();
}

function getSecretJWT() {
  const secret = "O segredo da geração do token deve ser guardado com mais de sete chaves"
  return createHmac('sha512', secret).digest('hex')
}

function getJwtConfig() {
  return {
    expiresIn: createExpiresDate(),
    algorithm: 'HS512',  // <- Indica o algoritmo de hash HS256 para criptografia
  };

}

async function sign(payload) {
  return jwt.sign(payload, getSecretJWT(), getJwtConfig());
}

async function verify(payload) {
  return jwt.verify(payload, getSecretJWT());
}

module.exports = {
  sign,
  verify
}