const mockUser = [
  {
    id: 1,
    name: 'User',
    email: 'user@mail.com',
    password: '123123',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: 'Another',
    email: 'anoter@mail.com',
    password: '123123',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

const mockAccount = [
  {
    user_id: mockUser[0].id,
    document: '987654321-20',
    document_type: 'cpf',
    status: true,
  },
  {
    user_id: mockUser[0].id,
    document: '12.345.678/0001-90',
    document_type: 'cnpj',
    status: true,
  },
  {
    user_id: mockUser[1].id,
    document: '123475789-10',
    document_type: 'cpf',
    status: true,
  }
]

const mockPayments = [
  {
    transactionId: 'pay001',
    accountId: mockAccount.document,
    date: "2023-03-08T12:48:25.000Z",
    value: 105.39,
  },
  {
    transactionId: 'pay002',
    accountId: mockAccount.id,
    date: "2023-03-25T12:25:48.000Z",
    value: 501.93,
  }
]

const mockCashbacks = [
  {
    transactionId: mockPayments[0].transactionId,
    cashback: 1.23
  },
  {
    transactionId: mockPayments[1].transactionId,
    cashback: 0.32
  }
]

const mockTransactions = [
  {
    ...mockPayments[0],
    ...mockCashbacks[0],
  },
  {
    ...mockPayments[1],
    ...mockCashbacks[1],
  },
]


module.exports = {
  mockUser,
  mockAccount,
  mockPayments,
  mockCashbacks,
  mockTransactions
}