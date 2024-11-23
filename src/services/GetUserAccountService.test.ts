import { mockAccountAPIResponse } from '../../__test__/mock/mockGetUserAccount';
import { api } from './api';
import { getUserAccountService } from './GetUserAccountService';

describe('API: getUserAccountService', () => {
  describe('getUserAccount', () => {
    
    beforeAll(() => {
      jest.spyOn(api, 'get').mockResolvedValue({ data: mockAccountAPIResponse });
    });

    it('should return user account data', async () => {
      const params = { id: '987654321', name: 'John Doe' };
      
      const response = await getUserAccountService(params);

      expect(response).not.toBeNull(); 
      expect(response?.accountId).toBe(1234567); 
    });
  });
});
