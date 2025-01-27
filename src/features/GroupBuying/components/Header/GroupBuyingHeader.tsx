import styled from 'styled-components';

function GroupBuyingHeader() {
  return (
    <Container>
      <Title>GROUP BUYING</Title>
      <SubTitle>
        함께 공동구매로 전통주부터 인기 주류까지 저렴하게 만나보세요
      </SubTitle>
    </Container>
  );
}

export default GroupBuyingHeader;

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.extra_bold[80]};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const SubTitle = styled.div`
  ${({ theme }) => theme.typo.body.medium[16]}
  color: ${({ theme }) => theme.color.neutral[400]};
`;
