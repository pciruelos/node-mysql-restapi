## Project Name: Node.js REST API for Product Management

## Overview:
This project is a Node.js-based REST API for managing products in a database. It utilizes Express for the server framework and SQL Server for the backend database, supporting full CRUD (Create, Read, Update, Delete) operations on products.

## Features:
Full CRUD functionality for product management.
Integration with SQL Server for persistent data storage.
Express.js server setup for efficient request handling.

## Setup Instructions:
Clone the project.
Install dependencies: Navigate to the project directory and run npm install.
Configure SQL Server connection settings in connection.js.
Start the server: Run node index.js to start the server on port 3000.

## Usage:
Use the provided endpoint routes to manage products:
GET /products: Fetch all products.
GET /products/:id: Fetch a single product by ID.
POST /products: Add a new product.
DELETE /products/:id: Delete a product by ID.
PUT /products/:id: Update an existing product.