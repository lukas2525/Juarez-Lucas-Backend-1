const socket = io();

import { carts } from "../../utils";

// Manager y router
const cart = new carts();

let nombre = "";

async function asyncWraper() {
    const { value: nombreIngresado } = await Swal.fire({
        title: "Ingresa tu nombre",
        input: "text",
        inputLabel: "Tu nombre",
        inputValue: "",
        showCancelButton: false,
        allowOutsideClick: false,
        inputValidator: (value) => {
            if (!value) {
                return "Por favor completar";
            }
        },
    });
    nombre = nombreIngresado;
    document.getElementById("span-nombre").innerHTML = nombre;
}

asyncWraper();

function enviarFormulario(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Obtiene los valores de los campos del formulario
  const formulario = document.getElementById("mi-formulario");
  const formData = new FormData(formulario);
  const name = formData.get("nombre");
  const description = formData.get("raza");
  const price = formData.get("precio");

  // Crea un objeto 'cart' con los datos del formulario
  const product = {
      nombre: nombre,
      raza: raza,
      precio: precio,
  };

  // Llama a la función 'createCart' y pasa el objeto 'cart'
  cart.createCart(cart);

  socket.emit("msg_front_to_back", {
      msg: cart,
  });
}

socket.on("todos_los_msgs", async (msgs) => {
  const divMsgs = document.getElementById("div-msgs");
  let contenido = "";
  const cart2 = await cartsManager.getCarts();
  msgs.forEach((msg) => {
      const cart = msg.msg; // Obtener el objeto 'cart' del mensaje

      // Construir el contenido HTML con todas las variables del cart
      contenido += `
          <p>Nombre: ${cart.nombre}</p>
          <p>Raza: ${cart.raza}</p>
          <p>Precio: ${cart.precio}</p>
      `;
  });

  divMsgs.innerHTML = contenido;
  divMsgs.innerHTML = cart2;
  
});