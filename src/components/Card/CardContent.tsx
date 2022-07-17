import {v4 as uid} from "uuid";
import CardList from "./CardList";
import {Link} from "react-router-dom";

type CardContentProps = {
    title: string,
    genres: string[],
    rating: string,
    children?: JSX.Element,
    showList: boolean,
}
const CardContent = ({title, genres, rating, children, showList}: CardContentProps) => {
    return (
        <div className="card__content">
            <h3 className="card__title"><Link to="invoices">{title}</Link>
            </h3>
            <span className="card__category">
                {
                    genres.map(genre => <a href="#" key={uid()}>{genre}</a>)
                }
            </span>

            <div className="card__wrap">
                <span className="card__rate"><i className="icon ion-ios-star"></i>{rating}</span>
                {showList ? <CardList/> : null}
            </div>
            {children}
        </div>
    );
}
export default CardContent;