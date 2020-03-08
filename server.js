const express = require('express');
const app = express();

const pizzasRoutes = require('./routes/pizzariaRoutes');
app.use('/pizzas', pizzasRoutes);

app.listen(3000);