"use client";

import {notFound} from "next/navigation";

const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count);
}

const ReviewDetail = ({params}: {
    params: {
        productId: string;
        reviewId: string;
    };
}) => {
    const {productId, reviewId} = params;

    const random = getRandomInt(2)

    if (random === 1) {
        throw new Error('Error loading review');
    }

    if (parseInt(reviewId) > 1000) notFound();
    return (
        <div>
            <h1>Review {reviewId} for product {productId}</h1>
        </div>
    );
};

export default ReviewDetail;
