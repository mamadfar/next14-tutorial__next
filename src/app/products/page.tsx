import Link from "next/link";

const Products = () => {

    const productId = 100;

    return (
        <div>
            <nav className="flex flex-col mt-4">
                <Link href="/" className="underline">Home</Link>
            </nav>
            <h1>Product List</h1>
            <h2>
                <Link href="/products/1" className="underline">Product 1</Link>
            </h2>
            <h2>
                <Link href="/products/2" className="underline">Product 2</Link>
            </h2>
            <h2>
                <Link href="/products/3" replace className="underline">Product 3</Link>
            </h2>
            <h2>
                <Link href={`/products/${productId}`} className="underline">Product {productId}</Link>
            </h2>
        </div>
    );
};

export default Products;
