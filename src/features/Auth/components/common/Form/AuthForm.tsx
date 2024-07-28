import FormInput from '@/components/Input/FormInput';
import styled from 'styled-components';
import { useCode } from '@/features/Auth/hooks/useCode';
import Button from '@/components/Button/Button';
import { useFormContext } from 'react-hook-form';
import { REGEXP } from '@/features/Auth/constants/form';
import Timer from '../Timer';

function AuthForm() {
  const { register, watch } = useFormContext();
  const { handleSendCode, expTime, isFailed, setIsFailed } = useCode();

  return (
    <Container>
      <InputWithButton>
        <FormInput
          type='tel'
          placeholder='전화번호를 입력해주세요'
          {...register('phone', { required: true, pattern: REGEXP.phone })}
        />
        <Button
          type='button'
          onClick={() => handleSendCode(watch('phone'))}
          $style='outlined'
          $size='lg'
          $theme='primary'
        >
          인증요청
        </Button>
      </InputWithButton>
      <InputWrapper>
        <div className='wrapper'>
          <FormInput
            type='number'
            placeholder='인증번호'
            {...register('code', { required: true })}
          />
          {expTime && (
            <Timer expTime={expTime} onFail={() => setIsFailed(true)} />
          )}
        </div>
        <span className='error'>{isFailed && '인증에 실패했습니다.'}</span>
      </InputWrapper>
    </Container>
  );
}

export default AuthForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputWithButton = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  .wrapper {
    position: relative;
  }

  .error {
    height: 12px;
    color: ${({ theme }) => theme.color.error};
    ${({ theme }) => theme.typo.body.medium[12]}
  }
`;
