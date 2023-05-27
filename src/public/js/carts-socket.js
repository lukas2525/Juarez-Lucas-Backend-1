const socket = io();

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
}

asyncWraper();

// FRONT ATAJA "msg_server_to_front"
// socket.on("msg_server_to_front", (msg)=>{
//     console.log(msg);
// })