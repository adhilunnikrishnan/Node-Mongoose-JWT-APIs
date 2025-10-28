import express from "express";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
import { verifyAdmin, verifyUser } from "../middleware/authMiddleware.js";

const productRoutes = express.Router({ mergeParams: true });

productRoutes.post("/", verifyAdmin, addProduct);

productRoutes.get("/", verifyUser, getProducts);

productRoutes.patch("/:id", verifyAdmin, updateProduct);

productRoutes.delete("/:id", verifyAdmin, deleteProduct);

export default productRoutes;
