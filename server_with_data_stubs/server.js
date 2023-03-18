const express = require('express');
const cors = require('cors');

// Stubs
const categories = require('./stubs/categories');
const cart = require('./stubs/cart');
const items = require('./stubs/items');

const app = express();
app.use(cors());

const PORT = 3004;

const getData = (data) => {
  return new Promise((resolve, reject) => {
    try {
      const duration = Math.random() * 1000;
      setTimeout(() => {
        resolve(data);
      }, duration);
    } catch(err) {
      reject(err);
    }
  });
};

const fetchCategories = async () => {
  const data = await getData(categories);
  return {
    categories: data,
  }
};

const fetchItems = async () => {
  const data = await getData(items);
  return {
    items: data,
  }
};

const fetchCart = async () => {
  const data = await getData(cart);
  return {
    cart: data,
  }
};

app.get('/categories', async (req, res) => {
  const data = await fetchCategories();
  res.send(data);
});

app.get('/items', async (req, res) => {
  const data = await fetchItems();
  res.send(data);
});

app.get('/cart', async (req, res) => {
  const data = await fetchCart();
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});