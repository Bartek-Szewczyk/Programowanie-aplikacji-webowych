const express = require('express');

const app = express();
app.use(express.json());

//app.get('/', (req, res) => res.send('Hello World!'));

require('./routes/product.routes')(app);


app.listen(8080, () => console.log('Server started'));