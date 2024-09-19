import './Product.css';
const Product=({title=140,price=1})=>{
  return(
    <>
   <div className="product">
    <h3>{title}</h3>
    <strong>{price}</strong>
   </div>
    </>
  );
}
export default Product;