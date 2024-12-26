"use client";
import React from 'react';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'offerings',
        path: '/offerings',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
];

function MobileNav() {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-20 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold cursor-pointer">
                            Amrendra<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/* Navigation */}
                <nav className="flex flex-col gap-8 justify-center items-center">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${pathname === link.path
                                ? 'text-accent border-b-2 border-accent'
                                : ''
                                } capitalize font-medium hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;