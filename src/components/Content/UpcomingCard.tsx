import {MovieCardProps} from "./MovieCard";
import CardCover from "../Card/CardCover";
import CardContent from "../Card/CardContent";

const UpcomingCard = ({poster, title, genres, rating}: MovieCardProps) => {
    return (
        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="card">
                <CardCover src={poster} alt={title}/>
                <CardContent
                    title={title}
                    genres={genres}
                    rating={rating}
                    showList={false}
                />
            </div>
        </div>
    );
}
export default UpcomingCard;