export const fetchMoviesPopular = async (apiKey, page) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${page}`)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        throw new Error('Erro na requisição: ' + error.message)
    }
}

export const fetchMovieDetails = async (apiKey, id) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`)
        const data = await response.json()
        console.log('Detalhes', data)
        return data
    }catch (error) {
        throw new Error('Erro na requisição: ' + error.message)
    }
}

export const fetchMovieTrailer = async (apiKey, id) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=pt-BR`)
        const data = await response.json()
        const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube')
        console.log('Trailer:', trailer)
        return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null
    } catch (error) {
        throw new Error('Erro ao buscar trailer: ' + error.message)
    }
}

export const fetchSearchMovies = async (apiKey, query) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}`);
        
        if (!response.ok) {
            throw new Error(`Erro ao buscar filme: ${response.status}`);
        }
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Erro ao buscar filme:", error.message);
        return [];
    }
};

export const fetchGenres = async (apiKey) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`);
        if (!response.ok) {
            throw new Error(`Erro ao buscar gêneros: ${response.status}`);
        }
        const data = await response.json();
        return data.genres;
    } catch (error) {
        console.error('Erro ao buscar gêneros:', error);
        return [];
    }
};

export const fetchMoviesByGenre = async (apiKey, genreId, page = 1) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=${genreId}&sort_by=popularity.desc&page=${page}`);
        if (!response.ok) {
            throw new Error(`Erro ao buscar filmes por gêneros: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch(error){
        console.error("Erro ao buscar filmes por gêneros:", error.message);
        return [];
    }
  }

export const fetchTopRated = async (apiKey, page = 1) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR&page=${page}`);
      if (!response.ok) {
        throw new Error(`Erro ao buscar melhores filmes avaliados: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar melhores filmes avaliados:", error.message);
      return [] ;
    }
  };

export const fetchUpcoming = async (apiKey, page = 1) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=pt-BR&page=${page}`)
        if(!response.ok) {
            throw new Error(`Erro ao buscar novos lançamentos: ${response.status}`);
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Erro ao buscar novos lançamentos:", error.message);
        return []
    }
}