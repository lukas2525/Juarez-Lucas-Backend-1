import express from "express";

export const routerVistaChatSocket = express.Router();

routerVistaChatSocket.get("/", async (req, res) => {
  return res.render("chat-socket", {});
});