/* 
import express from "express";
import { carts } from "../utils/utils.js";

export const routerCarts = express.Router();

routerCarts.get("/", (req, res) => {
  const edad = req.query.edad;
  if (req.query && edad) {
    const cartsFiltradosPorEdad = carts.filter((p) => p.edad == edad);
    return res.status(200).json({
      status: "success",
      msg: "te paso todos los carts cuya edad = " + edad,
      data: cartsFiltradosPorEdad,
    });
  } else {
    return res.status(200).json({
      status: "success",
      msg: "te paso todos los carts",
      data: carts,
    });
  }
});

routerCarts.get("/:id", (req, res) => {
  const id = req.params.id;
  const cart = carts.find((p) => p.id == id);
  if (cart) {
    return res.status(200).json({
      status: "success",
      msg: "cart encontrado con exito",
      data: cart,
    });
  } else {
    return res.status(400).json({
      status: "error",
      msg: "no se encontro el cart",
      data: {},
    });
  }
});

routerCarts.delete("/:id", (req, res) => {
  const id = req.params.id;
  carts = carts.filter((p) => p.id != id);

  return res.status(200).json({
    status: "success",
    msg: "filtramos los carts cuyo id es " + id,
    data: {},
  });
});

routerCarts.put("/:id", (req, res) => {
  const id = req.params.id;
  const datosNuevos = req.body;
  const indice = carts.findIndex((p) => p.id == id);
  if (indice == -1) {
    return res.status(404).json({
      status: "error",
      msg: "error ya que este cart no existe",
      data: {},
    });
  } else {
    carts[indice] = { ...datosNuevos, id: carts[indice].id };
    return res.status(201).json({
      status: "success",
      msg: "cart modificado ok",
      data: carts[indice],
    });
  }
});

routerCarts.post("/", (req, res) => {
  if (!req.file) {
    res.status(400).send({
      status: "error",
      msg: "error no enviaste una foto o no se puedo subir la misma",
      data: {},
    });
  }

  const cartParaCrear = req.body;
  cartParaCrear.id = (Math.random() * 1000000000).toFixed(0);
  cartParaCrear.fecha = Date.now();
  cartParaCrear.file = "http://localhost:8080/" + req.file.filename;
  pets.push(cartParaCrear);
  return res.status(201).json({
    status: "success",
    msg: "creamos el cart que pediste",
    data: cartParaCrear,
  });
}); */