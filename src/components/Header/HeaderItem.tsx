type IHeaderItem = {
    href?: string,
    title: string,
}

const HeaderItem = ({href = "#", title}: IHeaderItem) => {
    return (
        <li className="header__nav-item">
            <a
                className="dropdown-toggle header__nav-link"
                href={href}
            >
                {title}
            </a>
        </li>
    );
};
export default HeaderItem;