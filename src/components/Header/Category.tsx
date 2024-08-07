import { CATEGORY } from '@/constants/category';
import { useState } from 'react';

import styled from 'styled-components';
import Button from '../Button/Button';

type CategoryTypeKey = keyof typeof CATEGORY;

interface CategoryProps {
  type: CategoryTypeKey;
}

function Category({ type }: CategoryProps) {
  const category = Object.values(CATEGORY[type]);
  const [selectedCategory, setSelectedCategory] = useState<string>(category[0]);
  const handleClickButton = (categroy: string) => {
    setSelectedCategory(categroy);
  };

  return (
    <ButtonCategory>
      {category.map((categroy) => (
        <Button
          key={categroy}
          type='button'
          $theme={selectedCategory === categroy ? 'primary' : 'neutral'}
          $style='outlined'
          $size='sm'
          onClick={() => handleClickButton(categroy)}
        >
          {categroy}
        </Button>
      ))}
    </ButtonCategory>
  );
}

export default Category;

const ButtonCategory = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;