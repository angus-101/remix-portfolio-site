import logoImage from "~/images/logoImage.png"

interface HeaderProps {
    className?: string
    imgClassName?: string
}

export const Header = ({ className, imgClassName }: HeaderProps) => (
    <div className={className}>
        <img src={logoImage} className={imgClassName}/>
        <div>
            welcome to my site hello
        </div>
    </div>
)