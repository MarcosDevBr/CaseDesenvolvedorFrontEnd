import { IRadioButtonProps } from "./RadioButton.model";
import RadioButtonView from "./RadioButton.view";

export default function RadioButton<T>(props: IRadioButtonProps<T>) {

    return (
        <RadioButtonView
            {...props}
        />
    )
}