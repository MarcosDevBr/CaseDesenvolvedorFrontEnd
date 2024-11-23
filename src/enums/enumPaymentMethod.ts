export enum enumCardBrand  {
    VISA = 1,
    MASTERCARD = 2,
    ACCOUNTBALANCE = 3,
}

export function GetCardBrand(idCardBrand : number) {
    switch (idCardBrand ) {
    case 1:
        return 'visa';
    case 2:
        return 'mastercard';
    case 3:
        return 'accountBalance';
    default:
        return 'Não cadastrado';
    }
}
