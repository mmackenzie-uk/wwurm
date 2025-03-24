import products from '../data/products.json';
import { IProduct } from '../persistence/cart';
import Card from './card';

type IProducts = {
    products: Array<IProduct>;
}

export default function Products({ products } : IProducts) {
    return (
        <section className="section">
            <div className="grid-products">
                {products.map((product, index) => 
                    <Card product={product} key={index} />)
                }
            </div>
        </section>
    );
  }