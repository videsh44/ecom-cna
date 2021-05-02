import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { getLoginApi } from '../../../actions/api-calls/product';

export default NextAuth({
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials;
        let form_values = {
          email,
          password,
        };

        const res = await getLoginApi(form_values);
        console.log(res.data);

        if (res && res.data) {
          // Any object returned will be saved in `user` property of the JWT
          return res.data;
        } else {
          // If you return null or false then the credentials will be rejected
          return null;
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      },
    }),
  ],
});
