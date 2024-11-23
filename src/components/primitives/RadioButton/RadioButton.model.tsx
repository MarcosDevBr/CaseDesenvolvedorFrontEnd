export interface IRadioButton<T> {
    id: string | number,
    label: string,
    subTitle?: string,
    value: T,
    paymentMethod: number
}

export interface IRadioButtonViewProps<T> {
    listOption: IRadioButton<T>[],
    checked: T,

    containerDot?: any,
    containerChecked?: any,
    containerUnchecked?: any,
    contentDotChecked?: any,

    onPress: (option: T) => void,
}

export interface IRadioButtonProps<T> extends IRadioButtonViewProps<T> {

}
