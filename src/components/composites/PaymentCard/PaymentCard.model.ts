export interface IPaymentCardViewProps {
    title: string;
    subTitle?: string;
    checked: boolean;
    paymentMethod: number;
    id: string | number;
    installment?: {
        transferValue: number,
        cardFee: number,
        installmentFee: number,
        total: number,
        numberOfInstallments: number
    }
    onChangeAccountBalance: () => void;
    getPaymentPlanCard?: () => void;
}

export interface IPaymentCardProps extends IPaymentCardViewProps {}
