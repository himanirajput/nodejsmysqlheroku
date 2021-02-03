const ProductRepository = require('../repository/productRepository')
const repository = new ProductRepository(); 
const ProductApi=(app)=>{
    app.get('/products',(req,res)=>{
repository.findAllProducts().then(products=>res.json(products));
    })

    
    
    app.post('/products',(req,res)=>{
        const {productId,productName,price,description}=req.body
        repository.saveProduct({productId,productName,price,description})
        .then(product=>res.json(product)) 
      })

    app.put('/products/:productId',(req,res)=>{
        const {price}=req.body
        repository.updateProduct({productId:req.params['productId'],price:price})
        .then(product=>res.json(product)) 
      })  

      app.delete('/products/:productId',(req,res)=>{
        
        repository.deleteProduct(req.params['productId'])
        .then(value=>res.json(value)) 
      })    
}
module.exports=ProductApi