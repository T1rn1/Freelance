import AvatarIcon from 'components/AvatarIcon';
import InformationBox from 'components/InformationBox';
import SkillBox from 'components/SkillBox';
import WorksBox from 'components/WorksBox';
import { auth } from 'db/firebase';
import { getUserData } from 'db/userService';
import type { User } from 'firebase/auth';
import type { UserDataModel } from 'models/UserDataModel';
import React, { useEffect, useState } from 'react';

import { Description, FullName, Halfs, Name, Profession, Wrapper } from './styled';

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<UserDataModel | null>(null);
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
          <Profession>{userData?.profession}</Profession>
          <FullName>
            <Name>{userData?.firstName}</Name> {userData?.lastName}
          </FullName>
          <Description>{userData?.descrition}</Description>
          <SkillBox skills={userData?.skills || []} />
          {userData?.userInformation && <InformationBox info={userData.userInformation} />}
        </div>
        <AvatarIcon photoURL={userData?.photoURL} />
      </Halfs>
      <WorksBox works={userData?.works} />
    </Wrapper>
  );
};

export default ProfilePage;
