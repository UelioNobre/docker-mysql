
const userModel = require('../models/user.model');

async function createUser({ name, email, password }) {
  const user = await userModel.createNewUser({ name, email, password });

  return {
    code: 201,
    message: user
  };
}

const readUser = async ({ id }) => {
  const user = await userModel.readOneUser({ id });
  return {
    code: 200,
    message: user
  };
};

const updateUser = async ({ id, name, email, password }) => {
  const user = await userModel.updateUser({ id, name, email, password });
  return {
    code: 200,
    message: user
  };
}

const destroyUser = async ({ id }) => {
  await userModel.deleteOneUser({ id })

  return {
    code: 204,
    message: 'No content.'
  };
}

async function findByEmailAndPassword(email, password) {
  try {
    const user = await userModel.findByEmailAndPassword(email, password);
    return {
      code: 200,
      message: user
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  findByEmailAndPassword,
  createUser,
  readUser,
  updateUser,
  destroyUser
}