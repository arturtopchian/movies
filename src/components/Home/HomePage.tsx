import useMovie, {MovieTypes, Search} from "../../hooks/useMovie";
import CarouselItem from "./CarouselItem";
const HomePage = () => {
    const [data,loading,error] = useMovie({
        type: MovieTypes.TV_POPULAR, searchParams: Search.POPULAR,
    });

    return (
        <section className="home">
            <div className="owl-carousel home__bg">
                <div className="item home__cover" data-bg="img/home/home__bg.jpg"></div>
                <div className="item home__cover" data-bg="img/home/home__bg2.jpg"></div>
                <div className="item home__cover" data-bg="img/home/home__bg3.jpg"></div>
                <div className="item home__cover" data-bg="img/home/home__bg4.jpg"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <h1 className="home__title"><b>NEW ITEMS</b> OF THIS SEASON</h1>

                        <button className="home__nav home__nav--prev" type="button">
                            <i className="icon ion-ios-arrow-round-back"></i>
                        </button>
                        <button className="home__nav home__nav--next" type="button">
                            <i className="icon ion-ios-arrow-round-forward"></i>
                        </button>
                    </div>

                    <div className="col-12">
                        <div className="owl-carousel home__carousel">
                            {/*<CarouselItem/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
);
}
export default HomePage;