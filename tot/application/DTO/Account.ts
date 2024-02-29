export interface IAccountDTO {
  createdBy?: string;
  email: string;
  id: string;
  status?: string;
  username: string;
  lockedState: boolean;
  accessFailedCount: number;
  createdDate?: Date;
  emailConfirmed: boolean;
  isAdministrator: boolean;
  lockoutEnabled: boolean;
  lockoutEnd?: Date;
  memberId?: string;
  modifiedBy?: string;
  modifiedDate?: Date;
  normalizedEmail: string;
  normalizedUserName: string;
  passwordExpired?: Date;
  phoneNumber?: string;
  phoneNumberConfirmed: boolean;
  photoUrl?: string;
  securityStamp: string;
  storeId: string;
  twoFactorEnabled: boolean;
  userName: string;
  userType?: string;
  forcePasswordChange: boolean;
}
