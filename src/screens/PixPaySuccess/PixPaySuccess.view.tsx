import React from 'react';
import { View, Text } from 'react-native';
import { IPixPaySuccessViewProps } from './PixPaySuccess.model';
import Style from './PixPaySuccess.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import ActionButton from '@components/composites/ActionButton/ActionButton';

export default function PixPaySuccessView(props: IPixPaySuccessViewProps) {
  const { title, recipient, amount, date, onPressClose } = props;

  return (
    <SafeAreaView style={Style.safeAreaView}>
      <View style={Style.container}>

        <View style={Style.headerContainer}>
            <Text 
                style={Style.headerTitle}
                numberOfLines={2}
            >
                {title}
            </Text>

            <ActionButton
                type="close"
                onPress={onPressClose}
                containerStyle={Style.headerIcon}
            />

        </View>

        
        <View style={Style.iconContainer}>
            <FontAwesome6 
                name="check-circle" 
                size={55.33} 
                color="#fff" 
            />
        </View>

        <Text style={Style.recipientLabel}>Para</Text>
        <Text style={Style.recipient}>{recipient}</Text>

        <View style={Style.detailsContainer}>

          <View style={Style.detail}>
            <Text style={Style.detailLabel}>Valor</Text>
            <Text style={Style.detailValue}>{amount}</Text>
          </View>

          <View style={Style.detail}>
            <Text style={Style.detailLabel}>Data</Text>
            <Text style={Style.detailValue}>{date}</Text>
          </View>

        </View>
      </View>

    </SafeAreaView>
  );
}
