import {getConnection} from '../database/connection.js'

export const getProducts = async(req, res) => {
  const pool = await getConnection()
  const result = await pool.request().query('SELECT * FROM products')
  console.log(result)
  res.json(result.recordset);
};

export const getOneProduct = (req, res) => {
  res.send("getting one product");
};

export const addProduct = (req, res) => {
  res.send("new product");
};

export const deleteProduct = (req, res) => {
  res.send("delete product");
};

export const updateProduct = (req, res) => {
  res.send("update product");
};
