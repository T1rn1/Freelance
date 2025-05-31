import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  min-width: 600px;
`;

export const StyledLink = styled(Link)`
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  color: ${theme.colors.lightGreen};
  font-style: normal;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProfileBtns = styled.div`
  display: flex;
  gap: 20px;
`;

export const LoginBtn = styled(Link)`
  height: fit-content;
  padding: 10px 25px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.textColorWhite};
  background: ${theme.colors.lightGreen};
  border: none;
  border-radius: 40px;
  transition: transform 0.2s ease-in;
  font-style: normal;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;

export const RegBtn = styled(Link)`
  height: fit-content;
  padding: 10px 25px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.lightGreen};
  background: ${theme.colors.lightViolet};
  border: none;
  border-radius: 40px;
  font-style: normal;
  transition: transform 0.2s ease-in;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;
