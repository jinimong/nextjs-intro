import { useEffect, useState } from 'react';
import Seo from '../components/Seo';

const IMG_URL = `https://image.tmdb.org/t/p/w500`;

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/movies');
      const { results } = await response.json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading..</h4>}
      {movies?.map(({ id, original_title, poster_path }) => (
        <div key={id} className="movie">
          <img src={`${IMG_URL}/${poster_path}`} />
          <h4>{original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
