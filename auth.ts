import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  // callbacks: {
  //   authorized: async ({ auth }) => {
  //     // Logged in users are authenticated, otherwise redirect to login page
  //     return !!auth;
  //   },
  // },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        if (credentials?.email === 'admin@mail.com' && credentials?.password === 'root') {
          user = {
            id: '1',
            name: 'Admin',
            email: 'admin@mail.com',
          };
        }

        if (!user) {
          throw new Error('User not found.');
        }

        return user;
      },
    }),
  ],
});
