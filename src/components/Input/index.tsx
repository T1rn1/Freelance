import { useEffect, useState } from 'react';
import * as yup from 'yup';

import { InputContainer, Label, StyledInput, Underline } from './styled';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const validationSchemas: Record<string, yup.StringSchema> = {
  text: yup.string().min(3, 'Минимум 3 символа'),
  email: yup.string().email('Некорректный email'),
  password: yup.string().min(8, 'Минимум 8 символов'),
  tel: yup.string().matches(/^\+?\d{10,15}$/, 'Некорректный номер телефона'),
};

const Input: React.FC<InputProps> = ({ label, placeholder, type = 'text', value, onChange }) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    if (value.trim() === '') {
      setIsValid(null);
      return;
    }

    const schema = validationSchemas[type] || validationSchemas.text;

    schema
      .validate(value)
      .then(() => setIsValid(true))
      .catch(() => setIsValid(false));
  }, [value, type]);

  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <StyledInput $isValid={isValid} onChange={onChange} placeholder={placeholder} type={type} value={value} />
      <Underline $isValid={isValid} />
    </InputContainer>
  );
};

export default Input;
