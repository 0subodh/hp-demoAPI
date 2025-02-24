# hp-demoAPI

## Overview
**hp-demoAPI** is a demo full-stack application built with **Node.js, Express, and React**. It provides an API to fetch **Harry Potter characters** and a simple frontend to display them.

- **Server:** Node.js + Express (Runs on port **5000**)
- **Client:** React + React Router (Runs on port **3000**)
- **Database:** MongoDB with Mongoose (Planned for future updates)
- **API Testing:** POSTMAN & Google Chrome

## Features
### Server (Node.js + Express)
- Serves static JSON data (no external database for now)
- Two API endpoints:
  - `GET /api/characters` → Fetch all characters
  - `GET /api/characters/:id` → Fetch a single character by ID
- Runs on port **5000**
- Implements CORS for frontend communication

### Client (React)
- Fetches and displays characters from the backend
- Implements **React Router** for navigation
- Runs on port **3000**

## Installation & Usage
### Prerequisites:
- Node.js & npm
- MongoDB (for future updates)

### Setup Instructions
1. **Clone the Repository**
   ```sh
   git clone https://github.com/0subodh/hp-demoAPI.git
   cd hp-demoAPI
   ```
2. **Backend Setup**
   ```sh
   cd server
   npm install
   npm run start
   ```
3. **Frontend Setup**
   ```sh
   cd client
   npm install
   npm run start
   ```

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/api/characters` | Fetch all characters |
| **GET** | `/api/characters/:id` | Fetch a single character by ID |

## Testing
- **Postman:** Use API endpoints to test the responses.
- **Google Chrome:** Open frontend at `http://localhost:3000` and interact with the UI.

## Future Enhancements
- Integrate MongoDB for dynamic data storage.
- Add authentication for API endpoints.
- Improve UI with additional features.

## Repository
[GitHub Repository](https://github.com/0subodh/hp-demoAPI.git)

## Contact
For any inquiries or contributions, feel free to reach out via GitHub.

