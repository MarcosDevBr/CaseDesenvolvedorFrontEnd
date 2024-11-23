import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { IPaymentCardProps } from "./PaymentCard.model";
import RadioButton from "../../primitives/RadioButton/RadioButton";
import Style from './PaymentCard.style'
import { AntDesign } from "@expo/vector-icons";
import { enumCardBrand  } from "../../../enums/enumPaymentMethod";

export default function PaymentCardView(props: IPaymentCardProps) {

    const renderInstallmentDetail = (
        label: string | number, 
        value: number, 
        isTotal?: boolean
    ) => (
        <View style={Style.installmentDetailContainer}>
        <Text style={Style.installmentDetailText}>{label}:</Text>

        {
            !isTotal ? (
                <Text style={Style.installmentDetailValueText}>
                        {value > 0 ? `R$ ${value.toFixed(2)}` : '-'}
                </Text>
            ) : (
                <Text style={Style.installmentDetailValueText}>
                    {props.installment?.numberOfInstallments}x de R$ {props.installment?.total}
                </Text>
            )
        }
    </View>
    );

    function formatCardNumber(subTitle: string): string {
        if (subTitle.length < 4) {
            throw new Error("O número do cartão é inválido.");
        }
        const lastFourDigits = subTitle.slice(-4);
        
        return `Final **** ${lastFourDigits}`;
    }

    return (
        <View style={[Style.container,  props.paymentMethod != enumCardBrand .ACCOUNTBALANCE && { marginBottom: 20 }]}>

            <View style={[Style.cardContainer]}>
                <RadioButton
                    key={'account balance'}
                    onPress={props.onChangeAccountBalance}
                    checked={props.checked}
                    listOption={[
                        {
                            id: props.id,
                            label: props.title,
                            value: true,
                            subTitle: props.paymentMethod != enumCardBrand .ACCOUNTBALANCE ?  formatCardNumber(props.subTitle ?? '') : props.subTitle,
                            paymentMethod: props.paymentMethod
                        },
                    ]}
                />
                
            </View>

            {
                props.checked 
                && props.paymentMethod != enumCardBrand .ACCOUNTBALANCE 
                && (
                    <View style={Style.paymentPlanCard}>
                        <TouchableOpacity style={Style.iconAndTextContainer} onPress={props.getPaymentPlanCard}>

                            <Text style={Style.cardText}>Escolher Parcelas</Text>

                            <AntDesign 
                                name="right"
                                size={20} 
                                color='#004C49' 
                            />
                        </TouchableOpacity>
                    </View>
            )}

            {
                props.checked 
                &&  props.paymentMethod !== enumCardBrand .ACCOUNTBALANCE
                && !!props.installment?.total && (
                    <View style={Style.installmentDetail}>
                        {renderInstallmentDetail("Valor a transferir", props.installment.transferValue)}
                        {renderInstallmentDetail("Taxa do cartão", props.installment.cardFee)}
                        {renderInstallmentDetail("Taxa de parcelamento", props.installment.installmentFee)}
                        {renderInstallmentDetail("Valor + taxas", props.installment.total, true)}
                    </View>
            )}
            
        </View>
    )
}
