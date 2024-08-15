import React from 'react';
import Link from "next/link";

const F1 = () => {
    return (
        <div>
            <h1>F1</h1>
            <div>
                <Link href="/f1/f2" className="border">F2</Link>
            </div>
        </div>
    );
};

export default F1;
