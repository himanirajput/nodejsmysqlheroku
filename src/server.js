const express = require('express');
const productApi=require('./api/productAPI')

const app=express();
app.use(express.json());
productApi(app);
app.listen(3001,()=>console.log('server started'))