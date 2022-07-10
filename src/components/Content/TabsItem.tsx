import {tabsItemData} from "../../api/tabsApi";
import {v4 as uid} from "uuid";

const TabsItem = () => {
    return (
        <>
            {
                tabsItemData.map(({title}) =>
                    <li className="nav-item" key={uid()}>
                        <a className="nav-link"
                           data-toggle="tab"
                           href="#tab-2"
                           role="tab" aria-controls="tab-2"
                           aria-selected="true">
                            {title}
                        </a>
                    </li>
                )
            }
        </>
    )
}
export default TabsItem;