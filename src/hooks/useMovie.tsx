import {useEffect, useState} from "react";
import axios from "axios";

const APIKEY = '?api_key=ce04562bc8e19c985f2f40e7350654f8&page=1&';
const BASE = 'https://api.themoviedb.org/3/';
const LANGUAGE = "language=en-US";
const IMG = "https://image.tmdb.org/t/p/original";

const getQuery = (keys: string | string[] | undefined) => typeof keys === 'object' ? keys.join('&') : keys;

const togglePages = () => {

}

const getValidData = (data: any) => {
    data.results.map((item:any) => {
        return {
            id: item.id,
            backgroundImage: item.backdrop_path,
            genres: '',
        }
    });
}

export enum Search {
    NOW_PLAYING = "now_playing",
    POPULAR = "popular",
    TOP_RATED = "top_rated",
    UPCOMING = "upcoming",
    MULTI = "multi",
    IMAGES = "images",
    VIDEOS = "videos",
    SIMILAR = "similar",
    GENRE_TV = "tv",
    GENRE_MOVIE = 'movie',
}

export enum MovieTypes {
    SEARCH = 'search',
    MOVIE = 'movie',
    TV = 'tv',
    MOVIE_IMAGES = "movie_images",
    MOVIE_VIDEOS = "movie_videos",
    MOVIE_SIMILAR = "movie_similar",
    MOVIE_NOW_PLAYING = "movie_now_playing",
    MOVIE_POPULAR = "movie_popular",
    MOVIE_TOP_RATED = "movie_top_rated",
    MOVIE_UPCOMING = "movie_upcoming",
    TV_IMAGES = "tv_images",
    TV_VIDEOS = "tv_videos",
    TV_SIMILAR = "tv_similar",
    TV_NOW_PLAYING = "tv_now_playing",
    TV_POPULAR = "movie_popular",
    TV_TOP_RATED = "tv_top_rated",
    TV_UPCOMING = "tv_upcoming",
}

export type IMovieProps = {
    type: MovieTypes,
    keys?: string | string[];
    id?: number,
    searchParams?: Search
}


function getActualUrl({type, keys, id, searchParams}: IMovieProps) {
    switch (type) {
        case MovieTypes.MOVIE:
        case MovieTypes.TV:
            return `${BASE}${type}/${id}${APIKEY}${LANGUAGE}`;
        case MovieTypes.TV_IMAGES:
            return `${BASE}${MovieTypes.TV}/${id}/${searchParams}${APIKEY}include_image_language=en,null`;
        case MovieTypes.MOVIE_IMAGES:
            return `${BASE}${MovieTypes.MOVIE}/${id}/${searchParams}${APIKEY}include_image_language=en,null`;
        case MovieTypes.MOVIE_VIDEOS:
        case MovieTypes.MOVIE_SIMILAR:
            return `${BASE}${MovieTypes.MOVIE}/${id}/${searchParams}${APIKEY}${LANGUAGE}`;
        case MovieTypes.TV_SIMILAR:
        case MovieTypes.TV_VIDEOS:
            return `${BASE}${MovieTypes.TV}/${id}/${searchParams}${APIKEY}${LANGUAGE}`;
        case MovieTypes.MOVIE_NOW_PLAYING:
        case MovieTypes.MOVIE_POPULAR:
        case MovieTypes.MOVIE_TOP_RATED:
        case MovieTypes.MOVIE_UPCOMING:
            return `${BASE}${MovieTypes.MOVIE}/${searchParams}${APIKEY}${LANGUAGE}`;
        case MovieTypes.TV_NOW_PLAYING:
        case MovieTypes.TV_POPULAR:
        case MovieTypes.TV_TOP_RATED:
        case MovieTypes.TV_UPCOMING:
            return `${BASE}${MovieTypes.TV}/${searchParams}${APIKEY}${LANGUAGE}`;
        case MovieTypes.SEARCH:
            const query = getQuery(keys);
            return `${BASE}${type}/${Search.MULTI}${APIKEY}${LANGUAGE}&query=${query}`;
        default:
            return `${BASE}${type}${id}${APIKEY}`
    }
}

const useMovie = ({type, keys, id, searchParams}: IMovieProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [empty, setEmpty] = useState(false);
    const [data, setData] = useState<[]>([]);
    const [[movieGenres,tvGenres], setGenres] = useState<{}[]>([]);

    useEffect(() => {
        Promise.all([
            axios.get(`https://api.themoviedb.org/3/genre/movie/list${APIKEY}language=en-US`),
            axios.get(`https://api.themoviedb.org/3/genre/tv/list${APIKEY}language=en-US`)
        ])
            .then(res => res.map(results => results.data.genres))
            .then(results => setGenres(results))
            .catch(e => console.log(e.message));
    }, []);

    console.log(data)
    useEffect(() => {
        setLoading(true);
        const url = getActualUrl({type, keys, id, searchParams});
        console.log(url)

        try {
            fetch(url)
                .then(res => res.json())
                .then(result => {
                    getValidData(result);
                    setData(result);
                    setLoading(false);
                })
                .catch(e => {
                    setError(true);
                    setLoading(false);
                    throw new Error(e.message);
                });
        } catch (e) {
            if (e instanceof Error) console.log(e.message);
            setError(true);
            setLoading(false);
        }
    }, []);

    return [data, loading, error];
}
export default useMovie;