import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSearchMovies } from '../services/movieService'
import { normalizeText } from '../utils/normalizeText'
import MovieCard from '../components/MovieCard';
import { MoviesContainer } from './Home/styles';

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('query');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchTerm) return;
      setLoading(true);
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const allResults = await fetchSearchMovies(apiKey, searchTerm);
        const filtered = allResults.filter(movie =>
          normalizeText(movie.title).toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filtered);
      } catch (err) {
        console.error("Erro ao buscar:", err.message);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [searchTerm]);

  if(loading) {
      return (
        <div style={{ minHeight: '100vh', backgroundColor: 'transparent' }}></div>
      )
  }

  return (
    <main style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{color: '#fff', paddingBlock: '3rem' }}>Resultados para: "{decodeURIComponent(searchTerm)}"</h1>

      {results.length > 0 ? (
        <MoviesContainer>
          <MovieCard movies={results} />
        </MoviesContainer>
      ) : (
        <p style={{color: '#fff', fontSize: '1.5rem'}}>Nenhum filme encontrado</p>
      )}
    </main>
  );
}
