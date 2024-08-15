import {ReactNode} from 'react';

const Card = ({children}: {children: ReactNode}) => {
    return (
        <div className="p-24 m-2.5 shadow-md border flex justify-center items-center">
            {children}
        </div>
    );
};

export default Card;
