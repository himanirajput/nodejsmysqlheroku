//const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');
/*const dbConnection = require('../connections/dbConnection')
const queries = require('../queries/dbqueries')
module.exports=class ProductRepository{
   async saveProduct(product){
       let con= await dbConnection();
       try{
           await con.query('START TRANSACTION');
           let savedProduct=await con.query(queries.INSERT_PRODUCTS,
            [product.prductId,product.productName,product.price,product.description])
            await con.query('COMMIT')
            product.productId=savedProduct.productId
            return product;
       } 
       catch(ex){
           await con.query('ROLLBACK')
           throw ex;
       }finally{
       await con.release();
       await con.destroy()
       }
   }
}*/
const dbConnection=require('../connections/dbConnection')
const queries=require('../queries/dbqueries')
module.exports=class productRepository{
    async saveProduct(product){
        let con=await dbConnection();
        try{
              await con.query('START TRANSACTION');
              let saveProduct=await con.query(queries.INSERT_PRODUCTS,
                [product.productId,product.productName,product.price,product.description])
              await con.query('COMMIT')
              product.productId=saveProduct.productId
              return product;
        }catch(ex)
        {
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }
    }

    async updateProduct(product){
        let con=await dbConnection();
        try{
              await con.query('START TRANSACTION');
              await con.query(queries.UPDATE_PRODUCTS,
                [product.price,product.productId])
              await con.query('COMMIT')
             
              return true;
        }catch(ex)
        {
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }
    }
    async deleteProduct(productId){
        let con=await dbConnection();
        try{
              await con.query('START TRANSACTION');
              await con.query(queries.
                DELETE_PRODUCTS,[productId])
              await con.query('COMMIT')
              //product.productid=saveProduct.productid
              return true;
        }catch(ex)
        {
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }
    }
    async findAllProducts(){
        
        let con=await dbConnection();
        try{
              await con.query('START TRANSACTION');
             const products= await con.query(queries.
                FETCH_PRODUCTS)
              await con.query('COMMIT')
              //product.productid=saveProduct.productid
             // return true;
             return JSON.parse(JSON.stringify(products));
        }catch(ex)
        {
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }
    }
    /*async findAllProducts(){
        
        let con=await dbConnection();
        try{
              await con.query('START TRANSACTION');
             const products= await con.query(queries.
                FETCH_PRODUCTS)
              await con.query('COMMIT')
              //product.productid=saveProduct.productid
             // return true;
             return JSON.parse(JSON.stringify(products));
        }catch(ex)
        {
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }
    }*/
    async findAllProductsByName(productName){
        
        let con=await dbConnection();
        try{
              await con.query('START TRANSACTION');
             const products= await con.query(queries.SEARCH_BY_NAME,[productName])
              await con.query('COMMIT')
              //product.productid=saveProduct.productid
             // return true;
             return JSON.parse(JSON.stringify(products));
        }catch(ex)
        {
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }
    }
}