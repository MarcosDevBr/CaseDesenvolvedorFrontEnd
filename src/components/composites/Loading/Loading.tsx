
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { ILoadingProps } from './Loading.model';
import LoadingView from './Loading.view';
import { INavigationProps, IRouteProps, MidwayScreem } from '@routes/AppRoute.model';
import { useCallback, useEffect, useState } from 'react';
import { IAccount } from '@screens/PixPay/PixPay.model';
import { BackHandler } from 'react-native';

export default function Loading(props: ILoadingProps) {
    const { navigate } = useNavigation<INavigationProps>();
    const route = useRoute<IRouteProps>();

    const [account] = useState<IAccount>(route?.params?.account);
    const [isPixPayment] = useState<boolean>(route?.params?.isPixPayment);

    useFocusEffect(
		useCallback(() => {
			const backHandler = BackHandler.addEventListener(
				'hardwareBackPress',
				() => true,
			);

			return () => backHandler.remove();
		}, [])
	);

    useEffect(() => {

        if(!isPixPayment) {
            setTimeout(() => navigate(MidwayScreem.PixPay), 1000)
            return
        }

        // const midwayPixPayment = new GetUserAccount(RestModule);

        // midwayPixPayment.httpGetUserAccount({
        //     account: account,
        // }).then(() => {
        //   console.log("Process Pix Payment Success");
        // }).catch((e) => {
        //     console.log("Process Pix Payment Error", e)
        // }).finally(() => {
        //     setTimeout(() => navigate(MidwayScreem.PixPaySuccess, {
        //         account: account
        //     }), 1000)
        // });

        setTimeout(() => navigate(MidwayScreem.PixPaySuccess, {
            account: account
        }), 1000)

    }, [account])
    
    return (
        <LoadingView 
            title={props.title}
            subTitle={props.subTitle}
            isPixPayment={isPixPayment}
        />
    )
}
