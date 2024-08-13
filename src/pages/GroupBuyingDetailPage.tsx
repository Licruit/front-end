import { SideBar, WholesalerInfo } from '@/features/GroupBuyingDetail';
import { LiquorDetail } from '@/features/LiquorDetail';
import styled from 'styled-components';

function GroupBuyingDetailPage() {
  return (
    <Container>
      <LiquorDetail>
        <WholesalerInfo />
      </LiquorDetail>
      <SideBar />
    </Container>
  );
}

export default GroupBuyingDetailPage;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 80px;
`;
