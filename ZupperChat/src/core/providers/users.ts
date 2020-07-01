import { getRequest } from './base';

export const getUsersList = () => getRequest('/users/list');

export const getUsersChat = () => getRequest('/users/chat');

export default { getUsersList, getUsersChat };
