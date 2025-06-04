import AvatarIcon from 'components/AvatarIcon';
import InformationBox from 'components/InformationBox';
import SkillBox from 'components/SkillBox';
import WorksBox from 'components/WorksBox';
import type { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { getUserData, type UserData } from 'services/userService';

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
          <Profession>Профессия</Profession>
          <FullName>
            <Name>Имя</Name>Фамилия
          </FullName>
          <Description>Описание профиля</Description>
          <SkillBox />
          <InformationBox />
        </div>
        <AvatarIcon />
      </Halfs>
      <WorksBox />
    </Wrapper>
  );
};

export default ProfilePage;
