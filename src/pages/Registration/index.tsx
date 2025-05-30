import Input from 'components/Input';
import RadioButton from 'components/RadioBtn';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useMemo, useState } from 'react';

import { db } from '../../firebase/firebase';
import { auth } from '../../firebase/firebase';
import {
  ErrorText,
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
  const [registrationError, setRegistrationError] = useState<string | null>(null);

  const isFormValid = useMemo(() => {
    return (
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      email.trim().length > 0 &&
      phone.trim().length > 0 &&
      password.trim().length >= 8 &&
      confirmPassword === password &&
      role !== null
    );
  }, [firstName, lastName, email, phone, password, confirmPassword, role]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistrationError(null);
    Registr();
  };

  const Registr = async () => {
    try {
      const newUser = await createUserWithEmailAndPassword(auth, email, password);
      const user = newUser.user;

      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email,
        phone,
        role,
        createdAt: new Date(),
      });
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setRegistrationError('Этот email уже используется');
      } else {
        setRegistrationError('Ошибка регистрации. Попробуйте позже.');
      }
    }
  };

  return (
    <RegPageContainer>
      <RegPageWrapper>
        <SubTitle>Давайте создадим Вам аккаунт</SubTitle>
        <Title>Заполните все поля</Title>
        <InputForm onSubmit={handleSubmit}>
          <Input label='Ваше имя' onChange={(e) => setFirstName(e.target.value)} placeholder='Имя' value={firstName} />
          <Input
            label='Ваша фамилия'
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Фамилия'
            value={lastName}
          />
          <Input
            label='E-mail'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='E-mail'
            type='email'
            value={email}
          />
          <Input
            label='Телефон номер'
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Телефон'
            type='tel'
            value={phone}
          />
          <Input
            label='Пароль'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Пароль'
            type='password'
            value={password}
          />
          <Input
            label='Повторите пароль'
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          {registrationError && <ErrorText>{registrationError}</ErrorText>}
          <RegBtn disabled={!isFormValid} type='submit'>
            Зарегистрироваться
          </RegBtn>
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
