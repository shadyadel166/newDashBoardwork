export interface IAdminStore {
  Name: String;
  Email: String;
  token: String;
}

export interface IAdminRegister {
  fullName: String;
  email: String;
  password: String;
  nationalId: string;
  phoneNumber: string;
  address: string;
  role: String;
}

export interface IAdminLogin {
  email: String;
  password: String;
}

export interface IUser {
  _id: string;
  fullName: string;
  nationalId: number;
  email: string;
  password: string;
  phoneNumber: number;
  address: string;
  role: string;
  token: string;
}
