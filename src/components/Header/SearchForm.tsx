import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import classNames from "classnames";

const SearchForm = () => {
    const isShowSearch = useSelector((state: RootState) => state.searchSlice.showSearch);
    const isActiveFrom = classNames({
        "header__search": true,
        "header__search--active": isShowSearch,
    });

    return (
        <form action="src/components/Header/Header#" className={isActiveFrom}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__search-content ">
                            <input
                                type="text"
                                placeholder="Search for a movie, TV Series that you are looking for"
                            />
                            <button type="button">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default SearchForm;