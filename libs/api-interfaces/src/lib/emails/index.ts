export interface Email {
  id: string;
  from: string;
  to: string;
  subject: string;
  text: string;
}

export interface RecievedEmail extends Omit<Email, 'to' | 'text'> {}


