import React from "react"
import { NavItemProps } from "./NavItem";

export type NavbarProps = {
    children?:
    | React.ReactElement<NavItemProps>
    | React.ReactElement<NavItemProps>[];
}

export function Navbar({children}: NavbarProps) {
    return (
        <div>
            <div className="bg-background-light p-4 md:p-10 text-dark flex flex-col md:flex-row justify-between dark:bg-background-dark dark:text-white">
                <div className="mx-5 mb-4 md:mb-0 font-bold text-2xl hover:opacity-50">Aristotle</div>
                <div>
                    {children}
                </div>
            </div>
            <div className="border-t border-gray-300"></div>
        </div>
    );
}

