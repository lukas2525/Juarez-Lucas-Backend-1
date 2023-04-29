
class ProductManager {
  constructor() {
    this.products = [];
  }
  getProducts() {
    console.log(this.products);
    return this.products;
  }
  getProducById(id) {
    const found = this.products.find((prod) => prod.id === id);
    if (found) {
      return found;
    } else {
      console.log("Not Found");
      return undefined;
    }
  }

  #getProductByCode(code) {
    const existsInArray = this.products.find((prod) => prod.code === code);
    if (existsInArray) {
      return true;
    } else {
      return false;
    }
  }

  #generateId() {
    let maxId = 0;
    for (let i = 0; i < this.products.length; i++) {
      const prod = this.products[i];
      if (prod.id > maxId) {
        maxId = prod.id;
      }
    }
    return ++maxId;
  }
  addProduct(title, description, price, thumbnail, code, stock) {
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
        title,
        description,
        price,
        thumbnail,
        code,
        id: this.#generateId(),
      };
      this.products = [...this.products, newProduct];
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
//console.log(myProducts);
