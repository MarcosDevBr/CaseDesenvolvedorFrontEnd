import { EdgeInsets } from "react-native-safe-area-context";
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export interface IPixPayView {}

export interface ICreditCards {
    id: number;
    title: string;
    cardNumber: string;
    cardBrand : string;
}

export interface IPixPayViewProps {
    isLoading: boolean;
    cardFee: number;
    selectedPayment: number;
    totalValue: number;
    installmentFee: number;
    selectedInstallments: number;
    account: IAccount | null;
    insets: EdgeInsets;
    isModalVisible: boolean;
    bottomSheetModalRef: React.RefObject<BottomSheetModal>;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    handlePresentModalPress: () => void
    calculateTotalPayment: () => number;
    handlePaymentSelect: (paymentId: number) => void;
    handleSelectInstallment: (installments: number) => void;
    calculateInstallment: (installments: number) => number;
    handlePaymentPress: () => void;
    handleCloseModal: () => void;
    onModalDismiss: ()  => void;
}
export interface IPixReceiver {
    name: string;
    id: string;
    pixKey: string; // Chave PIX do destinatário
}

export interface IAccount {
    accountId: number;
    balance: number;
    currency: string;
    status:string;
    owner: {
        name: string;
        id: string
    },
    receiver: {
        name: string,
        id: string,
        pixKey: string,
    },
    creditCards?: ICreditCards[],
    pix: {
        date: Date,
        amount: number,
        transactionId: string,
        cardFee: number,
        installmentFee: number
    }
}

export interface  IRecipient {
    name: string;
    accountId: number;
}

export interface IPixPayment {
    pixPayment: IPixPaymentDetails[];
}

export interface IPixPaymentDetails {
    recipient: IRecipient;
    amount: number;
    currency: string,
    date: string,
    description: string,
    transactionId: string,
};

export type FormDataProps = {
    id: string;
    name: string;
}