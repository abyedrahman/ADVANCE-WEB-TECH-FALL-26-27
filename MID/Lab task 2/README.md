Name:Abyed Rahman Rokon
Section:E 
ID:23-51846-2

This guide describes the steps required to configure and run the Krown Dex NestJS backend project on a local machine.
## Prerequisites
Before starting, make sure the following software is installed:
- Node.js v22 or later
- PostgreSQL
- Redis
- npm, yarn, or pnpm
- Docker (optional, for containerized setup)
---
## Installing Dependencies
Open a terminal in the project root directory and execute any one of the following commands:
```bash
pnpm install
# or
yarn install
# or
npm install
```
## Environment Configuration
Follow these steps to configure the environment variables:
1. Open the project root directory.
2. Find the `.env.example` file.
3. Create a new `.env` file in the same directory.
4. Copy the contents of `.env.example` into `.env`.
5. Update the values according to your local environment.
To copy the example file, run:
```bash
cp .env.example .env
```
## Database Setup and Migrations
Create a PostgreSQL database named `krown_dex_db` using the following SQL command:
```sql
CREATE DATABASE krown_dex_db;
```
Once the database is created, run the migration command:
```bash
pnpm run migration:run
# or
yarn migration:run
# or
npm run migration:run
```
## Redis Configuration
Redis can be configured using either of the following options.
**Option 1: Run Redis with Docker**
Execute this command to start a Redis container:
```bash
docker run -d --name krown-redis -p 6379:6379 redis:7-alpine
```
**Option 2: Use a Local Redis Installation**
Start the Redis service manually and ensure that the following settings are present in your `.env` file:
```bash
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
```
## Running the Backend in Development Mode
To start the NestJS application in development mode, run one of these commands:
```bash
pnpm start:dev
# or
yarn start:dev
# or
npm run start:dev
```
## Production Build and Execution
**Step 1: Build the project**
Generate the production build using one of the following commands:
```bash
pnpm build
# or
yarn build
# or
npm run build
```
**Step 2: Start the production server**
After the build completes successfully, run:
```bash
pnpm start:prod
# or
yarn start:prod
# or
npm run start:prod
```
## Project Structure Overview
```text
project-root/
├── src/
│   ├── modules/
│   ├── common/
│   ├── config/
│   ├── main.ts
│   └── app.module.ts
├── migrations/
├── test/
├── .env.example
├── package.json
└── tsconfig.json
```
This structure shows the main directories and configuration files used in the backend project.