export interface IPixPaySuccessProps {}

export interface IPixPaySuccessViewProps {
    title: string;
    recipient: string;
    amount: string;
    date: string;
    onPressClose: () => void;
}
