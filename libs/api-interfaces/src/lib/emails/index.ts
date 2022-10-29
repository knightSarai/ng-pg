export interface Email {
  id: string;
  from: string;
  to: string;
  subject: string;
}

export interface RecievedEmail extends Omit<Email, 'to'> {}

