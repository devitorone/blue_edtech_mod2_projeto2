const express = require("express");
const app = express();
const path=require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded());

const pokedex = [
  {
    number: '1',
    name: "Koffing",
    type: "poison",
    img: "img/koffing.png",
    description:"Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.",
    height:'0.6',
    weight: '1',
    category:'poison gas',
    abilities:'Leviate, Neutralizing gas'
  },
  {
    number: '2',
    name: "Ninetales",
    type: "fire",
    img: "img/ninetales.png",
    description:"It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.",
    height:'1.1',
    weight: '19.9',
    category:'fox',
    abilities:'flash fire'
  },
  {
    number: '3',
    name: "Mewtwo",
    type: "psychic",
    img: "img/mewtwo.png",
    description:"Its DNA is almost the same as Mew's. However, its size and disposition are vastly different.",
    height:'2',
    weight: '122',
    category:'genetic',
    abilities:'pressure'  
  },
];

app.get("/", (req, res) => {
  res.render("index", {pokedex});
});

app.post('/add', (req, res)=>{
    const pokemon=req.body;
    console.log(pokemon)
    pokedex.push(pokemon)
    res.redirect("/")
})

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
