const express = require('express')
const cors = require("cors");
const app = express()
const port = 3000
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let products = [];
let currentld = 1;

app.get("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id ===id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado"});
    res.json(product);
});
app.get("/api/products", (req, res) => {
    res.json(products);
});
app.post("/api/products", (req, res) => {
    const {name,price} = req.body;
    const newProduct = {id: currentld++, name, price: parseFloat(price)};
    products.push(newProduct);
    res.json(newProduct);
});
app.put("/api/products/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const {name, price} = req.body;
    const product = products.find(p => p.id === id);
    if(!product) return res.status(404).json({ error: "Produto não encontrado"});
    if(typeof name !== "undefined") product.name = name;
    if(typeof price !== "undefined") product.price = parseFloat(price);
    res.json(product);
});
app.delete("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    products = products.filter(p => p.id !== id);
    res.json({ message: "Produto removido com sucesso"});
  res.send('Hello World!')
});
app.listen(port, () => {
    console.log(`Backend rodando em http://localhost:${port}`);
});



