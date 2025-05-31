import Input from 'components/Input';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebase/firebase';
import {
  ErrorText,
  InputForm,
  LinkToRegistration,
  LoginBtn,
  LoginPageContainer,
  LoginPageImage,
  LoginPageWrapper,
  LoginTextWrapper,
  SubTitle,
  Title,
} from './styled';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);

  const isFormValid = useMemo(() => {
    return email.trim().length > 0 && password.trim().length >= 8;
  }, [email, password]);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);

      navigate('/profile');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setLoginError('Неверный email или пароль');
      } else {
        setLoginError('Ошибка входа. Попробуйте позже.');
      }
    }
  };

  return (
    <LoginPageContainer>
      <LoginPageWrapper>
        <SubTitle>Добро пожаловать обратно!</SubTitle>
        <Title>Войдите в свой аккаунт</Title>
        <InputForm onSubmit={handleSubmit}>
          <Input
            label='E-mail'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Введите ваш email'
            type='email'
            value={email}
          />
          <Input
            label='Пароль'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Введите пароль'
            type='password'
            value={password}
          />
          {loginError && <ErrorText>{loginError}</ErrorText>}
          <LoginBtn disabled={!isFormValid} type='submit'>
            Войти
          </LoginBtn>
        </InputForm>
        <LoginTextWrapper>
          <span>Нет аккаунта?</span>
          <LinkToRegistration to='/register'>Зарегистрируйтесь</LinkToRegistration>
        </LoginTextWrapper>
      </LoginPageWrapper>
      <LoginPageImage />
    </LoginPageContainer>
  );
};

export default LoginPage;
