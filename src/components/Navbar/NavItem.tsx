import Link from "next/link";
import React from "react";

export type NavItemProps = {
    url: string,
    text: string,

}

export function NavItem({url, text}: NavItemProps)
{
    return (
        <Link className="hover:opacity-50" href={url ?? "#"}>
            {text}
        </Link>
    );
}