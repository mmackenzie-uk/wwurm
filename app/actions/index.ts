import products from "../data/products.json";
import { IProduct } from "../persistence/cart";

export const find = function (myslug: string) {
    let match = products.filter(({ slug }) => 
        (myslug.toLowerCase() === slug.toLowerCase()));

    if( match && match[0] ) return match[0];
}

export const findSimilar = function (myCategory: string, myslug: string) {
    let match = products.filter(({ categories }) => 
        (categories.includes(myCategory))) ;

    if( match && match[0] && (match[0].slug != myslug) ) return match;
}


export const getProductPageData = function(slug : string) {
    const product = find(slug);
    const category = product?.categories[0] || "";
    const arr = findSimilar(category, slug) as Array<IProduct>;
    if (arr) {
        let similar: Array<IProduct> = [];
        let limit = (arr.length < 4)? arr.length : 4;
        for (let i = 0; i < limit; i++) {
            similar.push(arr[i])
        }
        return { product, similar }
    } 
    return { product }
}


export const findByCatgory = function (myCategory: string) {
    let match = products.filter(({ categories }) => 
        (categories.includes(myCategory))) ;

    if( match && match[0]) return match;
}

export const findAll = function() {
    return products;
}