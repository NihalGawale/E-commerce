const express = require('express');
const app = express();
app.use(express.json());
const productRoutes = require('./routes/productRoutes')
const errorMiddleware = require('./middleware/error')


//Routes for APIs
app.use('/api/v1/products',productRoutes)


//Middleware for errors
app.use(errorMiddleware)

module.exports = app;
