import { doc, getDoc } from 'firebase/firestore';

import { db } from '../firebase/firebase';

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phone?: string;
  createdAt?: Date;
}

export const getUserData = async (uid: string): Promise<UserData | null> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    return userDoc.exists() ? (userDoc.data() as UserData) : null;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};
