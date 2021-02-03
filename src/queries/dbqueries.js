module.exports={
    INSERT_PRODUCTS:`INSERT INTO PRODUCTS VALUES(?,?,?,?)`,
    FETCH_PRODUCTS:`SELECT * FROM products`,
    UPDATE_PRODUCTS:`UPDATE products SET price=? WHERE productId=?`,
    DELETE_PRODUCTS:`DELETE FROM products where productId=?`,
    SEARCH_BY_NAME:`SELECT * FROM products where productName=?`
}