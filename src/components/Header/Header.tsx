import Logo from "./Logo";
import headerItemsData from "../../api/headerApi";
import HeaderItem from "./HeaderItem";
import SearchPanel from "./SearchPanel";
import {v4 as uid} from 'uuid';
import SearchForm from "./SearchForm";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__content">
                                <Logo href={'#'}/>
                                <ul className="header__nav">
                                    {
                                        headerItemsData.map(({title}) => <HeaderItem title={title} key={uid()}/>)
                                    }
                                </ul>
                                <SearchPanel/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SearchForm/>
        </header>
    );
}
export default Header;