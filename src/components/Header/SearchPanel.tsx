import SignIn from "./SignIn";
import {useDispatch} from "react-redux";
import {toggleSearch} from "./searchSlice";

type ISearchPanel = {
    setShowSearch: (value: boolean) => void;
}

const SearchPanel = ({setShowSearch}: ISearchPanel) => {
    const dispatch = useDispatch();
    return (
        <div className="header__auth">
            <button
                className="header__search-btn"
                type="button"
                onClick={() => dispatch(toggleSearch())}
            >
                <i className="icon ion-ios-search"></i>
            </button>
            <SignIn/>
        </div>
    );
}
export default SearchPanel;