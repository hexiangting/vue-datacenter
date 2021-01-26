//node后端服务器
const products = require('./apis/products');
const express = require('express');
const app = express();

//后端api路由
app.use('/apis/products',products);

//监听端口
app.listen(3000);

console.log('success listen at port:3000......');
