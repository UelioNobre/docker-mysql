const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const accountModel = require('../../../src/models/account.model');
const { Accounts } = require('../../../src/db/models');
const mocks = require('../../_mocks');

afterEach(() => {
  sinon.restore();
});

describe('Unit Tests Account Model', () => {
  it('deve um array vazio nenhuma conta seja encontrada', async () => {
    // Dados de exemplo para o teste
    const user_id = 1;

    // Stub do método findAll para retornar os dados de exemplo
    const findAllStub = sinon.stub(Accounts, 'findAll').resolves([]);

    // Chame a função que você deseja testar
    const result = await accountModel.allAccountsByUserID(user_id);

    // Verifique se o stub foi chamado corretamente
    expect(findAllStub).to.have.been.calledOnceWith({ where: { user_id } });
    expect(result).to.have.lengthOf(0);
    expect(result).to.be.deep.equal([]);
  });

  it('deve retornar todas as contas pelo ID do usuário', async () => {
    // Dados de exemplo para o teste
    const user_id = 1;
    const fakeAccounts = mocks.mock_DB_AccountsForUserWithId_1;

    // Stub do método findAll para retornar os dados de exemplo
    const findAllStub = sinon.stub(Accounts, 'findAll').resolves(fakeAccounts);

    // Chame a função que você deseja testar
    const result = await accountModel.allAccountsByUserID(user_id);

    // Verifique se o stub foi chamado corretamente
    expect(findAllStub).to.have.been.calledOnceWith({ where: { user_id } });
    expect(result).to.have.lengthOf(2);
    expect(result).to.be.deep.equal(mocks.mockAccountListByUserTokenId);
  });
});
