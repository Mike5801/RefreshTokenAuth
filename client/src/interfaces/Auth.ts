export interface SignIn { 
  user: string;
  password: string;
}

export interface SignUp {
  email: string;
  user: string;
  password: string;
  occupation: string;
  birthDate: Date;
  image: FileList | undefined;
}

export type SessionResponse = {
  token: string
}