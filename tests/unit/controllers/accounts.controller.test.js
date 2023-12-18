const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const { expect } = chai;

const accountsController = require('../../../src/controllers/accounts.controller');
const accountService = require('../../../src/services/account.service');

const { mockAccountListByUserTokenId, mockUsers } = require('../../_mocks');

afterEach(() => {
  sinon.restore();
});

describe('Unit Tests Accounts controllers', () => {

  describe('listAllAccountsFromUser', () => {
    it('deve retornar todas as contas de um usuário com sucesso', async () => {
      const expected_result = {
        statusCode: 200,
        message: mockAccountListByUserTokenId
      }

      sinon.stub(accountService, 'listAllAccountsFromUser').resolves(expected_result);

      const req = { user: mockUsers[0] };
      const res = {};
      const next = sinon.stub().returns();

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await accountsController.listAllAccountsFromUser(req, res, next);

      expect(res.status).to.be.calledWith(expected_result.statusCode);
      expect(res.json).to.be.have.calledWith(expected_result.message);
    });
  });
});