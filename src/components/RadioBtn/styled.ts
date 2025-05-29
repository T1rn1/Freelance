import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledRadio = styled.input.attrs({ type: "radio" })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin: 0;
  border: 2px solid ${theme.colors.neutral};
  border-radius: 50%;
  appearance: none;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transition: background-color 0.4s ease;
  }

  &:checked::before {
    background-color: ${theme.colors.green};
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  color: ${theme.colors.textColor};
  cursor: pointer;
`;
