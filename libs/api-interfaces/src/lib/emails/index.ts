import { User } from "../user.types";

export interface Email {
  id: string;
  from: string;
  to: string;
  subject: string;
  text: string;
}

export interface RecievedEmail extends Omit<Email, 'to' | 'text'> {}

export interface CreateEmail extends Omit<Email, 'id'> {}

export interface EmailForm extends Omit<Email, 'id'> {
  id?: string;
}


export interface EmailReply {
  id: string;
  text: string;
  createdBy: Pick<User, 'id' | 'username'>;
}
