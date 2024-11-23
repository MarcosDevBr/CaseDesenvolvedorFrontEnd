export interface ICustonHeaderProps {
    title: string;
}

export interface ICustonHeaderViewProps extends ICustonHeaderProps{
    onPressBackButton: () => void;

}
