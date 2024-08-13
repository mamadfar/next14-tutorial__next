import {FC, ReactNode} from 'react';

const AuthLayout:FC<{children: ReactNode}> = ({children}) => {
    return (
        <section>
            <header>
                <h1>Header</h1>
            </header>
            <main>{children}</main>
            <footer>Footer</footer>
        </section>
    );
};

export default AuthLayout;
