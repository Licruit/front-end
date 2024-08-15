import FormInput from '@/components/Input/FormInput';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { SignOutDescription } from '@/styles/components/Description';
import CancelAndNext from '../common/CancelAndNext';

interface Props {
  isError: boolean;
}

function CheckUser({ isError }: Props) {
  const {
    register,
    formState: { isValid },
  } = useFormContext();

  return (
    <>
      <SignOutDescription>
        탈퇴하시려면 사업자 등록번호와 비밀번호를 입력해주시길 바랍니다.
      </SignOutDescription>
      <InputWrapper>
        <FormInput
          type='number'
          placeholder='사업자 등록번호를 입력해주세요'
          {...register('companyNumber', { required: true })}
        />
        <FormInput
          type='password'
          placeholder='비밀번호를 입력해주세요'
          hasVisibility
          {...register('password', { required: true })}
        />
      </InputWrapper>
      <Error className='error'>
        {isError
          ? '사업자 등록번호 또는 비밀번호가 잘못되었습니다. 다시 한 번 입력해주세요'
          : ''}
      </Error>
      <CancelAndNext isValid={isValid} type='submit' />
    </>
  );
}

const Error = styled.p`
  color: ${({ theme }) => theme.color.error};
  ${({ theme }) => theme.typo.body.medium[12]}
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export default CheckUser;