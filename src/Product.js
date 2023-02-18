function Product({ price, name, image, category }) {
    return (
      <div className="outer-container">
        <div className='container'>
        <div className="prod-cat">Category: {category}</div>
        <div className="prod-price">Price: {price}</div>
        </div>

        <div className="inner-container">
          <img className="card-img-top" src={image} alt="logo" />
          <div className="lower-container">
            <h5 className="card-title">{name}</h5>
          </div>
        </div>
      </div>
    );
  }
  export default Product;

//use flexbox to display in a column








// <div className="card" style={{width: '18rem'}}>
//   <img className="card-img-top" src={image} alt="logo" />
//   <div className="card-body">
//     <h5 className="card-title">{name}</h5>
//     <p className="card-text">Category: {category}</p>
//     <p className="card-text">{price}</p>
//   </div>
// </div>  */}




  // easy way below they do same structured or destruct
    // const title = props.title;
    // const handle = props.handle;
  
    // desctructured below
    // const { title, handle } = props;