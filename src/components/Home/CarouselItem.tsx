type ICarouselItem = {
    img: string,
    title: string,
    genres: string | string[],
    rating: number,
}

const CarouselItem = ({img}:ICarouselItem) => {
    return (
        <div className="item">
            <div className="card card--big">
                <div className="card__cover">
                    <img src="img/covers/cover.jpg" alt=""/>
                    <a href="#" className="card__play">
                        <i className="icon ion-ios-play"></i>
                    </a>
                </div>
                <div className="card__content">
                    <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                    <span className="card__category">
										<a href="#">Action</a>
										<a href="#">Triler</a>
									</span>
                    <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                </div>
            </div>
        </div>
    );
}
export default CarouselItem;