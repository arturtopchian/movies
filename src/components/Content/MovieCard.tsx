import {v4 as uid} from "uuid";
import CardCover from "../Card/CardCover";
import CardContent from "../Card/CardContent";

export type MovieCardProps = {
    poster: string,
    title: string,
    genres: string[],
    description?: string,
    rating: string,
}
const MovieCard = ({poster, title, genres, description, rating}: MovieCardProps) => {
    return (
        <div className="col-6 col-sm-12 col-lg-6">
            <div className="card card--list">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <CardCover src={poster} alt={title}/>
                    </div>
                    <div className="col-12 col-sm-8">
                        <CardContent
                            title={title}
                            genres={genres}
                            rating={rating}
                            showList={true}
                        >
                            <div className="card__description">
                                <p>{description}</p>
                            </div>
                        </CardContent>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MovieCard;