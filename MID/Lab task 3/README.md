Lab Task 3

Student Details
SL: 3  
Abyed Rahman Rokon 
ID: 23-51846-2  
SEC: E 

## Database Setup
1. Install PostgreSQL and create a database: `CREATE DATABASE product_management;`
2. Copy `.env.example` to `.env` and set `DB_PASSWORD` (and other DB values) for your machine.
3. Run migrations: `pnpm run migration:run`

## Installation & Run
```bash
pnpm install
pnpm run migration:run
pnpm start:dev
```
Server runs at `http://localhost:5000`

#Used Validators

1. @IsNumber
2. @IsString
3. @IsPassword

