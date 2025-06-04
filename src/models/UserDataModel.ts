import type { WorkModel } from 'models/WorkModel';

import type { UserInfoModel } from './UserInfoModel';

export interface UserDataModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  createdAt: Date;

  photoURL: string;

  skills?: string[];

  userInformation: UserInfoModel;

  works: WorkModel;
}
