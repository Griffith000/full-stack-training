## Environment Variables (Better Auth)

To set up [Better Auth](https://better-auth.com/), you need to configure the following environment variables in your `.env` or `.env.local` file:

```env
# Database
DATABASE_URL=your_database_connection_string

# Better Auth Configuration
BETTER_AUTH_SECRET=your_super_secret_string
BETTER_AUTH_URL=http://localhost:3000 # Your application's base URL locally
```

## Vercel Deployment

To deploy this project to [Vercel](https://vercel.com/), follow these steps:

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the project into your Vercel dashboard.
3. Before deploying, add your environment variables in the **Environment Variables** section:
   - `DATABASE_URL`: Your production database connection string.
   - `BETTER_AUTH_SECRET`: Generate a strong, secure random string for production.
   - `BETTER_AUTH_URL`: Your production URL (e.g., `https://your-project-name.vercel.app`). Note: If you have a custom domain, use that instead.
4. Click **Deploy**. Vercel will automatically configure the correct build settings for Next.js.

## Homework

As an extra challenge, try adding **[Google OAuth](https://better-auth.com/docs/authentication/google)** to your Better Auth configuration! You will need to create OAuth credentials in the Google Cloud Console and add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to your environment variables (both locally and on Vercel).
