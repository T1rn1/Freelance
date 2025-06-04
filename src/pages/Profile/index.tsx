import AvatarIcon from 'components/AvatarIcon';
import InformationBox from 'components/InformationBox';
import SkillBox from 'components/SkillBox';
import WorksBox from 'components/WorksBox';
import type { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { getUserData, type UserData } from 'src/firebase/userService';

import { auth } from '../../firebase/firebase';
import { Description, FullName, Halfs, Name, Profession, Wrapper } from './styled';

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
    <Wrapper>
      <Halfs>
        <div>
          <Profession>{userData?.education || 'Специализация не указана'}</Profession>
          <FullName>
            <Name>{userData?.firstName || 'Имя'}</Name> {userData?.lastName || 'Фамилия'}
          </FullName>
          <Description>Добро пожаловать в профиль! Здесь отображаются ваши данные.</Description>
          <SkillBox skills={userData?.certificates || []} />
          <InformationBox info={info} />
        </div>
        <AvatarIcon photoURL={currentUser?.photoURL || ''} />
      </Halfs>
      <WorksBox works={[]} />
    </Wrapper>
  );
};

export default ProfilePage;
