import Products from "@/app/ui/products";
import LoadMore from "@/app/ui/load";
import { CATEGORY } from "@/app/configuration/wwurm";
import { findByCatgory } from "@/app/actions";
import { IProduct } from "@/app/persistence/cart";

export default async function CategoryPage({ params, }: {params: Promise<{ category: string }>}) {
    const { category } = await params;
    const products = findByCatgory(category) as Array<IProduct>;

    return (
        <>
            <div className="category-header">
                <section className="section">
                    <h1 className="category-name">{CATEGORY[category]}</h1>
                </section>
            </div>
            <Products products={products}/>
            <LoadMore />
        </>
    );
}
