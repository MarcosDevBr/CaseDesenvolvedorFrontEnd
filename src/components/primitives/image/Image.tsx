import { IImageProps } from "./Image.model";
import ImageView from "./Image.view";

export default function Image(props: IImageProps) {
    const getImageName = () => {
        const textNoImage = props.textNoImage ?? '';
        const textSplit = textNoImage.split(' ');

        if (textSplit.length > 1) {
            const name = `${textSplit[0].slice(0, 1)}${textSplit[1].slice(0, 1)}`
            return name.toLocaleUpperCase();
        } else {
            return textSplit[0].slice(0, 2).toLocaleUpperCase();
        }
    }

    return (
        <ImageView
            containerStyle={props.containerStyle}
            source={props.source}
            textNoImage={getImageName()}
            textNoImageStyle={props.textNoImageStyle}
            resizeMode={props.resizeMode}
            imageStyle={props.imageStyle}
        />
    )
}
