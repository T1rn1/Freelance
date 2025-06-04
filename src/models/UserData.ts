import type { userInformationModel } from 'models/UserInformationModel';
import type { WorkModel } from 'models/WorkModel';

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  createdAt: Date;

  photoURL: string;

  skills?: string[];

  userInformation: userInformationModel;

  works: WorkModel;
}
