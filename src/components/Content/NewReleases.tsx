import useMovie, {MovieTypes} from "../../hooks/useMovie";
import Loader from "../Loader/Loader";
import MovieCard from "./MovieCard";
import {v4 as uid} from "uuid";

const NewReleases = () => {
    const [data, loading , error] = useMovie(MovieTypes.NEW_RELEASE);
    return (
        <>
            {
                loading
                    ?
                    <Loader align={"center"} size={250}/>
                    :
                    data.map(({poster,title,genres,description,rating}) =>
                        <MovieCard
                            poster={poster}
                            title={title}
                            genres={genres}
                            description={description}
                            rating={rating}
                            key={uid()}
                        />
                    )
            }
        </>
    )
}
export default NewReleases;