import React from "react"
import Link from "next/link"
import { Button } from "./ui/button"

function Header() {
    return (
        <header className="py-8 xl:py-12 text-white bg-pink-50/20">
            <div className="container mx-auto">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold cursor-pointer">
                        Mark <span className="text-accent">.</span>
                    </h1>
                </Link>
            </div>
        </header>
    )
}

export default Header