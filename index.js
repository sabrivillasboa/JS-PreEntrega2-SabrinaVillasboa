const libros = [
    {id: 1, nombre: 'El pecador de Oxford', precio: 7000},
    {id: 2, nombre: 'Antes de Diciembre', precio: 10300},
    {id: 3, nombre: 'La Divina Comedia', precio: 6000},
    {id: 4, nombre: 'El Diario de Ana Frank', precio: 4000},
    {id: 5, nombre: 'Harry Potter', precio: 12000},
];

let carrito= [];

alert('Bienvenido!! Te mostramos los libros disponibles!!');

let mostrarLibros = libros.map((libro) => ` ${libro.nombre} $ ${libro.precio}`);
alert(mostrarLibros);

let respuesta = prompt('¿Desea comprar algun libro?').toLowerCase();

if(respuesta !="si" && respuesta !="no"){
    alert('Ingresa SI o NO');
    respuesta =prompt('¿Desea comprar algun libro?').toLowerCase();
}else if(respuesta ==='no'){
    alert('Gracias por visitarnos')
}else if(respuesta ==='si'){
    alert('A continuacion realice la compra')
}

while (respuesta == 'si') {
    let idIngresado = Number(prompt('agrega el ID del libro que quieras llevar'));
    let libroFiltrado = libros.find((item) => item.id === idIngresado);
    console.log(libroFiltrado);

    if (libroFiltrado) {
        carrito.push(libroFiltrado)
    } else {
        alert('Este libro no esta disponible')
    };

    respuesta = prompt ('Desea seguir agregando a su carrito?');
    while (respuesta ==='no') {
        let total = carrito.map((totalCarrito) => `Libro: ${totalCarrito.nombre}. Precio: $ ${totalCarrito.precio}`);
        alert(total.join(' | '));
        break;
        
    }
    
};
const totalCompra = carrito.reduce((acum, item) => acum + item.precio, 0);
alert(`El total de tu compra es $${totalCompra}`);

alert('Gracias por visitarnos');






//----------Este codigo comentado lo hice al principio porque no encontraba la manera de acceder a los elementos del array. Hasta que por fin con un find salio =) .-----------


// if (id === 1 || id === 2 ||id === 3 ||id === 4 || id === 5 ) {
    //     switch (id) {
    //         case 1:
    //             nombre = 'El pecador de Oxford';
    //             precio = 7000;
    //             break;
    //         case 2:
    //             nombre = 'Antes de Diciembre';
    //             precio = 10300;
    //             break;
    //         case 3:
    //             nombre = 'La Divina Comedia'
    //             precio = 6000;
    //             break;
    //         case 4:
    //             nombre = 'El Diario de Ana Frank'
    //             precio = 4000;
    //             break;
    //         case 5:
    //             nombre = 'Harry Potter'
    //             precio = 12000;
    //             break;
    //         default:
    //             break;
    //     }
    //     carrito.push({id, nombre, precio})
    // } else {
    //     alert('Este libro no esta disponible')
    // };

