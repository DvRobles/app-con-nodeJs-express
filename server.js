const express = require('express');
const inventario = require('./inventario');
const Producto = require('./productos');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/productos', (req, res) => {
  res.json(inventario.listar());
});

app.get('/productos/:id', (req, res) => {
  const id = req.params.id;
  const producto = inventario.buscar(id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).send(`Producto con id ${id} no encontrado`);
  }
});

app.post('/productos', (req, res) => {
  const { id, nombre, cantidad, costo } = req.body;
  const nuevoProducto = new Producto(id, nombre, cantidad, costo);
  inventario.agregar(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

app.post();

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
