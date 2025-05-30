import RegImage from "../../assets/RegPageImage.png";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const RegPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  min-height: 100vh;

  @media (width <= 1023px) {
    grid-template-columns: 1fr;
  }
`;

export const RegPageImage = styled.div`
  background-image: url(${RegImage});
  width: 100%;
  height: 100%;
`;

export const RegPageWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 50%;

  @media (width <= 1023px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 1rem;
  font-family: Montserrat, sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 37px;
  color: ${theme.colors.textColor};
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${theme.colors.textColor};
`;

export const InputForm = styled.form`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const RegBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: ${theme.colors.textColorWhite};
  border: none;
  border-radius: 3rem;
  background-color: ${theme.colors.lightGreen};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LoginTextWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${theme.colors.textColorgray};
`;

export const LinkToLogin = styled.span`
  color: ${theme.colors.textColorOrange};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
