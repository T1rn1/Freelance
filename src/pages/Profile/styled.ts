import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Wrapper = styled.div`
  padding: 0 200px;
`;

export const Halfs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 200px;
`;

export const Profession = styled.p`
  margin: 10px 0;
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  color: ${theme.colors.textColorOrange};
  font-style: normal;
`;

export const FullName = styled.p`
  display: flex;
  gap: 20px;
  height: 44px;
  margin: 0;
  font-family: Montserrat, sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  color: ${theme.colors.textColorDarkBlue};
  font-style: normal;
`;

export const Name = styled.span`
  color: ${theme.colors.green};
`;

export const Description = styled.p`
  margin: 30px 0;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${theme.colors.textColorDarkBlue};
  font-style: normal;
`;
