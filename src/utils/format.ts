export const formatNumber = (value: number) => {
  return value.toLocaleString();
};

export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
};

export const formatPrice = (price: string) => {
  const numericValue = price.replace(/[^\d]/g, '');
  if (numericValue === '') return '';
  return Number(numericValue).toLocaleString();
};

export const formatPriceToNumber = (price: string) => {
  return Number(price.replace(/,/g, ''));
};

export const formatPhoneNumberToNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/-/g, '');
};

export const formatCompanyNumber = (companyNum: string) => {
  return companyNum
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{3})(\d{2})(\d{5})$/, '$1-$2-$3');
};
