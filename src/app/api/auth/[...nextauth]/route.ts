import NextAuth from "next-auth";
import { authConfig } from "@/server/authConfig";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
