import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Box = styled.div`
  width: 500px;
  margin: 60px 0;
  padding: 20px 40px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  border-radius: 12px;
  background-color: ${theme.colors.lightViolet};
`;

export const ToggleButton = styled.button<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ isOpen }) => (isOpen ? '30px' : '0')};
  padding: 0;
  font-size: 18px;
  font-weight: 500;
  background: transparent;
  border: none;
  transition: margin-bottom 0.3s ease;
  cursor: pointer;
  text-align: left;
`;

import ArrowIconSvg from 'assets/svgs/InformationBox/ArrowIcon.svg';

export const Arrow = styled(ArrowIconSvg)<{ isOpen: boolean }>`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.isOpen ? '180deg' : '0deg')});
`;

export const Content = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 32px auto auto;
  gap: 18px 16px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  font-size: 20px;
`;

export const Label = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: ${theme.colors.textColorDarkBlue};
  font-style: normal;
`;

export const Value = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
  color: ${theme.colors.textColorDarkBlue};
  font-style: normal;
`;
