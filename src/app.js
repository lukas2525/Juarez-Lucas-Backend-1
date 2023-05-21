//@ts-check
import express from "express";
import { routerCarts } from "./routes/carts.router.js";
import { routerProducts } from "./routes/products.router.js";
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODOS NUESTROS ENDPOINT
app.use("/products", routerProducts);
app.use("/carts", routerCarts);

app.get("*", (req, res)=>{
  return res.status(404).json({
    status: "error",
    msg: "error, esa ruta no existe",
    data: {},
  });
});
// FIN NUESTROS ENDPOINT

app.listen(port, () => console.log(`escuchando el puerto ${port}`));