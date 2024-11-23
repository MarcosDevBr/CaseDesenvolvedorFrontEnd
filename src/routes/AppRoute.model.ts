export enum MODULOS {
  midway = "Midway",
}

export interface INavigationProps {
  navigate: (screen: string, params?: any) => void; 
  replace: (screen: string, params?: any) => void; 
  goBack: () => void;
  setOptions: (options: { headerTitle?: string, headerShown?: boolean }) => void;
}

export interface IRouteProps {
  params: any, // TODO criar module com params de cada tela
  key: string,
  name: string,
}

export const CommonScreen = {
  login: `${MODULOS.midway}/Login`,
}

export const MidwayScreem = {
  loading: `${MODULOS.midway}/Loading`,
  home: `${MODULOS.midway}/Home`,
  PixPay: `${MODULOS.midway}/PixPay`,
  PixPaySuccess: `${MODULOS.midway}/PixPaySuccess`,
}

