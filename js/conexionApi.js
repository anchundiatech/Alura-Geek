// Función para obtener la lista de productos
async function listaProductos() {
  try {
    const conexion = await fetch("https://alurageek-fake-api-rose.vercel.app/product");
    if (!conexion.ok) {
      throw new Error('Error en la solicitud');
    }
    const conexionConvertida = await conexion.json();
    console.log(conexionConvertida);
    return conexionConvertida;
  } catch (error) {
    alert("Error en la conexión: " + error.message);
    console.error(error);
  }
}

// Función para crear un nuevo producto
async function nuevoProducto(nombre, precio, imagen, id) {
  try {
    const conexion = await fetch("https://alurageek-fake-api-rose.vercel.app/product", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        precio: precio,
        imagen: imagen,
        id: id
      })
    });

    if (!conexion.ok) {
      throw new Error('Error en la solicitud');
    }

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
  } catch (error) {
    alert("Error en la conexión: " + error.message);
    console.error(error);
  }
}

// Función para eliminar un producto
async function eliminarTarjeta(id) {
  try {
    const conexion = await fetch(`https://alurageek-fake-api-rose.vercel.app/product/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" }
    });

    if (!conexion.ok) {
      throw new Error('Error en la solicitud');
    }

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
  } catch (error) {
    alert("Error en la conexión: " + error.message);
    console.error(error);
  }
}

export const conexionAPI = {
  listaProductos,
  nuevoProducto,
  eliminarTarjeta
};
