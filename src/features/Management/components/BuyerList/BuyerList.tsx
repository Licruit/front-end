import styled from 'styled-components';
import Button from '@/components/Button/Button';
import { Buyer } from '../../models/buyer.model';

interface Props {
  buyers: Buyer[];
}

function BuyerList({ buyers }: Props) {
  return (
    <Table>
      <THead>
        <tr>
          <th>구매자</th>
          <th>연락처</th>
          <th>선택상품</th>
          <th>구매상태</th>
          <th />
        </tr>
      </THead>
      <TBody>
        {buyers.map((row) => (
          <tr key={row.id}>
            <td>
              <strong>
                {String(row.userCompanyNumber).replace(
                  /(\d{3})(\d{2})(\d{5})/,
                  '$1-$2-$3'
                )}
              </strong>
            </td>
            <td>
              {String(row.contact).replace(
                /(\d{3})(\d{3,4})(\d{4})/,
                '$1-$2-$3'
              )}
            </td>
            <td>{row.liquorName}</td>
            <td>{row.status}</td>
            <td>
              <div className='button-cell'>
                <Button $style='outlined' $size='sm' $theme='neutral'>
                  확정
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </TBody>
    </Table>
  );
}

export default BuyerList;

const Table = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
  border-width: 1px 0;
`;

const THead = styled.thead`
  ${({ theme }) => theme.typo.heading.bold[16]}
  color: ${({ theme }) => theme.color.neutral[900]};

  th {
    padding: 20px 0;
    text-align: start;
  }
`;

const TBody = styled.tbody`
  ${({ theme }) => theme.typo.body.medium[14]}
  color: ${({ theme }) => theme.color.neutral[600]};

  td {
    padding: 20px 0;
    border: 1px solid ${({ theme }) => theme.color.neutral[400]};
    border-width: 1px 0px;

    strong {
      color: ${({ theme }) => theme.color.neutral[900]};
    }
  }

  .button-cell {
    display: flex;
    justify-content: end;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;
