

const ProductRepository=require('./repository/productRepository')
const productRepository=new ProductRepository();
const main=async()=>
{   // insert product
   /*let savedProduct=await productRepository.saveProduct({
          productId:3,
          productName:'Ipad12',
          price:44562.5,
          description:'IpadPro'
     })
        console.log('Saved Product -->',savedProduct);
        */




        // Update products
   /*
   let updatedProduct=await productRepository.updateProduct({
    productId:3,
    productName:'Ipad12',
    price:34500.5,
    description:'IpadPro'
})
  console.log('Saved Product -->',updatedProduct);
      */




      //Delete products
 /* let deletedProduct=await productRepository.deleteProduct(3)
  console.log('Deleted Product -->',deletedProduct);*/




  //Fetch all
/*const products=await productRepository.findAllProducts()
console.log('Products List -->',products);

*/


const products1=await productRepository.findAllProductsByName('Ipad')
console.log('Products List -->',products1);
}
main();
