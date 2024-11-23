import PixPayView from './PixPay.view';

import { 
    FormDataProps,
    IAccount,
    IPixPayView 
} from './PixPay.model';

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { enumCardBrand } from "@enums/enumPaymentMethod";
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { INavigationProps, MidwayScreem } from '@routes/AppRoute.model';

import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import Loading from '@components/composites/Loading/Loading';
import {  ToastModule } from 'src/module';
import { getUserAccountService } from 'src/services/GetUserAccountService';
import { mockAccountAPIResponse } from '../../../__test__/mock/mockGetUserAccount';

export default function PixPay({}: IPixPayView) {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold
    });

    const [account, setAccount] = useState<IAccount | null>(null);

    // Iniciar selectedPayment com o valor padrão
    const [selectedPayment, setSelectedPayment] = useState<number>(enumCardBrand.ACCOUNTBALANCE);
    const [selectedInstallments, setSelectedInstallments] = useState<number>(0);
    const [amount, setAmount] = useState(0); 
    const [totalAmount, setTotalAmount] = useState(0);
    const [cardFee, setCardFee] = useState(0);
    const [installmentFee, setInstallmentFee] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { navigate } = useNavigation<INavigationProps>();

    const insets = useSafeAreaInsets();

    const toast = new ToastModule();

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    useEffect(() => {
        if (account) {
            // Atualizar os valores com base no account
            setAmount(account.pix.amount);
            setCardFee(account.pix.cardFee);
            setInstallmentFee(account.pix.installmentFee);
            setTotalAmount(calculateTotalPayment()); 
        }
    }, [account]);

    useEffect(() => {
        setTotalAmount(calculateTotalPayment());
    }, [amount, cardFee, installmentFee, selectedPayment, selectedInstallments]);
    

    async function handleGetUserAccount({ id, name }: FormDataProps) {
        try {
          const response = await getUserAccountService({ id, name });

          setAccount(response); 

        } catch (error) {
        //   const isAppError = error instanceof AppError;
      
        //   const title = isAppError ? error.message : 'Tente novamente mais tarde';
      
        //   toast.show({
        //     type: 'error',
        //     text1: "Falha ao obter dados",
        //     text2: title,
        //     autoHide: true,
        //     topOffset: 100,
        //     bottomOffset: 40,
        //     position: 'top',
        //   });
        
        // TODO 
       
        } finally {
            setAccount(mockAccountAPIResponse.account); 
            setIsLoading(false); 
        }
      }
      


    useEffect(() => {
        handleGetUserAccount({
            id: '987654321',
            name: 'John Doe',
        })
    }, [])

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handlePaymentSelect = (paymentId: number) => {
        if (paymentId === enumCardBrand.ACCOUNTBALANCE) {
            setSelectedInstallments(0); // Quando escolher pagamento com saldo, não há parcelas
        } else {
            setSelectedInstallments(0); // Zera as parcelas ao mudar o pagamento
        }
        setSelectedPayment(paymentId);
    };

    const handleSelectInstallment = (installments: number) => {
        setSelectedInstallments(installments);
        setTotalAmount(calculateTotalPayment()); // Atualiza o valor total sempre que a parcela é alterada
    };

    const calculateTotalPayment = () => {
        if (selectedPayment === enumCardBrand.ACCOUNTBALANCE) {
            return amount; // Se for pagamento com saldo, o valor total é igual ao amount
        } else {
            const total = amount + cardFee + installmentFee;
            return total; // Calcula o total considerando a taxa de cartão e a taxa de parcelamento
        }
    };

    const calculateInstallment = (installmentNumber: number): number => {
        const total = calculateTotalPayment();
    
        if (installmentNumber > 0) {
            return parseFloat((total / installmentNumber).toFixed(2));
        }
        
        return 0; 
    };

    const handlePressPay = () => {
        if(!account) return
        if (selectedPayment === enumCardBrand.ACCOUNTBALANCE && account?.balance < amount) {
            console.log("Saldo insuficiente");
            toast.show({
                type: 'error',
                text1: "Saldo Insuficiente",
                text2: "Adicione fundos ou escolha outra forma de pagamento.",
                autoHide: true,
                topOffset: 100,
                bottomOffset: 40,
                position: 'top',
            });
        } else {
            console.log("Clicou aqui");
            const newAccountValue = {
                ...account,
                pix: {
                    ...account.pix,
                    amount: totalAmount,
                }
            }

            navigate(MidwayScreem.loading, {
                account: newAccountValue,
                isPixPayment: true
            });
        }
    };

    const handlePaymentPress = () => {
        if (isModalVisible) {
            setTimeout(() => bottomSheetModalRef.current?.dismiss(), 200);
        } else {
            handlePressPay();
        }
    }

    const handleCloseModal = () => {
        if (bottomSheetModalRef.current) {
            bottomSheetModalRef.current.dismiss();
        }
        setIsModalVisible(false);
    };

    const handleModalDismiss = () => {
        setIsModalVisible(false);
    };

    if (!fontsLoaded) {
        return <Loading />;
    }

    return (
        <PixPayView 
            isLoading={isLoading}
            cardFee={cardFee}
            account={account}
            totalValue={amount}
            installmentFee={installmentFee}
            selectedPayment={selectedPayment}
            calculateTotalPayment={calculateTotalPayment}
            selectedInstallments={selectedInstallments}
            calculateInstallment={calculateInstallment}
            bottomSheetModalRef={bottomSheetModalRef}
            handleSelectInstallment={handleSelectInstallment}
            handlePresentModalPress={handlePresentModalPress}
            insets={insets}
            handlePaymentSelect={handlePaymentSelect}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            handleCloseModal={handleCloseModal}
            handlePaymentPress={handlePaymentPress}
            onModalDismiss={handleModalDismiss}
        />
    );
}
