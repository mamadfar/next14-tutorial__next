import React from 'react';
import Card from "@/components/Card";
import Link from "next/link";

const Notifications = () => {
    return (
        <Card>
            <div>
                <h2>Notifications</h2>
                <Link href="/complex-dashboard/archived" className="border">Archived</Link>
            </div>
        </Card>
    );
};

export default Notifications;
