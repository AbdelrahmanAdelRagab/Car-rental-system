# Car Rental System

This project is a Car Rental System built using Node.js, Express, and MongoDB. It provides a comprehensive solution for managing car rentals with features for user authentication, secure password handling, and efficient data management.

## Features

- **User Authentication**: Secure login and registration using JSON Web Tokens (JWT) and bcrypt for password hashing.
- **Car Management**: CRUD operations for managing car listings, including adding, updating, and deleting vehicles.
- **Rental Management**: Ability to create, manage, and track rental transactions.
- **Secure API**: Protects sensitive routes with JWT authentication and hashing passwords with bcrypt.

## Setup

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/yourusername/car-rental-system.git
   ```

2. **Navigate to the project directory**:  
   ```bash
   cd car-rental-system
   ```

3. **Install dependencies**:  
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add your environment variables (e.g., `MONGODB_URI`, `JWT_SECRET`).

5. **Start the server**:  
   ```bash
   npm start
   ```

   By default, the server will start on `http://localhost:3000`.

## API Endpoints

- **User Registration**: `POST /api/users/register`
  - Registers a new user.
- **User Login**: `POST /api/users/login`
  - Authenticates a user and returns a JWT.
- **Add Car**: `POST /api/cars`
  - Adds a new car to the inventory (requires JWT).
- **Update Car**: `PUT /api/cars/:id`
  - Updates car details (requires JWT).
- **Delete Car**: `DELETE /api/cars/:id`
  - Deletes a car from the inventory (requires JWT).
- **Create Rental**: `POST /api/rentals`
  - Creates a new rental transaction (requires JWT).
- **Get Rentals**: `GET /api/rentals`
  - Retrieves rental transactions (requires JWT).

## Dependencies

- `bcrypt`: For hashing passwords.
- `jsonwebtoken`: For handling JWT authentication.
- `express`: For creating the server and API routes.
- `mongoose`: For interacting with MongoDB.
- `dotenv`: For managing environment variables.

## License

This project is licensed under the ISC License.
