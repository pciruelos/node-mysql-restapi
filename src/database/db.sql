-- CREATE DATABASE webstore

USE webstore;

-- CREATE TABLE products
-- (
--     id int IDENTITY(1,1) PRIMARY key,
--     name VARCHAR(100) NOT NULL,
--     price DECIMAL(10,2),
--     quantity INT,
--     description TEXT,
-- )

INSERT INTO products (name, description, quantity, price) VALUES ('mouse', 'mouse gaming', 10, 100)