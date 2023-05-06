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





//FileSystem (Fs)=>

// Manejo de archivos filesystem (sincrono): Facil

// const fs = require("fs");
// fs.unlinkSync("text.txt");

// if(fs.existsSync("text.txt")){
//     const contenidoInicial = fs.readFileSync("text.txt", "utf-8");
//     fs.appendFileSync("text.txt", new Date().toLocaleString("es-AR") + " lo agregamos al archivo");
//     const contenidoNuevo = fs.readFileSync("text.txt", "utf-8");
//     console.log("contenido final");
//     console.log(contenidoNuevo);
// }else {
//     fs.writeFileSync("text.txt", "");
// }

// Manejo de archivos con callback(asyncronico): Muy Dificil

// const fs = require("fs");

// fs.writeFile("text.txt", "hola mundo", (err)=> {
//     if(err){
//         console.log("error al escribir el archivo");
//     } else {
//         console.log("archivo escrito correctamente");
//     }
// });

// fs.readFile("text.txt", "utf-8", (err, res)=>{
//     if(err) {
//         console.log("error al leer el archivo");
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });

// fs con promesas(asyncronico) ("them, catch"): Muy Dificil

// fs con promesas(asyncronico) ("async await"): Facil

// const fs = require("fs");
// async function cosasAsincronas(){
//     await fs.promises.unlink("text.txt");
//     await fs.promises.writeFile("text.txt", "");

//     const contenidoInicial = await fs.promises.readFile("text.txt", "utf-8");
//     console.log("contenido inicial del archivo");
//     console.log(contenidoInicial);

//     const persona ={
//         nombre: "Lucas",
//         apellido: "Juárez",
//     }

//     await fs.promises.appendFile("text.txt", JSON.stringify(persona));

//     const contenidoFinal = await fs.promises.readFile("text.txt", "utf-8");
//     console.log(contenidoFinal);
// }

// cosasAsincronas()

// ----------------------------------------------------------//

// const fs = require("fs");

// class UserManager { // ProductManager
//   constructor() {
//     this.users = []; // this.products
//     const usersString = fs.readFileSync("users.json", "utf-8"); // Va siempre, cuando leo, parseo, porque cuando lo leo viene en string y lo recupero en la version original!
//     const users = JSON.parse(usersString); // Va siempre, cuando leo, parseo, porque cuando lo leo viene en string y lo recupero en la version original!
//     this.users = users;
//   }
//   createUser(user) { //  seria "addProduct" (product)
//     this.users.push(user); // (product)
//     const usersString = JSON.stringify(this.users); // Va siempre, cuando va a grabar un archivo, primero lo paso a string y pierde todas las propiedades que tenga, lo guardo en un archivo y termina!
//     fs.writeFileSync("users.json", usersString); // Va siempre, cuando va a grabar un archivo, primero lo paso a string y pierde todas las propiedades que tenga, lo guardo en un archivo y termina!
//     // return depende lo que te diga la diapositiva
//     // lo ideal es hacer un return con el usuario completo
//   }
//   deleteUser(id) {
//     // buscar por ese id y borrar en el array
//     // luego asegurarse de guardar tambien en el archivo
//     //...
//     this.users.push(user);
//     const usersString = JSON.stringify(this.users); // Va siempre, cuando va a grabar un archivo, primero lo paso a string y pierde todas las propiedades que tenga, lo guardo en un archivo y termina!
//     fs.writeFileSync("users.json", usersString); // Va siempre, cuando va a grabar un archivo, primero lo paso a string y pierde todas las propiedades que tenga, lo guardo en un archivo y termina!
//     // return depende lo que te diga la diapositiva
//     // lo ideal es hacer un return con el mensaje positivo o de error
//   }
//   updateUser(id, user) { // updateProduct
//     // buscar por ese id y modificar en el array
//     // luego asegurarse de guardar tambien en el archivo
//     //...
//     this.users.push(user);
//     const usersString = JSON.stringify(this.users); // Va siempre, cuando va a grabar un archivo, primero lo paso a string y pierde todas las propiedades que tenga, lo guardo en un archivo y termina!
//     fs.writeFileSync("users.json", usersString); // Va siempre, cuando va a grabar un archivo, primero lo paso a string y pierde todas las propiedades que tenga, lo guardo en un archivo y termina!
//     // return depende lo que te diga la diapositiva
//     // lo ideal es hacer un return con el usuario completo
//   }
//   getAllUsers() { // seria "getProducts"
//     // const usersString = fs.readFileSync("users.json", "utf-8"); // Va siempre, cuando leo, parseo, porque cuando lo leo viene en strig y lo recupero en la version original!
//     // const users = JSON.parse(usersString); // Va siempre, cuando leo, parseo, porque cuando lo leo viene en strig y lo recupero en la version original!
//     // this.users = users;
//     return this.users; // seria "getProducts"
//     // return con el array completo o lo que diga la diapositiva
//   }
//   getUserById(id) { // getProductById
//     // buscar en el array con ese id
//     // hacer el return con el usuario encontrado
//     // OPCIONAL BUSCAR EN EL ARCHIVO Y RECUPERAR TODOS LOS DATOS
//     // const usersString = fs.readFileSync("users.json", "utf-8"); // Va siempre, cuando leo, parseo, porque cuando lo leo viene en strig y lo recupero en la version original!
//     // const users = JSON.parse(usersString); // Va siempre, cuando leo, parseo, porque cuando lo leo viene en strig y lo recupero en la version original!
//     // this.users = users;
//     return this.users;
//   }
// }

