export interface Usertype {
  _id: string;
  fullName: string;
  email: string;
  phone: string | null;
  password: string;
  createdAt: Date;
}
