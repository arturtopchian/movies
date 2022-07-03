import logo from '../../assets/logo.svg';

type ILogo = {
    href: string,
    classes?: string,
}

const Logo = ({href, classes = 'header__logo'}: ILogo) => {
    return (
        <a href={href} className={classes}>
            <img src={logo} alt="logo"/>
        </a>
    );
}
export default Logo;