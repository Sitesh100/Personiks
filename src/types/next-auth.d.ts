import { User as DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email?: string | null;
      fullName?: string | null;
      phone?: string | null;
    };
  }

  interface User extends DefaultUser {
    id: string;
    email: string;
    fullName?: string | null;
    phone?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email?: string;
    fullName?: string | null;
    phone?: string | null;
  }
}
