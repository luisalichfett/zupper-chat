import { User } from './User';
import { SectionListData } from 'react-native';

export interface UserListItem {
  title: string;
  data: SectionListData<User>[];
}

export interface UserList {
  content: UserListItem[];
}
