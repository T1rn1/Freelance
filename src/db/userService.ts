import { doc, getDoc } from 'firebase/firestore';
import type { UserDataModel } from 'models/UserDataModel';

import { db } from './firebase';

export const getUserData = async (uid: string): Promise<UserDataModel | null> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    return userDoc.exists() ? (userDoc.data() as UserDataModel) : null;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};
