const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/app');
const accountService = require('../../src/services/account.service');
const { mockAccountListByUserTokenId } = require('../_mocks');

afterEach(() => {
  sinon.restore();
});


describe('Integration Test Account', () => {
  it('deve listar todas as contas de um usuário pelo token', async () => {
    // arrange
    const expected_result = {
      statusCode: 200,
      message: mockAccountListByUserTokenId
    }

    sinon.stub(accountService, 'listAllAccountsFromUser').resolves(expected_result);

    // act
    const response = await chai
      .request(app)
      .get('/accounts')
      .set("authorization", "Bearer " + "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlVzZXIiLCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE3MDI3Mzc4NzMsImV4cCI6MTcwNTczNjYxMTc5N30.PcIwycuFxk1GxbWo1MbRFincTXilq3FskpsyJhZ3IjSq94OCD_Jh1D_d_qa9fPTYZ6aN_kI64rJZ-eMOQx2SYQ ");

    // assert
    expect(response.status).to.be.equal(200)
    expect(response.body).to.be.deep.equals(mockAccountListByUserTokenId)
  });
});
