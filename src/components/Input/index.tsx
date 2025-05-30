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
  text: yup.string().min(3, 'Минимум 3 символа').required('Поле обязательно'),
  email: yup
    .string()
    .required('Email обязателен')
    .email('Введите корректный email')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Введите email в формате example@gmail.com'),
  password: yup.string().min(8, 'Минимум 8 символов').required('Поле обязательно'),
  tel: yup
    .string()
    .matches(/^\+?\d{10,15}$/, 'Некорректный номер телефона')
    .required('Поле обязательно'),
};

const Input: React.FC<InputProps> = ({ label, placeholder, type = 'text', value, onChange }) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (value.trim() === '') {
      setIsValid(null);
      setErrorMessage('');
      return;
    }

    const schema = validationSchemas[type] || validationSchemas.text;

    schema
      .validate(value)
      .then(() => {
        setIsValid(true);
        setErrorMessage('');
      })
      .catch((err: yup.ValidationError) => {
        setIsValid(false);
        setErrorMessage(err.message);
      });
  }, [value, type]);

  return (
    <InputContainer>
      <Label>{label}</Label>
      <StyledInput
        onChange={onChange}
        placeholder={placeholder}
        title={isValid === false ? errorMessage : ''}
        type={type}
        value={value}
      />
      <Underline $isValid={isValid} />
    </InputContainer>
  );
};

export default Input;
