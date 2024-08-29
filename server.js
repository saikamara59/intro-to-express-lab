// import express
const express = require('express')
const collectibles = require('./collectibles')
// initailize the app
const app = express()
const shoes = require('./shoes')
//  define a home route 
app.get('/', (req,res) => res.send ('Express Lab Home'))

app.get('/greeting/:username',(req,res)=> {
   res.send(`Hello there, ${username}!`);
 });


app.get('/roll/:num', (req,res) => {
const randomNum = Math.floor(Math.random() * 7) + 1
res.send(`You rolled a number`)
console.log('this is a test')
}) 

// Excercise 3
app.get('/collectibles/:index', (req, res) => {
  const item = collectibles[req.params.index]; // Convert the index parameter to an integer
  if (item) {
    res.send(`So, you want the ${item.name}? For ${item.price.toFixed(2)}, it can be yours!`);
} else {
    res.send("This item is not yet in stock. Check back soon!");
}
});

app.get('/shoes',(req,res)=>{
 let filteredShoes = shoes;


const min_price = req.query.min_price;
const max_price = req.query.max_price;
const type = req.query.type;

      if (min_price) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(min_price));
      }
      if (max_price) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(max_price));
      }

      if(type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
      }

      res.json(filteredShoes);
    })
















  // start the "listener" method
app.listen(3000, ()=> console.log('Server is running'))




