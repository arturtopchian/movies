import "./Carousel.css";
import {v4 as uid} from 'uuid';

type ICarouselItem = {
    poster: string,
    title: string,
    genres: string[],
    rating: string,
}

const CarouselItem = ({poster, title, genres, rating}: ICarouselItem) => {
    return (
        <div className="item embla__slide">
            <div className="card card--big">
                <div className="card__cover">
                    <img src={poster} alt={title} className="embleImg"/>
                    <a href="#" className="card__play">
                        <i className="icon ion-ios-play"></i>
                    </a>
                </div>
                <div className="card__content">
                    <h3 className="card__title"><a href="#">{title}</a></h3>
                    <span className="card__category">
                        {
                            genres.map(genre => <a href="#" key={uid()}>{genre}</a>)
                        }
                    </span>
                    <span className="card__rate"><i className="icon ion-ios-star"></i>{rating}</span>
                </div>
            </div>
        </div>
    );
}
export default CarouselItem;