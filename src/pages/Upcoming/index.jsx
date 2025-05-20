import { useEffect, useState } from "react";
import { fetchUpcoming } from "../../services/movieService";
import { LoadMore, MoviesContainer } from "../Home/styles";
import MovieCard from "../../components/MovieCard";
import { PiPopcornBold } from "react-icons/pi";

export default function Upcoming({ apiKey, loading, setLoading, isSearching}) {
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [page, setPage] = useState(1)
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        const loadUpcoming = async () => {
            setLoading(true)
            try {
                const data = await fetchUpcoming(apiKey, page)
                if (data.results.length > 0) {
                    console.log('Lançamentos:', data)
                    setUpcomingMovies(prev => {
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

        loadUpcoming()
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
        <main style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            {!isSearching && (
                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', color: '#fff', paddingBlock: '3rem' }}>
                    <PiPopcornBold color="yellow"/>
                    Lançamentos
                </h1>
            )}

            {upcomingMovies.length > 0 && (
                <MoviesContainer>
                    <MovieCard movies={upcomingMovies} showReleaseDate/>
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