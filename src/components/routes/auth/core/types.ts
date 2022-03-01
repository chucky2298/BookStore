import { Action } from "../../../../redux/types";

export type LogInFormValues = {
  email: string;
  password: string;
};

export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  confirmationLevel: number;
  confirmationToken: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  token: string;
};

export type AuthState = {
  user?: User;
  isLoggingIn: boolean;
  error?: string;
};

export interface AuthAction extends Action {
  payload?: User | string;
}
