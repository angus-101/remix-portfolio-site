import WebsiteLogo from "~/images/WebsiteLogo.png"

interface HeaderLink {
    linkText: string
    url: string
}

interface HeaderProps {
    headerLinks: HeaderLink[]
}

export const Header = ({ headerLinks }: HeaderProps) => (
    <div className='header'>
        <a href='/'>
            <img src={WebsiteLogo} className='header--img' />
        </a>
        <div className='header--link-container'>
            {headerLinks.map((headerLink) => (
                <a
                    href={headerLink.url}
                    key={`header-link-${headerLinks.indexOf(headerLink)}`}
                    className='header--link'
                >
                    {headerLink.linkText}
                </a>
            ))}
        </div>
    </div>
)