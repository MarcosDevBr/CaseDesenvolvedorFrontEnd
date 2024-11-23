export const mockAccountAPIResponse = {
  account: {
    accountId: 1234567,
    balance: 2000,
    currency: "BRL",
    status: "active",
    owner: {
        name: "John Doe",
        id: "987654321"
    },
    receiver: {
        name: 'Maria Oliveira',
        id: '10987654321',
        pixKey: 'maria.oliveira@example.com',
    },
    pix: {
        date: new Date(),
        amount: 100,
        transactionId: 'abc123xyz',
        cardFee: 7.50,
        installmentFee: 7.50,
    },
    creditCards: [
        { 
            id: 1,
            title: 'Cartão Visa',
            cardNumber: '1040609080',
            cardBrand: "visa"
        },
        { 
            id: 2, 
            title: 'Cartão Mastercard', 
            cardNumber: '10406021234',
            cardBrand: 'mastercard'
        },
    ]
  }
};


