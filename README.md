Certainly! Here's a rephrased version of the information for your GitHub README:

---

# MERN Stack Movie Application
## MOVIEFLIX

An open-source movie application built using MongoDB, Express, React, and Node.js (MERN stack).

## Table of Contents

- [Configuration and Setup](#configuration-and-setup)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
  - [API](#api)
- [Screenshots](#screenshots)
- [Author](#author)
- [License](#license)

## Configuration and Setup

To run this project locally:

1. Fork and clone the repository or download it as a zip file and unzip it on your machine.
2. Open the project in your preferred code editor.
3. Open a terminal (VS Code: Terminal -> New Terminal).
4. Split your terminal into two sections to run the client and server simultaneously.

### Client Setup

In the first terminal:

```sh
cd client
npm install  # Install client-side dependencies
npm start    # Start the client
```

### Server Setup

In the second terminal, navigate to the server directory and set environment variables in the `.env` file:

```env
# --- .env ---
MONGODB_URL=<Your_MongoDB_URL>
PORT=5000
TOKEN_SECRET=<Your_Secret_Token>
TMDB_BASE_URL=<TMDB_API_Base_URL>
TMDB_KEY=<Your_TMDB_API_Key>
```

Then, run the following commands:

```sh
cd server
npm install  # Install server-side dependencies
npm start    # Start the server
```

## Key Features

- User registration and login
- Authentication using JWT tokens
- Add and delete favorites
- Leave and delete reviews
- Password update
- Live search
- Watch trailers on YouTube
- 404 Page and many more features
- Skeleton loading effect
- Dark mode
- Responsive design

## Technologies Used

### Frontend

- **React.js**: JavaScript library for building user interfaces, especially single-page applications
- **React Hooks**: Manage and centralize application state
- **react-router-dom**: Handle routing
- **axios**: Make API calls
- **Material UI**: User interface components
- **CKEditor**: Rich text editor
- **Formik**: Manage form state and validation
- **React Redux**: Efficiently manage application state
- **React Toastify**: Interactive and responsive notifications
- **Swiper**: Create responsive and interactive sliders/carousels

### Backend

- **Node.js**: Runtime environment for building server applications
- **Express.js**: Server for handling and routing HTTP requests
- **Mongoose**: Model and map MongoDB data to JavaScript
- **axios**: Make API calls
- **jsonwebtoken**: Authentication
- **cookie-parser**: Manage cookies
- **cors**: Middleware for Cross-Origin Resource Sharing
- **dotenv**: Load environment variables
- **express-validator**: Validate user input
- **nodemon**: Development utility for Node.js applications

### Database

- **MongoDB**: Cloud service to store MongoDB collections

### API

- **TMDB API**: Access movie and TV show data from The Movie Database platform

## Screenshots
![home1](https://github.com/Harsh-1105/Movieflix-MERN/assets/78211002/bf04bf22-fd24-422c-bac7-943296b53077)
![home](https://github.com/Harsh-1105/Movieflix-MERN/assets/78211002/9a582d8b-2769-4952-8d69-c6d782b12938)
![movie_desc](https://github.com/Harsh-1105/Movieflix-MERN/assets/78211002/eecd9eca-ad00-4ce6-b5aa-25be7ad00d78)
![signup](https://github.com/Harsh-1105/Movieflix-MERN/assets/78211002/5305c078-7231-460d-b4d4-71631d99ad68)
![signin](https://github.com/Harsh-1105/Movieflix-MERN/assets/78211002/dffeca60-75bc-42a8-b166-ec40bacecb9c)
![search](https://github.com/Harsh-1105/Movieflix-MERN/assets/78211002/8ed07806-2102-48b1-84d9-61a4c7c91dc0)
![reviews](https://github.com/Harsh-1105/Movieflix-MERN/assets/78211002/30af2179-3340-40ba-8385-c5a2c8f87d4f)
![hamburger](https://github.com/Harsh-1105/Movieflix-MERN/assets/78211002/039703c7-84d6-46e0-bad1-069ecb1a7528)


## Author
Harsh Kumar Sharma

## License
MIT LICENSE 

(Include license information here)

---

Feel free to replace the placeholders with your specific details, such as your MongoDB URL, secret token, TMDB API base URL, TMDB API key, screenshots, author name, and license information.
