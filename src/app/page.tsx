import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav className="flex flex-col mt-4">
                <Link href="/blog" className="underline">Blog</Link>
                <Link href="/products" className="underline">Products</Link>
            </nav>
        </div>
    );
}
