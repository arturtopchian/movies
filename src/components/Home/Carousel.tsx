import "./Carousel.css";
import Loader from "../Loader/Loader";
import CarouselItem from "./CarouselItem";
import useEmblaCarousel from "embla-carousel-react";
import {v4 as uid} from "uuid";
import useMovie, {MovieTypes} from "../../hooks/useMovie";
import {useCallback} from "react";


const Carousel = () => {
    const [data, loading, error] = useMovie(MovieTypes.MOVIE_POPULAR);
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: false, align: "start"}, [])
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    return (
        <>
            <div className="col-12">
                <h1 className="home__title"><b>NEW ITEMS</b> OF THIS SEASON</h1>
                <button className="home__nav home__nav--prev" type="button" onClick={scrollPrev}>
                    <i className="icon ion-ios-arrow-round-back"></i>
                </button>
                <button className="home__nav home__nav--next" type="button" onClick={scrollNext}>
                    <i className="icon ion-ios-arrow-round-forward"></i>
                </button>
            </div>
            <div className="col-12 embla" ref={data.length ? emblaRef : null}>
                {loading ? <Loader size={250} align={"center"}/> : null}
                <div className="home__carousel embla__container">
                    {
                        data.map(({poster, title, genres, rating}) =>
                            <CarouselItem
                                poster={poster}
                                title={title}
                                genres={genres}
                                rating={rating}
                                key={uid()}
                            />
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default Carousel;