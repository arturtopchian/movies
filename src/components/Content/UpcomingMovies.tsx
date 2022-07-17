import useMovie, {MovieTypes} from "../../hooks/useMovie";
import UpcomingCard from "./UpcomingCard";
import {v4 as uid} from "uuid";
import Loader from "../Loader/Loader";
import section from "../../assets/section.jpg";

const UpcomingMovies = () => {
    const [data, loading, error] = useMovie(MovieTypes.MOVIE_UPCOMING);

    return (
        <section className="section section--bg" style={{backgroundImage: `url(${section})`,backgroundPosition: "center"}} >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section__title">Expected premiere</h2>
                    </div>
                    {
                        loading
                            ?
                            <Loader align={"center"}/>
                            :
                            data.map(({poster, title, genres, rating}) =>
                                <UpcomingCard
                                    poster={poster}
                                    title={title}
                                    genres={genres}
                                    rating={rating}
                                    key={uid()}
                                />
                            )
                    }
                    <div className="col-12">
                        <a href="#" className="section__btn">Show more</a>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default UpcomingMovies;