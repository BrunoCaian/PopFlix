import { useEffect, useState } from 'react'
import Home from './pages/Home';
import {
  Route, Routes, Navigate, useLocation

} from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import { GlobalStyle } from './globalStyles';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import Header from './components/Header';
import Genres from './pages/Genres'
import Upcoming from './pages/Upcoming';
import TopRated from './pages/TopRated'
import About from './pages/About'
import SearchResults from './pages/SearchResults';
import { useAuth } from "./contexts/AuthContext";
import { useMenu } from './contexts/MenuContext';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { ToastContainer } from 'react-toastify';

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false);

  const { isOpen } = useMenu();
  const { currentUser: user, loading: authLoading } = useAuth();
  const location = useLocation();

  const apiKey = import.meta.env.VITE_API_KEY;
  const isAuthPage = ["/signin", "/signup"].includes(location.pathname);
 

  useEffect(() => {
    if (isAuthPage) {
      document.body.classList.add('login-background');
    } else {
      document.body.classList.remove('login-background');
    }
  }, [isAuthPage]);


  if (authLoading) return <p>Carregando...</p>;

  return (
    <>
      <GlobalStyle />
      <div className='page-wrapper'>
        {!isAuthPage && user && <Header />}

        <main

          style={{
            filter: isOpen && !isAuthPage ? "blur(4px)" : "none",
            transition: "filter 0.3s ease",
            pointerEvents: isOpen && !isAuthPage ? "none" : "auto",
          }}
        >
          {!isAuthPage && user && <SearchBar />}
          <Routes>
            {!user ? (
              <>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Navigate to="/signin" />} />
              </>
            ) : (
              <>
                <Route path="/" element={
                  <Home apiKey={apiKey} isSearching={isSearching} loading={loading} setLoading={setLoading} />
                } />
                <Route path="/filme/:id" element={
                  <MovieDetails apiKey={apiKey} loading={loading} setLoading={setLoading} />
                } />
                <Route path="/generos" element={
                  <Genres apiKey={apiKey} loading={loading} setLoading={setLoading} />
                } />
                <Route path="/top-rated" element={
                  <TopRated apiKey={apiKey} loading={loading} setLoading={setLoading} isSearching={isSearching} setIsSearching={setIsSearching} />
                } />
                <Route path="/upcoming" element={
                  <Upcoming apiKey={apiKey} loading={loading} setLoading={setLoading} isSearching={isSearching} setIsSearching={setIsSearching} />
                } />
                <Route path="/about" element={<About />} />
                <Route path="/search" element={<SearchResults apiKey={apiKey} />} />
              </>
            )}
          </Routes>
        </main>

        {!loading && <Footer />}
      </div>
      
      <ToastContainer
        position="top-center"
        autoClose={2000}
        style={{ zIndex: '999' }}
      />

    </>
  );
}

export default App;