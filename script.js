
let urlAPI = "https://inventario-pocketbase.marc.prod.page/api/collections/productos/records";

function cargarProductos() {

    fetch(urlAPI)

        .then(function(respuesta) {
            return respuesta.json();
        })

        .then(function(datos) {

            let contenedor = document.getElementById("contenedor-productos");

            contenedor.innerHTML = "";

            datos.items.forEach(function(producto) {

                let imagen = "https://inventario-pocketbase.marc.prod.page/api/files/productos/"
                    + producto.id + "/" + producto.foto;

                contenedor.innerHTML += `
                    <div class="producto">
                        <img src="${imagen}" alt="${producto.nombre}">
                        <h2>${producto.nombre}</h2>
                        <p>Precio: ${producto.precio} €</p>
                        <p>Stock: ${producto.stock} unidades</p>
                    </div>
                `;

            });

        })

        .catch(function(error) {
            console.log("Error al cargar los productos:", error);
        });
}


cargarProductos();