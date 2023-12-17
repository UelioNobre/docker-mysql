const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(chaiHttp);
chai.use(sinonChai);

const { expect } = chai;

const userMiddleware = require('../../../src/middlewares/user.middleware');

afterEach(() => {
  sinon.restore();
});

describe.only("User middleware - validateRequestCreateOrUpdate", () => {
  describe('Valida a propriedade "email"', () => {
    it('lança erro ao informar um e-mail com menor de 6 caracteres', async () => {
      const req = {
        body: {
          email: 'test@examplecom',
          password: 'securePassword',
          name: 'John Doe',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.match(/Enter a valid email/);
      }
    });

    it('lança erro ao informar um e-mail com maior de 30 caracteres', async () => {
      const req = {
        body: {
          email: 'test@example_example_example_example_example_example.com',
          password: 'securePassword',
          name: 'John Doe',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.match(/The email is very long/);
      }
    });


    it('lança erro ao informar um e-mail vazio', async () => {
      const req = {
        body: {
          email: '',
          password: 'securePassword',
          name: 'John Doe',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.match(/The email does not empty/);
      }
    });

    it('lança erro ao informar um e-mail inválido', async () => {
      const req = {
        body: {
          email: 'teste@example',
          password: 'securePassword',
          name: 'John Doe',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.match(/Enter a valid email/);
      }
    });

    it('lança erro se não informar a propriedade "email"', async () => {
      const req = {
        body: {
          password: 'securePassword',
          name: 'John Doe',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.match(/Enter a email/);
      }
    });
  });

  describe('Valida a propriedade "password"', () => {
    it('lança erro ao informar um password muito curto', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: '12',
          name: 'John Doe',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.equals('The password is very short.');
      }
    });

    it('lança erro ao informar um password muito longo', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: '123456789012345678901234567890123456789012345678901234567890',
          name: 'John Doe',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.equals('The password is very long.');
      }
    });

    it('lança erro ao informar um password vazio', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: '',
          name: 'John Doe',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.match(/The password does not empty/);
      }
    });

    it('lança erro ao informar um password inválido', async () => {
      const req = {
        body: {
          email: 'test@examplecom',
          password: '',
          name: 'John Doe',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.match(/Enter a valid email/);
      }
    });

    it('lança erro não informar um a propriedade password', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          name: 'John Doe',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.match(/Enter a password/);
      }
    });
  });

  describe('Valida a propriedade "name"', () => {
    it('lança erro ao informar um name muito curto', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: '123456',
          name: 'John',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.equals('The name is very short.');
      }
    });

    it('lança erro ao informar um name muito longo', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: '123456',
          name: 'John Doe John Doe John Doe John Doe John Doe John Doe John Doe',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.equals('The name is very long.');
      }
    });

    it('lança erro se não informar a propriedade name', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: '123456',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.equals('Enter a name.');
      }
    });

    it('lança erro se informar a propriedade name vazia', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: '123456',
          name: '',
        },
      };

      const res = {};
      const next = sinon.spy();

      try {
        await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      } catch (error) {
        expect(error).to.have.property('cause');
        expect(error.cause).to.have.property('statusCode');
        expect(error.cause.statusCode).to.be.equals(400);
        expect(error.cause).to.have.property('message');
        expect(error.cause.message).to.be.match(/The name does not empty/);
      }
    });
  });

  describe('Ao informar as propriedades name, email e password corretamente', () => {
    it('Deve passar pela validação ao informar os dados de email, password e name corretamente.', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: 'securePassword',
          name: 'John Doe',
        },
      };
      const res = {};
      const next = sinon.spy();
      res.json = sinon.stub().returns();

      await userMiddleware.validateRequestCreateOrUpdate(req, res, next);
      expect(next).to.have.been.calledOnce;
    });
  });
})