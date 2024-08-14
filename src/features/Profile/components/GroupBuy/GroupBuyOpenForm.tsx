import { CloseIcon } from 'public/assets/icons';
import styled from 'styled-components';
import Button from '@/components/Button/Button';
import useMyPageSideMenuStore from '@/store/mypageSideMenuStore';
import MyPageHeader from '../common/MyPageHeader';
import ProfileInput from '../common/ProfileInput';
import Label from '../common/Label';
import CategoryButtons from '../EditProfile/CategoryButtons';
import { INPUT } from '../../constants/input';

// TODO 추후 서버 연결시 서버 데이터로 대체 예정
const LOCATION = [
  '경기도',
  '강원도',
  '충청북도',
  '충청남도',
  '전라북도',
  '전라남도',
  '경상남도',
  '경상북도',
  '제주도',
];

function GroupBuyOpenForm() {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);

  return (
    <>
      <MyPageHeader
        title='공동구매 올리기'
        icon={
          <CloseIcon
            fill='#000'
            style={{ cursor: 'pointer' }}
            onClick={() => setContent('my-page')}
          />
        }
      />
      <ProfileInput {...INPUT.product} name='product' />
      <InputWrapper>
        <ProfileInput {...INPUT.period} name='period' />
        <ProfileInput {...INPUT.startTime} name='time' />
      </InputWrapper>
      <InputWrapper>
        <ProfileInput {...INPUT.delivery} name='delivery' />
        <ProfileInput {...INPUT.price} name='price' />
      </InputWrapper>
      <ProfileInput {...INPUT.min} name='min' />
      <ProfileInput {...INPUT.max} name='max' />
      <InputWrapper>
        <ProfileInput {...INPUT.deliveryFee} name='deliveryFee' />
        <ProfileInput {...INPUT.freeDelivery} name='freeDelivery' />
      </InputWrapper>
      <LabelWrapper>
        <Label {...INPUT.location} />
        <span className='is-required'>*</span>
        <p className='desc'>(배송 가능 지역만 선택해 주세요)</p>
      </LabelWrapper>
      <CategoryButtons
        categories={LOCATION}
        value=''
        onSetCategory={() => {}}
      />
      <ProfileInput {...INPUT.groupBuy} name='groupBuy' />
      <Button $style='solid' $theme='primary' $width='full' $size='md'>
        적용하기
      </Button>
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const LabelWrapper = styled.div`
  display: flex;
  gap: 5px;

  .is-required {
    color: ${({ theme }) => theme.color.primary[500]};
  }

  .desc {
    color: ${({ theme }) => theme.color.neutral[600]};
    ${({ theme }) => theme.typo.body.medium[12]}
  }
`;

export default GroupBuyOpenForm;
