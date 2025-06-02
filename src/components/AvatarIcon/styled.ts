import avatarImage from 'assets/Google.svg';
import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;

export const AvatarCircle = styled.div`
  position: relative;
  width: 420px;
  height: 420px;
  background: url(${avatarImage});
  border-radius: 50%;
  box-shadow: 0 8px 16px rgb(0 0 0 / 15%);
  background-size: cover;
`;

export const Status = styled.div`
  position: absolute;
  left: -60px;
  z-index: 1;
  display: flex;
  gap: 10px 20px;
  align-items: center;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.green};
  background: ${theme.colors.textColorWhite};
  border-radius: 12px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: ${theme.colors.green};
    border-radius: 50%;
  }
`;

export const Settings = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 8px;
  background-color: ${theme.colors.lightViolet};
  transition: transform 0.3s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Rating = styled.div`
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
