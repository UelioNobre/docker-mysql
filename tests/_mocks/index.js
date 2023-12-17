const mockAccountListByUserTokenId = [
  {
    id: 1,
    user_id: 1,
    document: "987654321-20",
    document_type: "cpf",
    status: true
  },
  {
    id: 2,
    user_id: 1,
    document: "12.345.678/0001-90",
    document_type: "cnpj",
    status: true
  }
];

const mockUsers = [
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

const mock_DB_AccountsForUserWithId_1 = [
  {
    dataValues: mockAccountListByUserTokenId[0]
  },
  {
    dataValues: mockAccountListByUserTokenId[1]
  }
];

module.exports = { mockAccountListByUserTokenId, mockUsers, mock_DB_AccountsForUserWithId_1 };
