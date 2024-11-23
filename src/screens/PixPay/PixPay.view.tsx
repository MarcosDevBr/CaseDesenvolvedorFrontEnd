import React from "react";
import { View, Text, StatusBar, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { IPixPayViewProps } from "./PixPay.model";
import Style from './PixPay.style';
import CustonHeader from "@components/composites/CustonHeader/CustonHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import PaymentCard from "@components/composites/PaymentCard/PaymentCard";
import { enumCardBrand  } from "../../enums/enumPaymentMethod";
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
import ActionButton from "@components/composites/ActionButton/ActionButton";
import { ScrollView } from "react-native-gesture-handler";
import Loading from "@components/composites/Loading/Loading";

export default function PixPayView(props: IPixPayViewProps) {
    const { 
        cardFee,
        account,
        totalValue,
        installmentFee,
        selectedPayment,
        bottomSheetModalRef,
        insets,
        selectedInstallments,
        isModalVisible,
        calculateTotalPayment,
        calculateInstallment,
        handleSelectInstallment,
        handleCloseModal,
        handlePaymentPress,
        handlePaymentSelect,
        setIsModalVisible,
        onModalDismiss,
        isLoading
    } = props;

    const isDisabled = selectedPayment === enumCardBrand .ACCOUNTBALANCE && account?.balance! < totalValue;
  
    function renderDot(checked: boolean) {
        if (checked) {
            return (
                <View style={Style().containerChecked}>
                    <View style={Style().contentDotChecked} />
                </View>
            );
        } else {
            return (
                <View style={Style().containerUnchecked} />
            );
        }
    }

    return (
        <>
            {
                 !account || isLoading ? (
                    <Loading />
                ) : (

                    <SafeAreaView style={Style().safeAreaView}>

                        <BottomSheetModalProvider>
                            <View style={Style().container}>
                                <StatusBar barStyle={'dark-content'} />
                                <CustonHeader title="Transferência Pix" />
            
                                <View style={Style().content}>
                                    <Text style={Style().subtitle}>Escolha uma forma de pagamento</Text>
                                    <Text style={Style().subtitle}>Conta Midway</Text>
                                </View>
            
                                <PaymentCard 
                                    id={"account balance"}
                                    title="Saldo em conta"
                                    subTitle={`Disponível: R$ ${account ? account?.balance.toFixed(2) : 0}`}
                                    checked={selectedPayment === enumCardBrand .ACCOUNTBALANCE} 
                                    onChangeAccountBalance={() => handlePaymentSelect(enumCardBrand .ACCOUNTBALANCE)} 
                                    paymentMethod={enumCardBrand .ACCOUNTBALANCE}
                                />
            
                                <ScrollView style={Style().scrollContainer} contentContainerStyle={Style().scrollContentContainer}>
                                    <View style={Style().creditCardContainer}>
                                        <Text style={Style().subtitle}>Cartões de crédito</Text>
                                    </View>
            
                                    {account && account.creditCards && account.creditCards.map((card) => (
                                        <PaymentCard 
                                            key={card.id}
                                            title={card.title}
                                            subTitle={card.cardNumber}
                                            paymentMethod={card.id}                            
                                            checked={selectedPayment === card.id} 
                                            onChangeAccountBalance={() => handlePaymentSelect(card.id)} 
                                            id={card.id}
                                            installment={{
                                                transferValue: totalValue,
                                                cardFee: cardFee,
                                                installmentFee: installmentFee,
                                                total: calculateInstallment(selectedInstallments) ?? 0,
                                                numberOfInstallments: selectedInstallments
                                            }}
                                            getPaymentPlanCard={() => {
                                                bottomSheetModalRef.current?.present();
                                                setIsModalVisible(true)
                                            }}                
                                        />
                                    ))}
                                </ScrollView>
        
                                <BottomSheetModal
                                    ref={bottomSheetModalRef}
                                    index={2}                        
                                    snapPoints={['25%', '50%', '100%']}
                                    onDismiss={onModalDismiss}  
                                    style={{ marginTop: insets.top * 2 }}
                                    enableDynamicSizing
                                    enablePanDownToClose
                                    backdropComponent={({ style }) => (
                                        <TouchableWithoutFeedback onPress={() => bottomSheetModalRef.current?.dismiss()}>
                                            <View style={[style, Style().backdropComponent]} />
                                        </TouchableWithoutFeedback>
                                    )}
                                >
                                    <BottomSheetView style={Style().bottomSheetContainer}>
                                        <View style={Style().bottomSheetContent}>
                                            <View style={Style().bottomSheetHeader}>
                                                <Text style={Style().bottomSheetTitle}>Parcelas do pagamento</Text>
                                                <TouchableOpacity onPress={() => bottomSheetModalRef.current?.dismiss()}>
                                                    <ActionButton 
                                                        type="close" 
                                                        onPress={handleCloseModal}
                                                    />
                                                </TouchableOpacity>
                                            </View>
            
                                            <Text style={Style().bottomSheetSubTitle}>
                                                O destinatário receberá à vista e você pagará parcelado
                                            </Text>
            
                                            <ScrollView style={Style().bottomSheetScrollContainer} contentContainerStyle={Style().bottomSheetScrollContent}>
                                                {[...Array(11)].map((_, index) => {
                                                    const installmentNumber = 11 - index + 1; // Isso vai gerar números de 2 a 12
                                                    const installmentValue = calculateInstallment(installmentNumber);
                                                    const isSelected = installmentNumber === selectedInstallments;
                                                    return (
                                                        <TouchableOpacity
                                                            key={installmentNumber}
                                                            style={Style().installmentOption}
                                                            onPress={() => handleSelectInstallment(installmentNumber)}
                                                        >
                                                            {renderDot(isSelected)}
                                                            <Text style={Style().installmentText}>
                                                                {installmentNumber}x de R$ {installmentValue}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    );
                                                })}
                                            </ScrollView>
                                        </View>
                                    </BottomSheetView>
                                </BottomSheetModal>
                            
                            </View>
            
                            <View style={Style().footer}>
                                <View style={Style().footerCard}>
                                    <View>
                                        <Text style={Style().footerText}>Valor a ser pago</Text>
                                        <Text style={Style().footerValue}>
                                            {
                                                selectedPayment !== enumCardBrand .ACCOUNTBALANCE && selectedInstallments ? (
                                                    `${selectedInstallments} x de R$ ${calculateInstallment(selectedInstallments)}`
                                                ) : (
                                                    `R$ ${calculateTotalPayment()}`
                                                )
                                            }
                                        </Text>
                                    </View>
            
                                    <TouchableOpacity 
                                        onPress={handlePaymentPress}
                                        style={[
                                            Style({ isModalVisible: isModalVisible}).payButton, 
                                            isDisabled && Style().disabledButton
                                        ]} 
                                    >
                                        <Text style={Style().payButtonText}>
                                            {
                                                !isModalVisible ? `Pagar` : `Continuar`
                                            }
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </BottomSheetModalProvider>

                </SafeAreaView>

                )
                
            }

          
        </>

    );
}


