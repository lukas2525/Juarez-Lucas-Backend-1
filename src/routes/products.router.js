
import express from "express";
import { prodManager } from "../utils.js";

export const routerProducts = express.Router()


routerProducts.get("/", async (req, res) => {
  const products = await prodManager.getProducts();
  const limit = req.query.limit;
  const arrayLimit = products.slice(0, limit);
  res.status(200).json({ 
    status: "success", 
    msg: "lista de productos", 
    data: arrayLimit,
  });
});

routerProducts.get("/:pid", async (req, res) => {
  const id = req.params.pid;
  const findProduct = await prodManager.getProductById(id);
  res.status(200).json({
    status: "success",
    msg: "producto con el id " + id,
    data: findProduct,
  });
  
  routerProducts.delete("/:pid", async (req, res)=>{
    const id = req.params.id;
    const deleteProducts = await prodManager.filter((p)=> p.id != id);

    return res.status(200).json({
      status: "success",
      msg: "filtramos los productos cuyo id es " + id,
      data: {deleteProducts},
    });
  });

  routerProducts.put("/:id", async (req, res)=>{
    const id = req.params.id;
    const datosNuevos = req.body;
    const indice= await prodManager.findIdex((p) => p.id == id);
    if (indice == -1) {
      return res.status(404).json({
        status: "error",
        msg: "error ya que este producto no existe",
        data: {},
      });
    } else {
      prodManager[indice] = { ...datosNuevos, id: prodManager[indice].id};
      return res.status(201).json({
        status: "success",
        msg: "producto modificado OK",
        data: prodManager[indice],
      });
    }
  });

  routerProducts.post("/", async (req, res) =>{
    const productoParaCrear = req.body;
    productoParaCrear.id = (Math.random() * 100000).toFixed(0);
    productoParaCrear.fecha = Date.now();
    await prodManager.push(productoParaCrear);
    return res.status(201).json({
      status: "success",
      msg: "creamos el producto nuevo",
      data: productoParaCrear,
    });
  });
});