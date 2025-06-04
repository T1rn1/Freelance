import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Box = styled.div`
  display: flex;
  gap: 15px;
`;

export const Skill = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 40px;
  padding: 10px 20px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${theme.colors.textColorDarkBlue};
  border: 1px solid ${theme.colors.lightViolet};
  border-radius: 50px;
  font-style: normal;
  background-color: ${theme.colors.textColorWhite};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
