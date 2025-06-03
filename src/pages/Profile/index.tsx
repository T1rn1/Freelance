import AvatarIcon from 'components/AvatarIcon';
import Header from 'components/Header';
import type { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { getUserData, type UserData } from 'services/userService';

import { auth } from '../../firebase/firebase';
import { Description, FullName, Halfs, Name, Profession, Skill, SkillBox, Wrapper } from './styled';

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const arr = ['Figma', 'It', 'programming'];

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
      <Header />
      <Halfs>
        <div>
          <Profession>Профессия</Profession>
          <FullName>
            <Name>Имя</Name>Фамилия
          </FullName>
          <Description>Описание профиля</Description>
          <SkillBox>
            {arr.map((skill, index) => (
              <Skill key={index}>{skill}</Skill>
            ))}
          </SkillBox>
        </div>
        <AvatarIcon />
      </Halfs>
    </Wrapper>
  );
};

export default ProfilePage;
