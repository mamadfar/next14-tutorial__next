import React, {ReactNode} from 'react';

const InnerLayout = ({children}: {children: ReactNode}) => {
    return (
        <div>
            <h2>Inner Layout</h2>
            {children}
        </div>
    );
};

export default InnerLayout;
