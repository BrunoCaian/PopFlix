import { useEffect, useState } from "react"
import { fetchTopRated } from "../../services/movieService"
import MovieCard from "../../components/MovieCard"
import { LoadMore, MoviesContainer } from "../Home/styles"
import { FaCrown } from "react-icons/fa";


export default function TopRated({ apiKey, loading, setLoading, isSearching, setIsSearching }) {
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [page, setPage] = useState(1)
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        const loadTopRated = async () => {
            setLoading(true)
            try {
                const data = await fetchTopRated(apiKey, page)
                if (data.results.length > 0) {
                    console.log(data)
                    setTopRatedMovies(prev => {
                        const newMovies = data.results.filter(movie => !prev.some(prevMovie => prevMovie.id === movie.id));
                        return [...prev, ...newMovies];
                    });
                }
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
                setLoadingMore(false)
            }
        }

        loadTopRated()
    }, [apiKey, page])

    const handleLoadMore = () => {
        if (loading || loadingMore) return
        setLoadingMore(true);
        setPage(prev => prev + 1);
    };

    if(loading) {
        return (
            <div style={{ minHeight: '100vh', backgroundColor: 'transparent' }}></div>
        )
    }

    return (
        <main style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            {!isSearching && (
                    <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', color: '#fff', paddingBlock: '3rem' }}>
                        <FaCrown style={{ color: 'gold' }} />
                        Melhores Avaliados
                    </h1>
            )}

            {topRatedMovies.length > 0 && (
                <MoviesContainer>
                    <MovieCard movies={topRatedMovies} $highlighted/>
                </MoviesContainer>
            )}

            {!isSearching && !loading && (
                <LoadMore onClick={handleLoadMore}>
                    {loadingMore ? "Carregando..." : "Carregar mais"}
                </LoadMore>
            )}
        </main>
    )
}