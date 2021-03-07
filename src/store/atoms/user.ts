/* eslint-disable no-unused-vars */
import { atom } from 'recoil';
import { LoginRequest } from 'validations';

export enum AtomKeys {
  userLoginRequestState = 'userLoginRequestStateKey',
}

export const userLoginRequestState = atom<LoginRequest>({
  key: AtomKeys.userLoginRequestState,
  default: {
    email: '',
    password: '',
    remember: true,
  },
});
