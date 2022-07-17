type CardCoverProps = {
    src: string,
    alt?: string,
    href?: string,
}

const CardCover = ({src, alt = "", href = "#"}: CardCoverProps) => {
    return (
        <div className="card__cover">
            <img src={src} alt={alt}/>
            <a href={href} className="card__play">
                <i className="icon ion-ios-play"></i>
            </a>
        </div>
    );
}
export default CardCover;