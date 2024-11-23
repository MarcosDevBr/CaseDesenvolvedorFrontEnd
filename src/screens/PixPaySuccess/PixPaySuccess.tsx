
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { IPixPaySuccessProps } from './PixPaySuccess.model';
import PixPaySuccessView from './PixPaySuccess.view';
import {  IRouteProps } from '@routes/AppRoute.model';
import { useCallback, useState } from 'react';
import { IAccount } from '@screens/PixPay/PixPay.model';
import moment from 'moment';
import { BackHandler } from 'react-native';

export default function PixPaySuccess(_props: IPixPaySuccessProps) {

    const route = useRoute<IRouteProps>();

    const [account] = useState<IAccount>(route?.params?.account);

    useFocusEffect(
		useCallback(() => {
			const backHandler = BackHandler.addEventListener(
				'hardwareBackPress',
				() => true,
			);

			return () => backHandler.remove();
		}, [])
	);

    const handleCloseApp = () => {
        BackHandler.exitApp(); 
    };

    return (
        <PixPaySuccessView 
            title={"Pix realizado com sucesso!"}
            recipient={account.receiver.name}
            amount={`R$ ${account.pix.amount}`}
            date={moment(account.pix.date).format('DD/MM/YYYY')}
            onPressClose={handleCloseApp}
        />
    )
}
