import { Link } from "@remix-run/react"
import logo from "~/images/logo.png"
import { MobileHeaderLinks } from "./MobileHeaderLinks"

interface HeaderLink {
    linkText: string
    url: string
    selected: boolean
}

export interface HeaderProps {
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
        {/* <HeaderLinks headerLinks={headerLinks} /> */}
        <MobileHeaderLinks headerLinks={headerLinks} />
    </div>
)