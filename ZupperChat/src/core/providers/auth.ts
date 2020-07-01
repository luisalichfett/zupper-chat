import { postRequest } from './base';
import { Login } from '../../modules/Login/interfaces/Login';
import { SingUp } from '../../modules/Login/interfaces/SingUp';

export const login = (login: Login) => postRequest('/login', login);

export const singUp = (singup: SingUp) => postRequest('/singup', singup);

export default { login, singUp };
