import { Router } from "express";
import {
  getProducts,
  addProduct,
  deleteProduct,
  getOneProduct,
  updateProduct,
} from "../controllers/products.controllers.js";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getOneProduct);
router.post("/products", addProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);

export default router;
