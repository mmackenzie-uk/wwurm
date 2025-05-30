import { CART_CLOSED_POSITION, CART_OPENED_POSITION } from "../configuration/wwurm";
import { IProduct, ITruncatedProduct } from "../persistence/cart";

export const openCart = () => {
    const sideNav = document.getElementById("cart-aside");
    if (sideNav) {
       sideNav.style.right = CART_OPENED_POSITION;
    }
}

export const closeCart = () => {
    const sideNav = document.getElementById("cart-aside");
    if (sideNav) {
       sideNav.style.right = CART_CLOSED_POSITION;
       window.scroll({top: 0, left: 0});
    }
}

export const truncate = (product: IProduct) => {
    const truncatedProduct : ITruncatedProduct = {
        id: product.id,
        name: product.name,
        image: product.thumbnails? product.thumbnails[0] : "",
        price: product.price,
        slug: product.slug
    }
    return truncatedProduct;
}
