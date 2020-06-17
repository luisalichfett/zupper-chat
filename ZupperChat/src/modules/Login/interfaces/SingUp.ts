import { Auth } from './Auth';

export interface SingUp extends Auth {
  name: string;
  photoUrl?: string;
  email: string;
}
