export interface UserInterface {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserId extends UserInterface {
  id: number,
}