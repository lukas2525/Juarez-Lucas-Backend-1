const fs = require("fs");

class ProductManager {
  constructor() {
    this.products = [];
    this.path = "text.json"
    const productsString = fs.readFileSync(this.path, "utf-8");
    const products = JSON.parse(productsString);
    this.products = products;
  }

  getProducts() {
    const productsString = fs.readFileSync(this.path, "utf-8");
    const products = JSON.parse(productsString);
    this.products = products;
    console.log(this.products);
    return this.products;
  }

  getProducById(id) {
    const productsString = fs.readFileSync(this.path, "utf-8");
    const products = JSON.parse(productsString);
    this.products = products;
    const found = this.products.find((prod) => prod === id);
    if (found) {
      return found;
    } else {
      console.log("Not Found");
      return undefined;
    }
  }

   #getProductByCode(code) {
    this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    const existsInArray = this.products.find((prod) => prod === code);
    if (existsInArray) {
      return true;
    } else {
      return false;
    }
  }

   #generateId() {
    this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    let maxId = 0;
    for (let i = 0; i < this.products.length; i++) {
      const prod = this.products[i];
      if (prod > maxId) {
        maxId = prod.id;
      }
    }
    return ++maxId;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    this.products.push(this.addProduct);
    const productsString = JSON.stringify(this.products);
    fs.writeFileSync(this.path, productsString);
    if (
      title === undefined ||
      title === null ||
      title === "" ||
      description === undefined ||
      description === null ||
      description === "" ||
      price === undefined ||
      price === null ||
      price === "" ||
      thumbnail === undefined ||
      thumbnail === null ||
      thumbnail === "" ||
      code === undefined ||
      code === null ||
      code === "" ||
      this.#getProductByCode(code) ||
      stock === undefined ||
      stock === null ||
      stock === ""
    ) {
      console.log(
        "Error!!, el campo de código no se puede repetir y los campos no pueden ser espacios indefinidos, nulos o vacíos "
      );
    } else {
      let newProduct = {
        id: this.#generateId(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products = [...this.products, newProduct];
    }
  }

  deleteProduct(id) {
    this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"));

    if (this.products.find((p) => p === id)) {
      this.products.splice(
        this.products.indexOf(this.products.find((p) => p.id === id)),
        1
      );
      fs.writeFileSync(this.path, JSON.stringify(this.products));
      return console.log("Producto eliminado exitosamente!");
    } else {
      return console.log("No se escontro el producto!");
    }
  }

  updateProduct(id, key, value) {
    this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"));

    if (key == "id") {
      return console.log(
        "No es posible modificar el campo id, prueba nuevamente"
      );
    } else if (this.products.find((p) => p.id === id)) {
      const Found = this.products.find((p) => p === id);
      Found[key] = value;
      fs.writeFileSync(this.path, JSON.stringify(this.products));
      return console.log("Se actualizo el producto!", Found);
    } else {
      return console.log("Producto no encontrado!");
    }
  }
}

const myProducts = new ProductManager();

myProducts.addProduct(
  "Producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  "25"
);
myProducts.addProduct(
  "Producto prueba1",
  "Este es un producto prueba1",
  2100,
  "Sin imagen",
  "abc1231",
  "5"
);


console.log(myProducts);