import express from "express";

export const routerVistaCartsSocket = express.Router();

routerVistaCartsSocket.get("/", async (req, res) => {
  return res.render("carts-socket", {});
});