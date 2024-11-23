
import { BackHandler } from 'react-native';
import { ICustonHeaderProps } from './CustonHeader.model';
import CustonHeaderView from './CustonHeader.view';

export default function CustonHeader(props: ICustonHeaderProps) {

    const handleCloseApp = () => {
        BackHandler.exitApp(); 
    };

    return (
        <CustonHeaderView title={props.title} onPressBackButton={handleCloseApp}/>
    )
}
