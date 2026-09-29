# Siddartha Portfolio

Personal portfolio website built with **Next.js, TypeScript, Node.js, PostgreSQL, and Docker**.

## Tech Stack

* Next.js
* React
* TypeScript
* Node.js
* PostgreSQL / Supabase
* Docker
* Nginx
* Vercel

## Project Structure

```text
portfolio/
├── frontend/    # Next.js frontend
└── backend/     # Node.js API
```

## Features

* Personal profile
* Skills
* Projects
* Contact form
* Resume
* Backend API
* PostgreSQL database
* Dockerized frontend and backend

## Run Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Create the required environment files using the provided `.env.example` files.

## Docker

The frontend and backend can also be run using Docker.

```bash
docker compose up -d --build
```

## Environment Variables

Never commit real environment variables or secrets.

Use:

```text
.env.example
```

as a template for local configuration.

## Deployment

Planned production architecture:

```text
siddartha.in
      ↓
    Vercel
      ↓
api.siddartha.in
      ↓
    Nginx
      ↓
   Node API
      ↓
   Supabase
```

## Author

**Siddartha Mishra**

GitHub: [siddarthasoul](https://github.com/siddarthasoul)
