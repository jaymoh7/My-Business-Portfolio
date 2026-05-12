# Portfolio Backend

A clean backend for portfolio form handling using Node.js, Express, MongoDB, and Nodemailer.

## Setup

1. Install dependencies:

```bash
cd server
npm install
```

2. Copy the example environment file:

```bash
copy .env.example .env
```

3. Edit `.env` and set your MongoDB connection string.

4. Start the backend:

```bash
npm run dev
```

## API

- `POST /api/forms/submit`
  - Request body: `{ name, email, message }`

- `GET /health`
  - Returns a simple health check.
