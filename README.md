![Desktop Preview](https://i.imgur.com/iNiSAnL.png)

<div align="center">
  <h1>MERN Blog</h1>

> &nbsp;
> <h3>A simple blog website built using MERN stack</h3>
>  <div>
>   <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /></a>
>   <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express" /></a>
>   <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="ReactJS" /></a>
>   <a href="https://nodejs.org/en"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" /></a>
>   <a href="https://mongoosejs.com/"><img src="https://img.shields.io/badge/-Mongoose-333?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" /></a>
>   <a href="https://jwt.io/"><img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT" /></a>
>   <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" /></a>
> </div>
> &nbsp;
</div>

## Table Of Content

- [Built Using](#built-using)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)

## Built Using

- [ReactJS](https://react.dev/) - JS Library
- [NodeJS](https://nodejs.org/en) - Backend Language
- [MongoDB](https://www.mongodb.com/) - NoSQL Database
- [Mongoose](https://mongoosejs.com/) - Connection Library Between MongoDB and NodeJS
- [JWT](https://jwt.io/) - Authentication
- [ExpressJS](https://expressjs.com/) - NodeJS Framework
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [React Router](https://reactrouter.com/en/main) - Client And Server-side Routing
- [Axios](https://axios-http.com/) - HTTP Client

## Getting Started

First install the required dependencies:

```bash
npm install
```

Then, run the development server in **both backend and frontend folder**:

```bash
npm run dev
```

## Environment Variables

The **dotenv** package is a **helpful tool when working with sensitive data** such as API keys, passwords, and other configuration variables that should not be hard-coded into your code. It allows you to load environment variables from a `.env` file into Node.js `process.env` object.

To use dotenv, create a `.env` file in the root directory of backend folder and define your environment variables in it using the **KEY=VALUE** syntax. Required variables to be initialized given below:

```
PORT=3000

MONGO_URI=

JWT_SECRET=

JWT_EXPIRY=
```

**Note:** If app didn't work, try restarting backend server.