import styled from 'styled-components';

export interface MultiStepProps {
  current: number;
  maxStep: number;
}

function MultiStep({ current, maxStep }: MultiStepProps) {
  return (
    <Container>
      {Array(maxStep)
        .fill(0)
        .map((_, i) => (
          <Bar key={i} $isActive={current >= i + 1} />
        ))}
    </Container>
  );
}

export default MultiStep;

const Container = styled.div`
  display: flex;
  gap: 6px;
  width: 100%;
  height: 8px;
`;

const Bar = styled.div<{ $isActive: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.primary[500] : theme.color.neutral[200]};
  transition: all 0.3s ease-in-out;
`;
