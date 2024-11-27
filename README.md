# Book Inventory API

This is a RESTful API built using **NestJS** and **PostgreSQL** to manage a book inventory system. The API includes Swagger documentation for easy testing and interaction with the endpoints.


## Features

- **CRUD Operations**: Create, read, update, and delete books.
- **Swagger Documentation**: Integrated Swagger UI for API documentation and testing.
- **Validation**: Uses `class-validator` to validate request bodies.
- **Error Handling**: Custom error handling with detailed error responses.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **TypeORM**: Object-relational mapping (ORM) for TypeScript and JavaScript, which is used to interact with PostgreSQL.
- **PostgreSQL**: Relational database management system.
- **Swagger**: API documentation and testing.
- **class-validator**: Library for validation of incoming data.

## Project Setup

### Prerequisites

1. **Node.js** (v14 or later)
2. **PostgreSQL** (make sure you have a PostgreSQL instance running locally or remotely)

### Running the Application

1. Clone the repository and install dependencies:
    ```bash
    npm install
    ```

2. Run the application:
    ```bash
    npm run start
    ```

3. Access Swagger UI at:
    ```
    http://localhost:3000/api-docs
    ```

## Endpoints

- **GET /books** - Retrieve all books.
- **GET /books/:id** - Retrieve a book by ID.
- **POST /books** - Add a new book.
- **PUT /books/:id** - Update a book by ID.
- **DELETE /books/:id** - Delete a book by ID.



## Validation

- **title** - Required, string, not empty.
- **author** - Required, string, not empty.
- **isbn** - Required, valid ISBN format.

## Testing with Swagger
Swagger UI is available at http://localhost:3000/api-docs. You can use it to interact with the API endpoints and perform CRUD operations without needing to use Postman or CURL.

## Running Tests
For testing purposes, you can use Jest (which comes preconfigured with NestJS). Run the following command to execute the tests:
    ```
   npm run test
    ```


## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Authors
SOC Solutions