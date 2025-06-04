import styled from 'styled-components';
import { theme } from 'styles/theme';

export const FooterContainer = styled.footer`
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 458px;
  padding: 50px 15%;
  background: #f2f0fe;
  box-sizing: border-box;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    fill: ${theme.colors.textColorDarkBlue};
    transition: fill 0.3s ease;
  }

  &:hover svg {
    fill: ${theme.colors.green};
  }
`;

export const ColumnHeading = styled.h3`
  margin-bottom: 20px;
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  color: #222;
  font-style: normal;
  letter-spacing: 0.02em;
`;

export const FooterLink = styled.a`
  margin-bottom: 10px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #222;
  font-style: normal;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

export const CopyrightText = styled.p`
  width: 100%;
  margin-top: auto;
  padding-top: 30px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #222;
  font-style: normal;
  letter-spacing: 0.02em;
  text-align: center;
`;
