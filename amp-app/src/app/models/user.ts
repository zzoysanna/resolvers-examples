export interface IUser {
  id: string;
  fakeToken: string;
  login: string;
  password: string;
  name: {
    first: string;
    last: string;
  }
}
