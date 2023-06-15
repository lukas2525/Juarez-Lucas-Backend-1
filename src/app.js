//@ts-check
import express from "express";
/* import { routerProducts } from "./routes/products.router.js";
import { routerCarts } from "./routes/carts.router.js";
import { routerVistaCarts } from "./routes/carts.vista.router.js";
import { routerVistaCartsSocket } from "./routes/carts-socket.vista.router.js"; */
import handlebars from "express-handlebars";
import { __dirname } from "./dirname.js";
import { Server } from "socket.io";
import { routerUsers } from "./routes/users.router.js";
import { connectMongo } from "./utils/connections.js";
const app = express();
const port = 8080;

// mongodb+srv://juarezlucasangel:usDQMDChSj0eHvDt@cluster0.cjvlnsd.mongodb.net/?retryWrites=true&w=majority
connectMongo();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CONFIGURACION DEL MOTOR DE HANDLEBARS
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

//ARCHIVOS PUBLICOS
app.use(express.static(__dirname + "/public"));

// TODOS NUESTROS ENDPOINT CON DATOS CRUDOS

/* app.use("/api/products", routerProducts);
app.use("/api/carts", routerCarts);
*/

/* // VISTA HTML REAL
app.use("/vista/carts", routerVistaCarts);

// VISTA SOCKETS
app.use("/vista/carts-socket", routerVistaCartsSocket); */

app.use("/api/users", routerUsers); 

app.get("*", (req, res) => {
  return res.status(404).json({
    status: "error",
    msg: "error, esa ruta no existe",
    data: {},
  });
});
// FIN NUESTROS ENDPOINT

// INICIAMOS EL SERVIDOR
const httpServer = app.listen(port, () =>
  console.log(`escuchando el puerto ${port}`)
);

const socketServer = new Server(httpServer);
let msgs = [];
socketServer.on("connection", (socket) => {
  socket.on("msg_front_to_back", (msg) => {
    msgs.push(msg);
    console.log(msgs);
    socketServer.emit("todos_los_msgs", msgs);
  });
});
