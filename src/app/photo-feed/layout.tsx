import {ReactNode} from "react";

const Layout = (props: {
    modal: ReactNode;
    children: ReactNode;
}) => {
    return (
        <>
            {props.modal}
            {props.children}
        </>
    );
}

export default Layout;