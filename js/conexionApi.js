async function conectar(){
    const conexion = await fetch('http://localhost:3000/productos');
    const conexionConvertida = await conexion.json();
    console.log(conexionConvertida);
    return conexionConvertida;
}

conectar();