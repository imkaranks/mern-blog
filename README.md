![Desktop Preview](https://i.imgur.com/iNiSAnL.png)

<div align="center">
  <h1>MERN Blog</h1>

> &nbsp;
> <h3>A simple blog website using MERN stack</h3>
>  <div>
>   <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
>   <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express" />
>   <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="ReactJS" />
>   <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
>   <img src="https://img.shields.io/badge/-Mongoose-333?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
>   <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT" />
>   <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
> </div>
> &nbsp;
</div>

## Table Of Content

- [Bult Using](#built-using)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)

## Built Using

- [ReactJS](https://react.dev/) - Frontend Framework
- [NodeJS](https://nodejs.org/en) - Backend Language
- [MongoDB](https://www.mongodb.com/) - NoSQL Database
- [Mongoose](https://mongoosejs.com/) - Connection Library Between MongoDB and NodeJS
- [JWT](https://jwt.io/) - Authentication
- [ExpressJS](https://expressjs.com/) - Node Framework
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [React Router](https://reactrouter.com/en/main) - Client And Server-side Routing
- [Axios](https://axios-http.com/) - HTTP Client

## Getting Started

First install required dependencies:

```bash
npm install
```

Then, run the development server in **both backend and frontend folder**:

```bash
npm run dev
```

## Environment Variables

The dotenv package is a helpful tool when working with sensitive data such as API keys, passwords, and other configuration variables that should not be hard-coded into your code. It allows you to load environment variables from a `.env` file into Node.js `process.env` object.

To use dotenv, create a `.env` file in the root directory of backend folder and define your environment variables in it using the **KEY=VALUE** syntax. Required variables to be initialized given below:

```
PORT=3000

MONGO_URI=

JWT_SECRET=

JWT_EXPIRY=
```

**Note:** If didn't work, try restarting backend server.