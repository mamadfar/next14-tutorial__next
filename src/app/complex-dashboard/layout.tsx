import React, {ReactNode} from 'react';

type props = {
    children: ReactNode,
    notifications: ReactNode,
    revenue: ReactNode,
    users: ReactNode,
    login: ReactNode,
}

const DashboardLayout = ({children, notifications, revenue, users, login}: props) => {

    const isLoggedIn = false;

    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div className="flex">
                <div className="flex flex-col">
                    {users}
                    {revenue}
                </div>
                <div className="flex">{notifications}</div>
            </div>
        </div>
    ) : (
        login
    );
};

export default DashboardLayout;
