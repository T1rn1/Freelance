import { doc, getDoc } from 'firebase/firestore';
import type { UserData } from 'models/UserData';

import { db } from './firebase';

export const getUserData = async (uid: string): Promise<UserData | null> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    return userDoc.exists() ? (userDoc.data() as UserData) : null;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};
