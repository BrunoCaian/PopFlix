
import { useNavigate } from "react-router-dom"
import { Badge, Card, CardButton, Rating } from "./styles"
import StarRating from "../StarRating";

export default function MovieCard({ movies = [], showLink = true, $highlighted = false, showReleaseDate = false }) {

    const navigate = useNavigate()

    function formatarData(data) {
        if (!data) return "Data não disponível"
        const [ano, mes, dia] = data.split('-')
        return `${dia}-${mes}-${ano}`
    }

    function wordLimit(text, limit) {
        const words = text.split(' ')
        if (words.length <= limit) {
            return text
        } else {
            const textLimit = words.slice(0, limit).join(' ')
            return `${textLimit}...`
        }
    }

    return (
        <>
            {movies.length === 0 && <p>Nenhum filme encontrado</p>}
            {movies.map((movie) => (
                <Card key={movie.id} $highlighted={$highlighted}>
                    {$highlighted && <Badge>TOP</Badge>}

                    {movie.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || "Filme sem título"} />
                    ) : (
                        <p style={{ color: 'gray', textAlign: 'center' }}>Sem imagem disponível</p>
                    )}

                    {movie && movie.title ? (
                        <h2 title={movie.title}>{movie.title}</h2>
                    ) : (
                        <p style={{ color: 'gray', textAlign: 'center' }}>Título não disponível</p>
                    )}

                    {movie.vote_average && (
                        <Rating>
                            <StarRating rating={movie.vote_average} />
                        </Rating>
                    )}

                    {showReleaseDate && (
                        <p style={{ color: '#ccc', marginTop: '1rem' }} >
                            Lançamento: {formatarData(movie.release_date)}
                        </p>
                    )}

                    {showLink ? (
                        <CardButton onClick={() => navigate(`/filme/${movie.id}`)}>Ver detalhes</CardButton>
                    ) : ''}
                </Card>
            ))}
        </>
    )
}