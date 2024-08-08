import styled, { useTheme } from 'styled-components';
import { useState } from 'react';
import { GlassesIcon } from 'public/assets/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledInput } from '../Input/FormInput';

function Search() {
  const [search, setSearch] = useState<string>('');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (search) {
      searchParams.set('search', search);
    } else {
      searchParams.delete('search');
    }
    navigate(`/catalog?${searchParams}`);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SearchBar>
          <Glasses fill={theme.color.neutral[600]} />
          <StyledInput
            type='text'
            value={search}
            placeholder='찾고 싶은 전통주를 입력하세요'
            onChange={handleChange}
          />
        </SearchBar>
      </form>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  width: 260px;
`;

const SearchBar = styled.div`
  position: relative;
  input {
    padding: 8px 8px 8px 36px;
  }
`;

const Glasses = styled(GlassesIcon)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
`;
