export interface UserInterface {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface User extends UserInterface {
  id: number,
}

export interface UserToken {
  id: number,
  username: string,
}

export interface Login {
  username: string,
  password: string,
}

export interface UserId {
  id: number,
}

export interface ProductInput {
  name: string,
  amount: string,
}

export interface ProductOutput extends ProductInput {
  id: number,
}