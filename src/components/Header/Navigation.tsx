import PATH from '@/constants/path';
import { useMyPageIsOpenStore } from '@/store/mypageSideMenuStore';
import useLoginStore from '@/store/loginStore';
import { CartIcon } from 'public/assets/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useLogOut from '@/hooks/logout/useLogOut';

function Navigation() {
  const handleLogOut = useLogOut();
  const openMyPage = useMyPageIsOpenStore((state) => state.open);
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <Nav $gap={24}>
          <MyPageButton onClick={openMyPage}>MY PAGE</MyPageButton>
          <LinkWithIcon>
            <li>
              <button type='button' onClick={handleLogOut}>
                LOGOUT
              </button>
            </li>
            <li className='cart-wrapper'>
              <CartIcon fill='#141517' />
              <span>(0)</span>
            </li>
          </LinkWithIcon>
        </Nav>
      ) : (
        <Nav $gap={24}>
          <NavLink to={PATH.login}>LOGIN</NavLink>
          <NavLink to={PATH.join}>SIGN UP</NavLink>
        </Nav>
      )}
    </div>
  );
}

export default Navigation;

const Nav = styled.nav<{ $gap: number }>`
  display: flex;
  gap: ${({ $gap }) => $gap}px;
  align-items: center;
`;

const NavLink = styled(Link)`
  ${({ theme }) => theme.typo.body.medium[14]}
`;

const MyPageButton = styled.button`
  ${({ theme }) => theme.typo.body.medium[14]}
`;

const LinkWithIcon = styled.ul`
  display: flex;
  align-items: center;

  .cart-wrapper {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  span {
    ${({ theme }) => theme.typo.body.medium[14]}
    color: ${({ theme }) => theme.color.neutral[600]};
  }

  li:first-child::after {
    content: '|';

    float: right;
    display: block;

    padding: 0 12px;

    line-height: 20px;
    color: rgb(0 0 0 / 60%);
  }
`;
