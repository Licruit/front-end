import { httpClient } from '@/api/http';

export const requestCode = async (contact: string) => {
  try {
    const result = await httpClient.post('/users/auth/otp', { contact });
    return result;
  } catch (err) {
    window.alert('오류가 발생했습니다. 다시 시도해주세요.');
  }
};
