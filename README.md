# Backend — Yet Another Schedule App

[![Express](https://img.shields.io/badge/Express-ffffff?logo=express&logoColor=black)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1.svg?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?logo=docker&logoColor=white)](https://www.docker.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](https://github.com/features/actions)

### Run develop build

* Download [Node.js](https://nodejs.org/en/download/)

* Clone this repository
    ```bash
    git clone https://github.com/saizaax/yet-another-schedule-app-backend
    ```

* Open terminal and navigate to repository directory
    ```bash
    cd yet-another-schedule-app-backend
    ```

* Add `.env` file to root directory
    ```bash
    PORT=8000
    DATABASE_URL=postgresql://username:password@localhost:5432/schedule?schema=public
    SECRET_TOKEN=SECRET
    PARSER_URL=http://localhost:5000/api
    ```

* Install the packages required for the project
    ```bash
    npm i
    ```

* Generate Prisma Client
    ```bash
    npx prisma generate
    ```

* Run Prisma migrations
    ```bash
    npx prisma migrate dev
    ```

* Start the project with npm
    ```bash
    npm run dev
    ```

* Request with curl
    ```bash
    http://localhost:8000/api/groups
    ```

<br>

### Build

* Open terminal and navigate to repository directory
    ```bash
    cd yet-another-schedule-app-backend
    ```

* Install the packages required for the project
    ```bash
    npm i
    ```

* Generate Prisma Client
    ```bash
    npx prisma generate
    ```

* Make production build with npm
    ```bash
    npm run build
    ```

<br>

### How to run in Docker

* Download & Install [Docker / Docker Desktop](https://www.docker.com/products/docker-desktop)

* Clone this repository
    ```bash
    git clone https://github.com/saizaax/yet-another-schedule-app-backend
    ```

* Open terminal and navigate to repository directory
    ```bash
    cd yet-another-schedule-app-backend
    ```

* Add `.env` file to root directory / Edit `docker-compose.yml` environment variables
    ```bash
    PORT=8000
    DATABASE_URL=postgresql://username:password@localhost:5432/schedule?schema=public
    SECRET_TOKEN=SECRET
    PARSER_URL=http://localhost:5000/api
    ```

* Run docker-compose 
    ```bash
    docker-compose up --build --detach
    ```

* Request with curl
    ```bash
    http://localhost:8000/api/groups
    ```
