import useMovie, {MovieTypes} from "../../hooks/useMovie";

const NewReleases = () => {
    const [data,loading,error] = useMovie(MovieTypes.NEW_RELEASE)
    console.log(data);
    return (
        <h2></h2>
    )
}
export default NewReleases;