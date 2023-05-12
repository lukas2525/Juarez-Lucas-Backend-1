import express from "express";
import ProductManager from "./ProductManager.js";

const prodManager = new ProductManager();

async function addProd() {
  await prodManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  );

  await prodManager.addProduct(
    "producto prueba 2",
    "Este es un producto prueba 2",
    220,
    "Sin imagen",
    "abc124",
    20
  );

  await prodManager.addProduct(
    "producto prueba 3",
    "Este es un producto prueba 3",
    235,
    "Sin imagen",
    "abc125",
    23
  );

  await prodManager.addProduct(
    "producto prueba 4",
    "Este es un producto prueba 4",
    275,
    "Sin imagen",
    "abc126",
    5
  );

  await prodManager.addProduct(
    "producto prueba 5",
    "Este es un producto prueba 5",
    300,
    "Sin imagen",
    "abc127",
    2
  );
  
  await prodManager.addProduct(
    "producto prueba 6",
    "Este es un producto prueba 6",
    100,
    "Sin imagen",
    "abc128",
    15
  );

  await prodManager.addProduct(
    "producto prueba 7",
    "Este es un producto prueba 7",
    280,
    "Sin imagen",
    "abc129",
    21
  );

  await prodManager.addProduct(
    "producto prueba 8",
    "Este es un producto prueba 8",
    700,
    "Sin imagen",
    "abc130",
    24
  );

  await prodManager.addProduct(
    "producto prueba 9",
    "Este es un producto prueba 9",
    550,
    "Sin imagen",
    "abc131",
    6
  );

  await prodManager.addProduct(
    "producto prueba 10",
    "Este es un producto prueba 10",
    800,
    "Sin imagen",
    "abc132",
    23
  );
}

addProd();

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 8080;

app.get("/", (req, res) => {
  res.status(200).send("primer endpoint");
});

app.get("/products", async (req, res) => {
  const products = await prodManager.getProducts();
  const limit = req.query.limit;
  const arrayLimit = products.slice(0, limit);
  res.json({ status: "succes", msg: "lista de productos", data: arrayLimit });
});

app.get("/products/:pid", async (req, res) => {
  const id = req.params.pid;
  const findProduct = await prodManager.getProductById(id);
  res.json({
    status: "succes",
    msg: "producto con el id " + id,
    data: findProduct,
  });
});

app.listen(port, () => console.log(`escuchando el puerto ${port}`));
