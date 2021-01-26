// import request from '@/utils/request'
//
// export function getDetailProductsInfo(productsId) {
//   return request({
//     url: '/vue-datacenter/products',
//     method: 'get',
//     params: { productsId }
//   })
// }

//userApi.js
const models = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlMap')

// 连接数据库
const conn = mysql.createConnection(models.mysql)

conn.connect()
const jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

router.get('/searchProduct', (req, res) => {
  const sql = $sql.product.search
  const params = req.query
  console.log(params)
  conn.query(sql, [params.productsId], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})
