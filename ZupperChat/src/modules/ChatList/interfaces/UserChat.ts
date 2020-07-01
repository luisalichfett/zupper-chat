import { User } from './User';

export interface Message {
  id: string;
  text: string;
}

export interface UserChatItem extends User {
  messages: Message[];
}

export interface UserChat {
  content: UserChatItem[];
}
