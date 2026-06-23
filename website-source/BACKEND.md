# Inquiry backend setup

1. Copy `.env.example` to `.env`.
2. Set `MONGODB_URI` to your MongoDB connection string.
3. To email the admin immediately, set `RESEND_API_KEY`, `ADMIN_EMAIL`, and a verified `ALERT_FROM_EMAIL`.
4. Run `bun install`, then `bun run dev`.

Each valid form submission creates a document in `inquiries` and an unread alert in
`admin_notifications`. Email delivery is attempted when the Resend settings are present;
an email failure never loses the inquiry.
