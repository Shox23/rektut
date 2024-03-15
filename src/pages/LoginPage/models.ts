export interface signUpRequestData {
  groups: number;
  phone: string;
  email: string;
  password: string;
}

export interface loginRequestData {
  phone: string;
  password: string;
}