// const userManager = new UserManager(); // ProductManager

// console.log(userManager.getAllUsers());
// userManager.createUser({ name:"Lucas", age: 33}); // seria "addProduct"
// userManager.createUser({ name:"Analia", age: 39}); // seria "addProduct"
// console.log(userManager.getAllUsers());

// const fs = require("fs");

// class ProductManager {
//     #path

//     constructor(path) {
//         this.products = [];
//         this.#path = path;
//         if (!fs.existsSync(this.#path))
//         return fs.writeFileSync(this.#path, "[]")
//     }
//     getProducts() {
//         this.products = JSON.parse(fs.readFileSync(this.#path, "utf-8"))
//         console.log(this.products);
//         return this.products;
//     }
//     getProductById(id) {
//         this.products = JSON.parse(fs.readFileSync(this.#path, "utf-8"))
//         const found = this.products.find(prod => prod.id === id);
//         if(found) {
//             return found
//         } else {
//             console.log('Not found');
//             return undefined;
//         }
//     }

//     #getProductByCode(code) {
//         this.products = JSON.parse(fs.readFileSync(this.#path, "utf-8"))
//         const existsInArray = this.products.find(prod => prod.code === code);
//         if(existsInArray) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     #generateId() {
//         this.products = JSON.parse(fs.readFileSync(this.#path, "utf-8"))
//         let maxId = 0;
//         for(let i = 0; i < this.products.length; i++) {
//             const prod = this.products[i];
//             if(prod.id > maxId) {
//                 maxId = prod.id;
//             }
//         }
//         return ++maxId;
//     }
//     addProduct(title, description, price, thumbnail, code, stock) {

//         this.products = JSON.parse(fs.readFileSync(this.#path, "utf-8"))

//         if((title === undefined || title === null || title === '') || (description === undefined || description === null || description === '') || (price === undefined || price === null || price === '') || (thumbnail === undefined || thumbnail === null || thumbnail === '') || (code === undefined || code === null || code === '' || this.#getProductByCode(code)) || (stock === undefined || stock === null || stock === '')) {
//             console.log('Error!!, code field cannot be repeated and fields can not be undefined, null or empty space');
//         }

//         else {
//             let newProduct = {title, description, price, thumbnail, code, id: this.#generateId()};
//             this.products = [...this.products, newProduct];
//             fs.writeFileSync(this.#path, JSON.stringify(this.products))

//             return console.log('Product added successfully!!');
//         }
//     }

// }
// const myProducts = new ProductManager("./products.json");

// myProducts.addProduct( 'producto de prueba1',
// 'Este es un producto prueba',
// 200,
// 'Sin imagen',
// 'abc123',
// '25'
// );

// myProducts.getProducts();

// myProducts.updateProduct(1, 'title', 'madera');
// myProducts.updateProduct(1, 'description', 'roble');
