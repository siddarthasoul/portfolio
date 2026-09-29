# Portfolio Frontend

Frontend for the Siddartha Portfolio.

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Axios
* Docker

## Structure

```text
app/       # Next.js application
src/
├── component/
├── hooks/
├── lib/
└── types/
```

## Features

* Personal portfolio
* Projects
* Skills
* Profile
* Contact
* Resume
* Responsive UI
* Backend API integration

## Environment Variables

Create a `.env` file using `.env.example`.

Example:

```env
NEXT_PUBLIC_API_URL=
```

Never commit real environment variables or secrets.

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Docker

```bash
docker compose up -d --build
```

The frontend runs on:

```text
http://localhost:3000
```

## Production

The frontend is planned to be deployed on Vercel with:

```text
https://siddartha.in
```
