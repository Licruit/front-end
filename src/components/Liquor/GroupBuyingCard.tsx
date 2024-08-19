import { GroupBuying } from '@/features/GroupBuying/types/liquor';
import LiquorUrl from 'public/assets/images/main/mock-image1 38.svg';

import { Badge } from '@/styles/components/Badge';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLiquorStore } from '@/features/GroupBuying/store/useLiquorStore';

function GroupBuyingCard(liquor: GroupBuying) {
  const navigation = useNavigate();
  const { setHoveredLiquor } = useLiquorStore();
  const { orderCount, imageUrl, categoryName, title, content, id } = liquor;

  const handleMouseEnter = () => {
    setHoveredLiquor(liquor);
  };

  return (
    <LiquorInfoContainer>
      <HeaderInfo>현재 {orderCount}병 신청됐습니다!</HeaderInfo>
      <LiquorInfoWrapper
        $imageUrl={LiquorUrl}
        onClick={() => navigation(`/group-buying/${id}`)}
        onMouseEnter={handleMouseEnter}
      >
        <LiquorInfo>
          <Badge $size='sm' $type='white'>
            {categoryName}
          </Badge>
          <Title>{title}</Title>
          <LiquorDescription>{content}</LiquorDescription>
        </LiquorInfo>
      </LiquorInfoWrapper>
    </LiquorInfoContainer>
  );
}

export default GroupBuyingCard;

const LiquorInfoContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HeaderInfo = styled.div`
  width: 374px;
  padding: 20px;
  font-size: ${({ theme }) => theme.typo.heading.bold[16]};
  color: ${({ theme }) => theme.color.neutral[50]};
  background: ${({ theme }) => theme.color.primary[500]};
`;

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[36]};
  color: ${({ theme }) => theme.color.common[100]};
`;

const LiquorInfoWrapper = styled.div<{ $imageUrl: string }>`
  background: url(${({ $imageUrl }) => $imageUrl}) lightgray 50% / cover
    no-repeat;
  width: 374px;
  height: 374px;
  cursor: pointer;
  position: relative;
`;

const LiquorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  justify-content: end;
  padding: 20px;
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const LiquorDescription = styled.p`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[500]};
`;
