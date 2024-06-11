import React, { useState } from "react";
import { NavItemProps } from "./NavItem";

export type NavbarProps = {
    children?:
    | React.ReactElement<NavItemProps>
    | React.ReactElement<NavItemProps>[];
}

export function Navbar({ children }: NavbarProps) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div>
            <div className="bg-background-light p-4 md:p-10 text-dark flex justify-between dark:bg-background-dark dark:text-white">
                <div className="mx-5 mb-4 md:mb-0 font-bold text-2xl hover:opacity-50">Aristotle</div>
                <div className="flex justify-end md:hidden">
                    <button onClick={toggleNavbar} className="text-dark dark:text-white">
                        ☰
                    </button>
                </div>
                <div className={`flex-col md:flex md:flex-row md:justify-end ${isCollapsed ? 'hidden' : 'flex'}`}>
                    {children}
                </div>
            </div>
            <div className="border-t border-gray-300"></div>
        </div>
    );
}
