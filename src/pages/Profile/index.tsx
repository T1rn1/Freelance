import Header from 'components/Header';
import type { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { getUserData, type UserData } from 'services/userService';

import { auth } from '../../firebase/firebase';

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        const data = await getUserData(user.uid);
        setUserData(data);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      <h1>Страница профиля</h1>
      {currentUser ? (
        userData ? (
          <div>
            <p>
              Добро пожаловать, {userData.firstName} {userData.lastName}!
            </p>
            <p>Email: {userData.email}</p>
            <p>Роль: {userData.role === 'customer' ? 'Заказчик' : 'Исполнитель'}</p>
            {userData.phone && <p>Телефон: {userData.phone}</p>}
          </div>
        ) : (
          <p>Загрузка данных пользователя...</p>
        )
      ) : (
        <p>Пожалуйста, войдите в систему.</p>
      )}
    </div>
  );
};

export default ProfilePage;
