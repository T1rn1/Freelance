import styled from 'styled-components';
import { theme } from 'styles/theme';

export const WorksTitle = styled.p`
  margin: 30px 0;
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  color: ${theme.colors.textColorDarkBlue};
  font-style: normal;
  letter-spacing: 0.02em;
`;

export const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 40px 0;
`;

export const WorkCard = styled.div`
  width: 100%;
  height: 276px;
  border: 1px solid ${theme.colors.neutral};
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 6px 12px rgb(0 0 0 / 8%);
`;

export const WorkImage = styled.div<{ image: string }>`
  width: 100%;
  height: 170px;
  background: url(${(props) => props.image}) center center / cover no-repeat;
  border-radius: 20px 20px 0 0;
`;

export const Title = styled.div`
  margin: 20px;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: #222;
  font-style: normal;
`;

export const Price = styled.div`
  margin: 20px;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: ${theme.colors.green};
  font-style: normal;
`;

export const ElseBtn = styled.button`
  display: flex;
  gap: 10px;
  padding: 16px 48px;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: ${theme.colors.green};
  background: transparent;
  border: 1px solid ${theme.colors.green};
  border-radius: 40px;
  box-sizing: border-box;
  font-style: normal;
  cursor: pointer;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
