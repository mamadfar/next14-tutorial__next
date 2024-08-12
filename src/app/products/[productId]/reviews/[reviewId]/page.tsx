import {notFound} from "next/navigation";


const ReviewDetail = ({params}: {
    params: {
        productId: string;
        reviewId: string;
    };
}) => {
    const {productId, reviewId} = params;
    if (parseInt(reviewId) > 1000) notFound();
    return (
        <div>
            <h1>Review {reviewId} for product {productId}</h1>
        </div>
    );
};

export default ReviewDetail;
