-- CREATE DATABASE webstore

USE webstore;

CREATE TABLE products
(
    id int IDENTITY(1,1) PRIMARY key,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2),
    quantity INT,
    description TEXT,
)