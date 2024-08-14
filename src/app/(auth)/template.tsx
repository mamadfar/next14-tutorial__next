"use client";

import {FC, ReactNode, useState} from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

const navLinks = [
    {name: 'Register', href: '/register'},
    {name: 'Login', href: '/login'},
    {name: 'Forgot Password', href: '/forgot-password'},
]

const AuthTemplate: FC<{ children: ReactNode }> = ({children}) => {
    const [input, setInput] = useState('');

    const pathname = usePathname();

    return (
        <section>
            <header>
                <div>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} className="text-black"/>
                </div>
                <nav className="flex gap-4 mb-4">
                    {navLinks.map((link) => {
                        const isActive = pathname.startsWith(link.href);
                        return (
                            <Link key={link.href} href={link.href}
                                  className={isActive ? 'font-bold underline' : 'text-blue-400'}>{link.name}</Link>
                        )
                    })}
                </nav>
            </header>
            <main>{children}</main>
            <footer>Footer</footer>
        </section>
    );
};

export default AuthTemplate;
