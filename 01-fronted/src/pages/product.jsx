import './app.css';
import Card from '../components/card';
import { productsdata } from '../data/data';


const ProductPage = ()=>{
    return(
        <>
            <h1 className="title">Explore Our Products</h1>
            <div className="product-countainer">
                <card products={productsdata} />
            </div>
        </>
    )
}
export default ProductPage