import Product from './Product';

const ProductList = ({productArray}) => {
  const render = productArray.map((product) => {
    return ( 
      <div key={product.name}>
        <Product price={product.price} category={product.category} image={product.image} name={product.name}/>
      </div>
    )
  })
  return (
    <div className='list-container'>
    {render}
    </div>
    );
}

export default ProductList;





//overflow wrap













//SUDO CODE GOALS!!!
//we want a grid tht returns 9 products 
//you need a template made with category, price, name, and fake image, hardcode this
//where am i pulling the data from worry about this later