# TaskFlow — Full-Stack Project & Task Manager

TaskFlow is a secure, accessible, full-stack web application that lets users register, sign in, create projects and manage tasks through complete CRUD workflows.

## Technology stack
- React + TypeScript + Vite
- Tailwind-style utility CSS via a custom accessible stylesheet
- Node.js + Express + TypeScript
- PostgreSQL + Prisma ORM
- JWT authentication + bcrypt
- Swagger/OpenAPI
- Jest + Supertest
- React Testing Library + Vitest
- Playwright

## Features
- Registration, login and logout
- Protected dashboard
- Project CRUD
- Task CRUD with status, priority and due dates
- Ownership checks
- Role field prepared for RBAC
- Input validation and sanitisation
- Centralised API error responses
- Helmet, CORS and rate limiting
- Loading, success and error feedback
- Responsive and keyboard-friendly UI
- Swagger API documentation at `/api/docs`

## Requirements
- Node.js 20+
- npm 10+
- PostgreSQL 14+

## Setup
1. Create a PostgreSQL database named `taskflow`.
2. Copy `.env.example` to `server/.env` and update `DATABASE_URL` and `JWT_SECRET`.
3. Install dependencies:
   ```bash
   npm install
   npm run install:all
   ```
4. Generate Prisma client and run migrations:
   ```bash
   cd server
   npx prisma generate
   npx prisma migrate dev --name init
   ```
5. Start both apps from the project root:
   ```bash
   npm run dev
   ```
6. Open `http://localhost:5173`.

## Test commands
```bash
npm test
npm run test:e2e
```

## Environment variables
See `.env.example`. Never commit real secrets.

## API overview
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET|POST /api/projects`
- `GET|PUT|DELETE /api/projects/:id`
- `GET|POST /api/projects/:projectId/tasks`
- `PUT|DELETE /api/tasks/:id`

## Project structure
- `server/src/routes` — route definitions
- `server/src/controllers` — request handlers
- `server/src/middleware` — auth, errors and validation
- `server/src/lib` — Prisma and helper utilities
- `client/src/components` — reusable UI
- `client/src/pages` — route-level views
- `client/src/services` — API client
- `client/src/types` — TypeScript contracts

## Submission notes
Do not include `node_modules` or real `.env` files. Keep the `.git` folder in the final zip because the brief requests commit history.
