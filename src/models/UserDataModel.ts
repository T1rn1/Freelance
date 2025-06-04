import type { WorkModel } from 'models/WorkModel';

import type { UserInfoModel } from './UserInfoModel';

export interface UserDataModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  createdAt: Date;
  descrition: string;

  photoURL: string;
  profession: string;

  skills?: string[];

  userInformation: UserInfoModel;

  works: WorkModel;
}
