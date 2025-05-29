import Input from 'components/Input';
import RadioButton from 'components/RadioBtn';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import { auth } from '../../firebase/firebase';
import {
  InputForm,
  LinkToLogin,
  LoginTextWrapper,
  RadioGroup,
  RegBtn,
  RegPageContainer,
  RegPageImage,
  RegPageWrapper,
  SubTitle,
  Title,
} from './styled';

const RegistrationPage: React.FC = () => {
  const [role, setRole] = useState<'customer' | 'contractor' | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Registr();
  };

  const Registr = async () => {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    console.log(newUser.user);
  };

  return (
    <RegPageContainer>
      <RegPageWrapper>
        <SubTitle>Давайте создадим Вам аккаунт</SubTitle>
        <Title>Заполните все поля</Title>
        <InputForm onSubmit={handleSubmit}>
          <Input
            label='Ваше имя'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            placeholder='Имя'
            value={firstName}
          />
          <Input
            label='Ваша фамилия'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
            placeholder='Фамилия'
            value={lastName}
          />
          <Input
            label='E-mail'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder='E-mail'
            type='email'
            value={email}
          />
          <Input
            label='Телефон номер'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            placeholder='Телефон'
            type='tel'
            value={phone}
          />
          <Input
            label='Пароль'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            placeholder='Пароль'
            type='password'
            value={password}
          />
          <Input
            label='Повторите пароль'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
            placeholder='Пароль'
            type='password'
            value={confirmPassword}
          />
          <RadioGroup>
            <RadioButton
              checked={role === 'customer'}
              label='Я заказчик'
              name='role'
              onChange={() => setRole('customer')}
            />
            <RadioButton
              checked={role === 'contractor'}
              label='Я исполнитель'
              name='role'
              onChange={() => setRole('contractor')}
            />
          </RadioGroup>
          <RegBtn type='submit'>Зарегестрироваться</RegBtn>
        </InputForm>
        <LoginTextWrapper>
          <span>У вас есть аккаунт?</span>
          <LinkToLogin>Войдите</LinkToLogin>
        </LoginTextWrapper>
      </RegPageWrapper>
      <RegPageImage />
    </RegPageContainer>
  );
};

export default RegistrationPage;
