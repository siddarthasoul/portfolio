# Portfolio Backend

Backend API for the Siddartha Portfolio.

## Tech Stack

* Node.js
* TypeScript
* PostgreSQL
* Supabase
* Docker

## Structure

```text
src/
├── core/
├── data/
├── middleware/
├── modules/
└── utils/
```

## Features

* Portfolio API
* Projects
* Skills
* Profile
* Contact form
* Resume
* PostgreSQL database
* Validation
* Error handling
* Rate limiting
* Docker support

## Environment Variables

Create a `.env` file using `.env.example`.

Never commit real secrets.

Example:

```env
DATABASE_URL=
PORT=8000
FRONTEND_URL=
```

## Local Development

```bash
npm install
npm run dev
```

## Docker

```bash
docker compose up -d --build
```

The API runs on:

```text
http://localhost:8000
```

## Health Check

```text
GET /health
```
