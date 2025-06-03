import styled from 'styled-components';
import { theme } from 'styles/theme';

export const StyledRating = styled.div`
  position: absolute;
  bottom: -10px;
  display: flex;
  gap: 15px;
  align-items: center;
  height: 50px;
  padding: 12px 30px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
`;

export const Star = styled.svg<{ $active: boolean }>`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  fill: ${(props) => (props.$active ? theme.colors.textColorOrange : theme.colors.lightViolet)};
`;
