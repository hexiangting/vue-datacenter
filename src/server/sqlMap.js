//sqlMap.js
const sqlMap = {
  // 产品
  product: {
    add: 'insert into product(productTitle) values (?)',
    delete: 'delete from product where productTitle = ?',
    search: 'select * from product where productTitle = ?',
  },
  // book: {
  //   add: 'insert into book(name, author, stock) values (?, ?, ?)',
  //   search: 'select * from book where name = ?',
  //   borrowBook: 'update book set stock = ? , lendNum = ? where name = ?'//更新书籍表中的库存
  // }
}
module.exports = sqlMap;
