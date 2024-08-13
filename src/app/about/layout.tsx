import {FC, ReactNode} from 'react';

const AboutLayout: FC<{children: ReactNode}> = ({children}) => {
    return (
        <section>
            <header>
                <h1>About Us - Layout</h1>
            </header>
            {children}
            <footer>Footer</footer>
        </section>
    );
};

export default AboutLayout;
