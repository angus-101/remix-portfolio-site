import { Link } from "@remix-run/react";
import clsx from "clsx";
import { HeaderProps } from "./Header";
import { useEffect } from "react";

export const MobileHeaderLinks = ({ headerLinks }: HeaderProps) => {
    const toggleMenu = () => {
        const links = document.getElementsByClassName('header--mobile-link')
        for (const link of links) {
            link.classList.toggle('header--mobile-link-container-show');
        }
    }

    // Close the dropdown menu if the user clicks outside of it
    useEffect(() => {
        window.onclick = event => {
            if (!document.getElementById('menu-button')!.contains(event.target as Node)) {
                const links = document.getElementsByClassName('header--mobile-link')
                for (const link of links) {
                    if (link.classList.contains('header--mobile-link-container-show')) {
                        link.classList.remove('header--mobile-link-container-show');
                    }
                }
            }
        }
    })

    return (
        <>
            <button
                id='menu-button'
                className='header--mobile-menu-button'
                onClick={toggleMenu}
            >
                menu
            </button>
            <nav
                id='navigation'
                className={clsx('header--mobile-link-container')}
            >
                {headerLinks.map((headerLink) => (
                    <Link
                        id={`${headerLink.linkText}-link`}
                        to={headerLink.url}
                        key={`header-link-${headerLinks.indexOf(headerLink)}`}
                        onClick={toggleMenu}
                        className={clsx('header--mobile-link', headerLink.selected && 'header--mobile-link-selected')}
                    >
                        {headerLink.linkText}
                    </Link>
                ))}
            </nav>
        </>
    )
}