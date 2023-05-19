
import express from "express";
import { prodManager } from "../utils.js";
export const routerProducts = express.Router()


routerProducts.get("/", async (req, res) => {
  const products = await prodManager.getProducts();
  const limit = req.query.limit;
  const arrayLimit = products.slice(0, limit);
  res.status(200).json({ 
    status: "succes", 
    msg: "lista de productos", 
    data: arrayLimit,
  });
});

routerProducts.get("/:pid", async (req, res) => {
  const id = req.params.pid;
  const findProduct = await prodManager.getProductById(id);
  res.status(200).json({
    status: "succes",
    msg: "producto con el id " + id,
    data: findProduct,
  });
  
});