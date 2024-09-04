# Tracker App
# Overview
Tracker App is a real-time location tracking application built with Node.js, Express, EJS, and Socket.io. The application allows users to share their live location, which is displayed on a map using the Leaflet.js library.

# Features
Real-time Location Sharing: Users can share their current location, which is updated in real-time on the map.
Map Integration: Utilizes Leaflet.js to display maps and markers for users' locations.
Socket.io Integration: Enables real-time bi-directional communication between the server and clients.
EJS Templating: Uses EJS as the templating engine to render dynamic HTML content.
# Tech Stack
Node.js: JavaScript runtime used for server-side logic.
Express: Web framework for building the server.
Socket.io: Library for real-time web applications.
EJS: Templating engine for generating HTML markup with embedded JavaScript.
Leaflet.js: JavaScript library for interactive maps.
dotenv: Module for loading environment variables from a .env file.
Cors: Middleware to enable CORS (Cross-Origin Resource Sharing).

# Installation
1. Clone the repository:
   git clone https://github.com/shekhar-2410/Tracker_App
2. Navigate to the project directory:
   cd tracker-app
3. Install dependencies:
   npm install
4. Create a .env file and set your environment variables:
   PORT=5100
5. Run the server:
   npm start
# Usage
Start the server: Ensure that your Node.js server is running.
Access the application: Open your browser and navigate to http://localhost:5100.
Share Location: Allow location sharing in your browser to start tracking your location on the map.

# Directory Structure
tracker-app/
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── views/
│   └── index.ejs
│
├── .env
├── server.js
├── package.json
└── README.md

# Dependencies
Node.js: ^14.0.0
Express: ^4.17.1
Socket.io: ^4.7.5
EJS: ^3.1.8
Leaflet.js: ^1.9.4
dotenv: ^16.0.3
Cors: ^2.8.5

# Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.
