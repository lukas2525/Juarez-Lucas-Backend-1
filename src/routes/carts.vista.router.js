import express from "express";
import { carts } from "../utils.js";

export const routerVistaCarts = express.Router();

routerVistaCarts.get("/", async (req, res) => {
  return res.render("carts-html", {
    carts: carts,
  });
});
