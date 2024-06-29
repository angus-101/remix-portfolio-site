import { Link } from "@remix-run/react"
import clsx from "clsx"
import logo from "~/images/logo.png"

interface HeaderLink {
    linkText: string
    url: string
    selected: boolean
}

interface HeaderProps {
    headerLinks: HeaderLink[]
}

export const Header = ({ headerLinks }: HeaderProps) => (
    <div className='header'>
        <Link to='/' className='header--img-container'>
            <img 
                src={logo} 
                className='header--img' 
                alt='The logo of the website'
            />
        </Link>
        <div className='header--link-container'>
            {headerLinks.map((headerLink) => (
                <Link
                    to={headerLink.url}
                    key={`header-link-${headerLinks.indexOf(headerLink)}`}
                    className={clsx('header--link', headerLink.selected && 'header--link-selected')}
                >
                    {headerLink.linkText}
                </Link>
            ))}
        </div>
    </div>
)