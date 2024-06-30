import { Link } from "@remix-run/react";
import clsx from "clsx";

interface HeaderLink {
    linkText: string
    url: string
    selected: boolean
}

interface HeaderProps {
    headerLinks: HeaderLink[]
}

export const HeaderLinks = ({ headerLinks }: HeaderProps) => (
    <nav className='header--link-container'>
        {headerLinks.map((headerLink) => (
            <Link
                to={headerLink.url}
                key={`header-link-${headerLinks.indexOf(headerLink)}`}
                className={clsx('header--link', headerLink.selected && 'header--link-selected')}
            >
                {headerLink.linkText}
            </Link>
        ))}
    </nav>
)