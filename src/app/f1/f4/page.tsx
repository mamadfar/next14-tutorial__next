import React from 'react';
import Link from "next/link";

const F4 = () => {
    return (
        <div>
            <h1>F4</h1>
            <div className="flex flex-col">
                <Link href="/f1/f3" className="border">F3</Link>
                <Link href="/about" className="border">About</Link>
            </div>
        </div>
    );
};

export default F4;
