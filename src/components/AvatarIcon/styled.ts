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

interface AvatarCircleProps {
  image: string;
}

export const AvatarCircle = styled.div<AvatarCircleProps>`
  position: relative;
  width: 420px;
  height: 420px;
  background: url(${(props) => props.image});
  border-radius: 50%;
  box-shadow: 0 8px 16px rgb(0 0 0 / 15%);
  background-size: cover;
  background-position: center;
`;

export const Status = styled.div`
  position: absolute;
  top: 160px;
  left: -100px;
  z-index: 1;
  display: flex;
  gap: 10px 20px;
  align-items: center;
  padding: 12px 30px;
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.green};
  background: ${theme.colors.lightViolet};
  border-radius: 50px;
  box-shadow: 0 8px 16px rgb(0 0 0 / 4%);

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
