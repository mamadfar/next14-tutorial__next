import {Metadata} from "next";

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Product ${params.productId}`);
        }, 100)
    })
    return {
        title: `Product ${title}`,
    };
}

type Props = {
    params: {
        productId: string;
    }
}

const ProductDetails = ({params}: Props) => {
    return (
        <div>
            <h1>Details about product: {params.productId}</h1>
        </div>
    );
};

export default ProductDetails;
