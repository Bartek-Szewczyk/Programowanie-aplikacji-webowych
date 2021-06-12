const express = require('express');

const app = express();
app.use(express.json());


require('./routes/product.routes')(app);
require('./routes/category.routes')(app);


app.listen(8080, () => console.log('Server started'));