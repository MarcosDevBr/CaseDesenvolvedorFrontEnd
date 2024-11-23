import { TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { IIActionButtonViewProps } from "./ActionButton.model";
import Style from "./ActionButton.style";

export default function ActionButtonView(props: IIActionButtonViewProps) {
    const { type, onPress } = props; 

    const renderIcon = () => {
        if (type === "close") {
            return <AntDesign name="close" size={24} color="#004C49" />;
        } else {
            return <AntDesign name="left" size={24} color="#004C49" />;
        }
    };

    return (
        <TouchableOpacity style={[Style.container, props.containerStyle]} onPress={onPress}>
            <View>
                {renderIcon()}
            </View>
        </TouchableOpacity>
    );
}
