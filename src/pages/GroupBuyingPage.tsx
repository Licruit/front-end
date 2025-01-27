import Tab from '@/components/Header/Tabs';
import MetaTag from '@/components/MetaTag';
import LoadingSpinner from '@/components/Spinner/Spinner';
import {
  GroupBuyingGrid,
  GroupBuyingHeader,
  EmptyFallback,
  Region,
  Preview,
} from '@/features/GroupBuying';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function GroupBuyingPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sort = searchParams.get('sort');
  const region = searchParams.get('region');
  return (
    <>
      <MetaTag
        title='리크루트 공동 구매'
        description='리크루트 플랫폼에서 공동 구매에 대한 정보를 확인할 수 있는 페이지입니다.'
        keywords='리크루트, 공동 구매, 리크루트 공동 구매, 리크루트 정보, 술 구매'
        url='https://www.licruit.site/group-buying'
      />
      <Container>
        <PreviewWrapper>
          <Preview />
        </PreviewWrapper>
        <ContentWrapper>
          <GroupBuyingHeader />
          <Filter>
            <TabBox>
              <Tab type='group_buying' queryKey='sort' />
            </TabBox>
            <Region />
          </Filter>
          <ErrorBoundary
            FallbackComponent={EmptyFallback}
            resetKeys={[sort, region]}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <GroupBuyingGrid sort={sort} region={region} />
            </Suspense>
          </ErrorBoundary>
        </ContentWrapper>
      </Container>
    </>
  );
}

export default GroupBuyingPage;

const Container = styled.div`
  display: flex;
  height: calc(100vh - 76px);
`;

const PreviewWrapper = styled.div`
  flex: 1;
`;

const ContentWrapper = styled.div`
  overflow: auto;
  flex: 2;
  padding: 20px 40px 40px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TabBox = styled.div`
  position: sticky;
  z-index: 999;
  top: -20px;
  left: 0;

  padding: 20px 0;

  background: rgb(255 255 255 / 100%);
  backdrop-filter: blur(10px);
`;
