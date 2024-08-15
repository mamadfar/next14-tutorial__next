import React from 'react';
import Card from "@/components/Card";
import Link from "next/link";

const ArchivedNotifications = () => {
    return (
        <Card>
            <div>
                <h2>Archived Notifications</h2>
                <Link href="/complex-dashboard" className="border">Default</Link>
            </div>
        </Card>
    );
};

export default ArchivedNotifications;
