import { useCallback, useEffect } from 'react';
import { UseFetch } from '../../core/providers/base/hook';
import { Login } from './interfaces/Login';
import { SingUp } from './interfaces/SingUp';
import { login, singUp } from '../../core/providers/auth';

export const useLogin = (): [
  Login | undefined,
  boolean,
  (args: any) => void
] => {
  const [loginData, postLogin] = UseFetch<Login>(login);
  const { response, error, loading } = loginData;

  const loadLogin = useCallback(
    (login: Login) => {
      postLogin(login);
    },
    [postLogin]
  );

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return [response, loading, loadLogin];
};

export const useSingUp = (): [
  SingUp | undefined,
  boolean,
  (args: any) => void
] => {
  const [singUpData, postSingUp] = UseFetch<SingUp>(singUp);
  const { response, error, loading } = singUpData;

  const loadSingUp = useCallback(
    (singUp: SingUp) => {
      postSingUp(singUp);
    },
    [postSingUp]
  );

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return [response, loading, loadSingUp];
};

export default useLogin;
