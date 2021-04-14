
var addcarrito = document.getElementById('carrito');


addcarrito.addEventListener('click', function () {
    var x = document.getElementById("desple");


    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    
    }
})
const baseDeDatos = [
    {
        id: 1,
        nombre: 'sueter',
        precio:60000,
        categoria:'ropa de mujer',
        imagen: 'img/ropa.jpg'
    },
    {
        id: 2,
        nombre: 'sueter',
        precio: 60000,
        categoria:'ropa de mujer',
        imagen: 'img/ropa.jpg'
    },
    {
        id: 3,
        nombre: 'sueter',
        precio: 60000,
        categoria:'ropa de mujer',
        imagen: 'img/ropa.jpg'
    },
    {
        id: 4,
        nombre: 'sueter',
        precio: 60000,
        categoria:'ropa de mujer',
        imagen: 'img/ropa.jpg'
    }

];

var carrito = [];

var template = ` 
`;
var addj = document.querySelectorAll('.btn');
var nombre = document.querySelectorAll('.nombre');
var categoria = document.querySelectorAll('.categoria');
var precio = document.querySelectorAll('.precio');
var imagen = document.querySelectorAll('.img-card');
var list = document.querySelector('#items');


var id = 0;
var total = 0;
var template = ``;
function renderizarProductos() {
    baseDeDatos.forEach((item) => {
        template += `
        <div  class="card">
            <div class="content-img">
                <img src="${item.imagen}" alt="" class="img-card">
               
            </div>
            <p class="nombre">${item.nombre}</p>
            <div class="content-details">
                <span class="categoria">${item.categoria}</span>
                <span class="precio">$ ${item.precio}</span>       
            </div>
         
            <div class="valoracion">
            <input id="radio1" type="radio" name="estrellas" value="5"><!--
            --><label for="radio1">★</label><!--
            --><input id="radio2" type="radio" name="estrellas" value="4"><!--
            --><label for="radio2">★</label><!--
            --><input id="radio3" type="radio" name="estrellas" value="3"><!--
            --><label for="radio3">★</label><!--
            --><input id="radio4" type="radio" name="estrellas" value="2"><!--
            --><label for="radio4">★</label><!--
            --><input id="radio5" type="radio" name="estrellas" value="1"><!--
            --><label for="radio5">★</label>
          </p>
            </div>
          
            <button codigo="${item.id}"  class="btn">Agregar al carrito</button>
        </div>
       
        `;

        
    })

    document.getElementById('content').innerHTML = template;
   
}

renderizarProductos();

var botones = document.querySelectorAll('.btn')

console.log(botones);

botones.forEach((boton) => {
    boton.addEventListener('click', function (e) {
        carrito.push(this.getAttribute('codigo'))
        renderizarCarrito();
        alert('producto agregado')
    })
}) 


function renderizarCarrito() {
   
    list.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const ITEM = document.createElement('li');
        ITEM.classList.add="item-c"
        ITEM.innerHTML = `
        <img class="img-carrito" src="${miItem[0].imagen}">
        <span> ${miItem[0].nombre}</span>
        <input class="form-cantidad" value="${numeroUnidadesItem}">
        <span> ${miItem[0].precio}</span>
       

        `;
        const Boton = document.createElement('button');
        Boton.classList.add('btn', 'btn-delete');
        Boton.textContent = 'X';
        Boton.style.marginLeft = '1rem';
        Boton.dataset.item = item;
        Boton.addEventListener('click', borrarItemCarrito);
        ITEM.appendChild(Boton);
        list.appendChild(ITEM);
      
    });
}

function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
}
document.querySelector('#eliminar-todo').addEventListener('click', function () {
    vaciarCarrito()
})

function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
     carrito = carrito.filter((carritoId) => {
         return carritoId !== id;
     });
     renderizarCarrito();
}
