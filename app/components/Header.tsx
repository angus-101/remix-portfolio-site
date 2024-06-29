import logoImage from "~/images/logoImage.png"

interface HeaderLink {
    linkText: string
    url: string
}

interface HeaderProps {
    headerLinks: HeaderLink[]
}

export const Header = ({ headerLinks }: HeaderProps) => (
    <div className='header'>
        <img src={logoImage} className='header--img' />
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