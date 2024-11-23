import { View } from 'react-native';
import { IRadioButton, IRadioButtonViewProps } from "./RadioButton.model";
import Style from './RadioButton.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ListItem from '../listItem/ListItem';
import { ISideComponent } from '../listItem/ListItem.model';

export default function RadioButtonView<T>(props: IRadioButtonViewProps<T>) {

    function renderDot(checked: boolean) {
        if (checked) {
            return (
                <View style={[Style.containerChecked, props.containerChecked]}>
                    <View style={[Style.contentDotChecked, props.contentDotChecked]} />
                </View>
            )
        } else {
            return (
                <View style={[Style.containerUnchecked, props.containerUnchecked]} />
            )
        }
    }

    function renderItem(item: IRadioButton<T>, idx: number) {
        const leftItem: ISideComponent = {
            type: 'Component',
            component: (
                <TouchableOpacity onPress={() => props.onPress(item.value)}>
                    {renderDot(item.value == props.checked)}
                </TouchableOpacity>
            )
        }

        return (
            <ListItem
                key={idx}
                title={item.label}
                subTitle={item.subTitle}
                textTitleStyle={Style.text}
                containerStyle={[Style.containerDot, props.containerDot]}
                wrapperStyle={Style.wrapperStyle}
                leftItem={leftItem}
                onPress={() => props.onPress(item.value)}
                paymentMethod={item.paymentMethod}
            />
        )
    }

    function renderOptionList() {
        return (
            props.listOption.map(renderItem)
        )
    }

    return (
        <View>
            {renderOptionList()}
        </View>
    )
}