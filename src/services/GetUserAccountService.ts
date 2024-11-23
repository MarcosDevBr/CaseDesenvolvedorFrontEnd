import { api } from './api';

export const getUserAccountService = async ({ id, name }: any) => {

  try {
    const response = await api.get(`/accounts`, {
      params: { id, name },
    });

    if (response.data && response.data.account) {
      return response.data.account;
    } else {
      throw new Error('Account not found');
    }

  } catch (error) {
    if (error instanceof Error) {
      console.log('Error message:', error.message);
    }

    throw error;
  }
};
