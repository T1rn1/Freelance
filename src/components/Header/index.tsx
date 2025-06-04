import WorkTapIcon from 'assets/svgs/WorktapIcon.svg';

import { LoginBtn, ProfileBtns, RegBtn, StyledHeader, StyledLink, StyledNav } from './styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <img alt='WorkTap Logo' src={WorkTapIcon} />
        <StyledLink to={'/services'}>Услуги</StyledLink>
        <StyledLink to={'/orders'}>Заказы</StyledLink>
        <StyledLink to={'/createService'}>Создать услугу</StyledLink>
        <StyledLink to={'/createOrder'}>Создать заказ</StyledLink>
      </StyledNav>
      <ProfileBtns>
        <LoginBtn to={'/login'}>Войти</LoginBtn>
        <RegBtn to={'/register'}>Регистрация</RegBtn>
      </ProfileBtns>
    </StyledHeader>
  );
};

export default Header;
