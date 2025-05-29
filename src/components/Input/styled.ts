import styled from "styled-components";
import { theme } from "../../styles/theme";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: ${theme.colors.textColor};
`;

interface StyledInputProps {
  $isValid: boolean | null;
}

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding-left: 1rem;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${theme.colors.textColor};
  background: transparent;
  border: none;
  transition: all 0.3s ease;
  outline: none;
`;

export const Underline = styled.span<StyledInputProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${({ $isValid }) => {
    if ($isValid == true) return theme.colors.green;
    if ($isValid == false) return theme.colors.red;
    if ($isValid == null) return theme.colors.neutral;
  }};
  transition: background 0.3s ease;
`;
