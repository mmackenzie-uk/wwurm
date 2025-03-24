"use client"

import {  store } from "@/app/persistence/cart";
import { ITruncatedProduct, IProduct } from "../ts/type-definitions"

import { useState } from "react";
import { openCart } from "../ts/utility";

type IBtnBuy = {
    product?: IProduct
}

export default function CartAdd({ product } : IBtnBuy) {
    const [count, setCount ] = useState(1);

    let truncatedProduct : ITruncatedProduct;

    if (product) {
        truncatedProduct = {
            id: product.id,
            name: product.name,
            image: product.thumbnails? product.thumbnails[0] : "",
            price: product.price,
            slug: product.slug
        }
    }
    
    const addItem = () => {
        if (truncatedProduct) {
            store.add(truncatedProduct, count);
            openCart();
        }
    }

    const increment = () => {
        setCount(c => count + 1)
    }

    const decrement = () => {
        if (count > 1) {
            setCount(c => c - 1)
        }  
    }

    const handleChange = () => {/* to clear react error message */}

    return (
        <>
            <div className="product-quantity">
                <div className="down-arrow cm-font-media-play flip" onClick={decrement}></div>
                    <input type="number" className="input-qty" value={count} onChange={handleChange}/> 
                <div className="up-arrow cm-font-media-play" onClick={increment}></div>
            </div>
            <button className="product-buy-now" onClick={addItem}>Buy Now</button>
        </>
    );
}

