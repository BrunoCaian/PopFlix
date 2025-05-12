import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchGenres, fetchMoviesByGenre } from "../../services/movieService"
import { Swiper} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GenreContainer, MovieCard, Slide, StyledSwiperButton, SwiperWrapper } from "./styles";
import LoadingComponent from "../../components/LoadingComponent";



export default function Genres({ apiKey, loading, setLoading }) {

    const [genres, setGenres] = useState([])
    const [moviesByGenre, setMoviesByGenre] = useState({})
    const [pages, setPages] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        const loadGenres = async () => {
            try {
                const genresData = await fetchGenres(apiKey)
                console.log('Generos:', genresData)
                setGenres(genresData)

            } catch (error) {
                console.error(error)
            }
        }

        loadGenres()
    }, [apiKey])

    useEffect(() => {
        const loadInitialMovies = async () => {
            if (genres.length === 0) return;
            setLoading(true);

            const genreMovies = {};

            for (let genre of genres) {
                const movies = await fetchMoviesByGenre(apiKey, genre.id, 1);
                genreMovies[genre.id] = movies;
            }

            setMoviesByGenre(genreMovies);
            setLoading(false);
        };

        loadInitialMovies();
    }, [genres, apiKey, setLoading]);

    const loadMoreMoviesForGenre = async (genreId) => {
        const nextPage = (pages[genreId] || 1) + 1;
        const newMovies = await fetchMoviesByGenre(apiKey, genreId, nextPage);

        setMoviesByGenre((prevMovies) => ({
            ...prevMovies,
            [genreId]: [...(prevMovies[genreId] || []), ...newMovies],
        }));

        setPages((prevPages) => ({
            ...prevPages,
            [genreId]: nextPage,
        }));

    };

    if(loading) {
        return (
            <LoadingComponent/>
        )
    }

    return (
        <>
            {Object.keys(moviesByGenre).map((genreId) => {
                const genre = genres.find((genre) => genre.id === parseInt(genreId))
                if (!genre) return null
                return (
                    <GenreContainer key={genreId}>
                        <h2>{genre.name}</h2>

                        <SwiperWrapper>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                slidesPerView={2}
                                breakpoints={{
                                    800: { slidesPerView: 3},
                                    1200:{ slidesPerView: 4},
                                    
                                }}
                                slidesPerGroupAuto={true}
                                spaceBetween={0}
                                navigation={{
                                    nextEl: `.genre-next-${genreId}`,
                                    prevEl: `.genre-prev-${genreId}`,
                                }}
                                loop={false}
                                onReachEnd={() => loadMoreMoviesForGenre(genreId)}
                            >
                                {moviesByGenre[genreId].map((movie) => (
                                    <Slide key={movie.id}>
                                        <MovieCard>
                                            <img onClick={() => navigate(`/filme/${movie.id}`)}
                                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                alt={movie.title}
                                            />
                                        </MovieCard>
                                    </Slide>
                                ))}
                            </Swiper>

                            <StyledSwiperButton className={`swiper-button-prev genre-prev-${genreId}`} type="button" />

                            <StyledSwiperButton className={`swiper-button-next genre-next-${genreId}`} type="button" />

                        </SwiperWrapper>
                    </GenreContainer>
                )
            })}
        </>
    )
}