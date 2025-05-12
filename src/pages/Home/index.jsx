import { useEffect, useState } from "react"
import MovieCard from "../../components/MovieCard"
import { fetchMoviesPopular } from "../../services/movieService"
import { Container, LoadMore, MoviesContainer } from "./styles"
import { IoMdFlame } from "react-icons/io";

export default function Home({ apiKey, isSearching, loading, setLoading }) {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        const loadMovies = async () => {
            setLoading(true)
            try {
                const data = await fetchMoviesPopular(apiKey, page);
                if (data.results.length > 0) {
                    setMovies(prev => {
                        const newMovies = data.results.filter(movie => !prev.some(prevMovie => prevMovie.id === movie.id));
                        return [...prev, ...newMovies];
                    });
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
                setLoadingMore(false);
            }
        };
        loadMovies();
    }, [apiKey, page]);

    const handleLoadMore = () => {
        if(loading || loadingMore) return
        setLoadingMore(true);
        setPage(prev => prev + 1);
    };

    if(loading) {
        return (
            <div style={{ minHeight: '100vh', backgroundColor: 'transparent' }}></div>
        )
    }

    return (
        <Container>
            {!isSearching && (
                <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', color: '#fff', paddingBlock: '3rem' }}>
                    <IoMdFlame color="orange"/>
                    Filmes em alta
                </h1>
            )}

            {isSearching && (
                <h1 style={{ textAlign: 'center', color: '#fff', paddingBlock: '3rem' }}>
                    {movies.length > 0 ? 'Filmes encontrados' : 'Nenhum filme encontrado'}
                </h1>
            )}

            {movies.length > 0 && (
                <MoviesContainer>
                    <MovieCard movies={movies} showLink />
                </MoviesContainer>
            )}

            {!isSearching && !loading && (
                <LoadMore onClick={handleLoadMore}>
                    {loadingMore ? "Carregando..." : "Carregar mais"}
                </LoadMore>
            )}
        </Container>
    );
}