
import { IActionButtonView } from './ActionButton.model';
import ActionButtonView from './ActionButton.view';

export default function ActionButton(props: IActionButtonView) {
    return (
        <ActionButtonView {...props}/>
    )
}
