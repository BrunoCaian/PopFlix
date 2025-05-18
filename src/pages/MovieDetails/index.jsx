import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { fetchMovieDetails, fetchMovieTrailer } from "../../services/movieService"
import { Container, Genres, GenresWrapper, MovieInfo, MovieSide, Rating, Synopsis, Trailer } from "./styles"
import { FaStar } from "react-icons/fa";
import { useIsMobile } from "../../hooks/useIsMobile";
import StarRating from "../../components/StarRating";

export default function MovieDetails({ apiKey, loading, setLoading }) {
    const { id } = useParams()
    const navigate = useNavigate()
    const [movie, setMovie] = useState(null)

    const isMobile = useIsMobile()

    function formatarData(data) {
        const [ano, mes, dia] = data.split('-')
        return `${dia}-${mes}-${ano}`
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        
        const loadDetails = async () => {
            setLoading(true)
            try {
                const data = await fetchMovieDetails(apiKey, id)
                const trailerUrl = await fetchMovieTrailer(apiKey, id)
                setMovie({ ...data, trailerUrl })
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        loadDetails()
    }, [apiKey, id])

    if (!movie) return <p>Carregando...</p>

    if (loading) {
        return (
            <div style={{ minHeight: '100vh', backgroundColor: 'transparent' }}></div>
        )
    }
    return (

        <Container>
            {isMobile ? (
                <>
                    <MovieSide>
                        <h2>{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <Rating>
                            <StarRating rating={movie.vote_average}/>
                            <span>{(movie.vote_average / 2).toFixed(2)}</span>
                        </Rating>

                        {movie.release_date && (
                            <p style={{ color: '#ccc' }}>
                                Lançamento: {formatarData(movie.release_date)}
                            </p>
                        )}

                        {movie.trailerUrl ? (
                            <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer" >
                                <Trailer type="button">Trailer</Trailer>
                            </a>
                        ) : (
                            <span style={{ fontSize: '1.5rem' }}>Sem trailer no momento</span>
                        )}
                    </MovieSide>

                    <MovieInfo>

                        <GenresWrapper>
                            {movie.genres.map(genre => (
                                <Genres key={genre.id}>
                                    <span>{genre.name}</span>
                                </Genres>
                            ))}
                        </GenresWrapper>
                        {movie.overview ? (
                            <Synopsis>
                                <h2>Sinopse</h2>
                                <p>{movie.overview}</p>
                            </Synopsis>
                        ) : (
                            <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center',fontSize: '1rem', marginTop: '2rem'}}>Desculpe, esse filme está sem Sinopse no momento</div>
                        )}
                    </MovieInfo>
                </>
            ) : (
                <>
                    <MovieSide>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        {movie.vote_average && (
                        <Rating>
                            <StarRating rating={movie.vote_average}/>
                            <span>{(movie.vote_average / 2).toFixed(2)}</span>
                        </Rating>
                        )}

                        {movie.release_date && (
                            <p style={{ color: '#ccc' }}>
                                Lançamento: {formatarData(movie.release_date)}
                            </p>
                        )}

                        {movie.trailerUrl ? (
                            <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer" >
                                <Trailer type="button">Trailer</Trailer>
                            </a>
                        ) : (
                            <span style={{ fontSize: '1.5rem' }}>Sem trailer no momento</span>
                        )}
                    </MovieSide>

                    <MovieInfo>
                        <h2 style={{ borderBottom: '1px solid #B699D9', fontSize: '2.5rem' }}>{movie.title}</h2>
                        {movie.genres.map(genre => (
                            <Genres key={genre.id}>
                                <span>{genre.name}</span>
                            </Genres>
                        ))}
                        {movie.overview ? (
                            <Synopsis>
                                <h2>Sinopse</h2>
                                <p>{movie.overview}</p>
                            </Synopsis>
                        ) : (
                            <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', fontSize: '2rem', marginTop: '2rem' }}>Desculpe, esse filme está sem Sinopse no momento</div>
                        )}
                    </MovieInfo>
                </>
            )}
        </Container>
    )
}