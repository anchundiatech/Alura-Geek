// Función para obtener la lista de productos
async function listaProductos() {
  try {
    const response = await fetch("https://alurageek-fake-api-rose.vercel.app/product");
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    alert("Error en la conexión: " + error.message);
    console.error("Detalles del error:", error);
  }
}

// Función para crear un nuevo producto
async function nuevoProducto(nombre, precio, imagen, id) {
  try {
    const response = await fetch("https://alurageek-fake-api-rose.vercel.app/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nombre, precio, imagen, id })
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Producto creado:", data);
    return data;
  } catch (error) {
    alert("Error en la conexión: " + error.message);
    console.error("Detalles del error:", error);
  }
}

// Función para eliminar un producto
async function eliminarTarjeta(id) {
  try {
    const response = await fetch(`https://alurageek-fake-api-rose.vercel.app/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Producto eliminado:", data);
    return data;
  } catch (error) {
    alert("Error en la conexión: " + error.message);
    console.error("Detalles del error:", error);
  }
}

export const conexionAPI = {
  listaProductos,
  nuevoProducto,
  eliminarTarjeta
};
