const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const accountService = require('../../../src/services/account.service');
const accountModel = require('../../../src/models/account.model');
const mocks = require('../../_mocks');

const { expect } = chai;

afterEach(() => {
  sinon.restore();
});

describe('Account Service', () => {
  // Listar
  it('deve retornar umm lista de contas e statusCode 200 de um usuário', async () => {
    const mockUserId = 1;
    const mockPayload = mocks.mockAccountListByUserTokenId;
    const modelStub = sinon.stub(accountModel, 'allAccountsByUserID').resolves(mockPayload);

    const result = await accountService.listAllAccountsFromUser(mockUserId);

    expect(result).to.have.property('statusCode', 200);
    expect(result).to.have.property('message');
    expect(result.message).to.have.lengthOf(2);
    expect(result.message).to.have.deep.equals(mockPayload);
    expect(modelStub).to.have.been.calledOnceWith(mockUserId);
  });

  it('deve retornar uma lista vaziae statusCode 404 caso não seja encontrado nenhuma conta', async () => {
    const expected_statusCode = 404;
    const expected_message = [];

    const mockUserId = 9999;
    const mockAccountModel = sinon.stub(accountModel, 'allAccountsByUserID').resolves([]);

    const result = await accountService.listAllAccountsFromUser(mockUserId);

    expect(mockAccountModel).to.have.been.calledOnceWith(mockUserId)
    expect(result).to.have.property('statusCode', expected_statusCode);
    expect(result.message).to.be.deep.equal(expected_message);
  });

  it('deve retornar um objeto com statusCode 500 caso seja encontrado algum erro no banco de dados', async () => {
    const expected_statusCode = 500;
    const expected_message = 'Ops! Parece que estamos com problemas para acessar nossos serviços no momento. Tente novamente em alguns minutos.';

    const mockUserId = 9999;
    const mockAccountModel = sinon.stub(accountModel, 'allAccountsByUserID').throws(new Error("Ocorreu um erro"));

    const result = await accountService.listAllAccountsFromUser(mockUserId);

    expect(mockAccountModel).to.have.been.calledOnceWith(mockUserId)
    expect(result).to.have.property('statusCode', expected_statusCode);
    expect(result.message).to.be.deep.equal(expected_message);
  });
});
