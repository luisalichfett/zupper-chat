import { useCallback, useEffect } from 'react';
import { UseFetch } from '../../core/providers/base/hook';
import { UserList } from './interfaces/UserList';
import { getUsersList, getUsersChat } from '../../core/providers/users';
import { UserChat } from './interfaces/UserChat';

export const useUsersList = (): [UserList | undefined, boolean, () => void] => {
  const [usersListData, getUsers] = UseFetch<UserList>(getUsersList);
  const { response, error, loading } = usersListData;

  const loadUsersList = useCallback(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return [response, loading, loadUsersList];
};

export const useUsersChat = (): [UserChat | undefined, boolean, () => void] => {
  const [usersChatData, getUsers] = UseFetch<UserChat>(getUsersChat);
  const { response, error, loading } = usersChatData;

  const loadUsersChat = useCallback(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return [response, loading, loadUsersChat];
};

export default useUsersList;
