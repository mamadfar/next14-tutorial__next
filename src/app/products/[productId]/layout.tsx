import React, {ReactNode} from 'react';

const ProductDetailsLayout = ({children}: {children: ReactNode}) => {
    return (
        <div>
            {children}
            <h2>Features products</h2>
        </div>
    );
};

export default ProductDetailsLayout;
