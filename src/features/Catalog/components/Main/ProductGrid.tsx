import styled from 'styled-components';
import Pagination from '@/components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useCatalog } from '../../hooks/useCatalog';

function ProductGrid() {
  const navigate = useNavigate();
  const { catalogData } = useCatalog();

  return (
    <Container>
      <List>
        {catalogData && catalogData.liquors && (
          <>
            {catalogData.liquors.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  liquorInfo={item}
                  onClick={() => navigate(`/catalog/${item.id}`)}
                  size='370'
                />
              );
            })}
          </>
        )}
      </List>
      {catalogData && catalogData.pagination ? (
        <Pagination
          totalItems={catalogData.pagination.totalPage}
          currentPage={catalogData.pagination.currentPage}
          pageGroupCount={10}
        />
      ) : null}
    </Container>
  );
}

export default ProductGrid;

const Container = styled.div`
  padding: 20px;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;
