
import { IPaymentCardProps } from './PaymentCard.model';
import PaymentCardView from './PaymentCard.view';

export default function PaymentCard(props: IPaymentCardProps) {
    return (
        <PaymentCardView 
            {...props}
        />
    )
}
