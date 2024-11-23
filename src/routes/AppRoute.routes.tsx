import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { CommonScreen, MidwayScreem, MODULOS } from './AppRoute.model';
import Loading from '@components/composites/Loading/Loading';
import PixPaySuccess from '@screens/PixPaySuccess/PixPaySuccess';
import PixPay from '@screens/PixPay/PixPay';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {

    const LoadingScreen = () => (
        <Loading 
            title="Processando" 
            subTitle="sua transferência" 
        />
    );

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={MidwayScreem.PixPay}>

                <Stack.Group key={MODULOS.midway}>

                    <Stack.Screen
                        name={MidwayScreem.loading}
                        component={LoadingScreen}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name={MidwayScreem.PixPay}
                        component={PixPay}
                        options={{ headerShown: false }}
                    />
                    
                    <Stack.Screen
                        name={MidwayScreem.PixPaySuccess}
                        component={PixPaySuccess}
                        options={{ headerShown: false }}
                    />

                </Stack.Group>
            
            </Stack.Navigator>
        </NavigationContainer>
    );
}
