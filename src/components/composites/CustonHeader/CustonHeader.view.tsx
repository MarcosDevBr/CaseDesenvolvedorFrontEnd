import { ICustonHeaderViewProps } from "./CustonHeader.model";
import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import { View, Text } from "react-native";
import Style from './CustonHeader.style'

export default function CustonHeaderView(props: ICustonHeaderViewProps) {

    return (
        <View style={Style.container}>
            <ActionButton 
                type="left" 
                onPress={props.onPressBackButton} 
            />

            <Text style={Style.text}>
                {props.title}
            </Text>
        </View>
    )
}
