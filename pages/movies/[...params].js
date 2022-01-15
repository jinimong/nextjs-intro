import { useEffect, useState } from 'react';
import { IMG_URL } from '..';
import Seo from '../../components/Seo';

export default function MovieDetail({ params }) {
  const [title, id] = params;
  const [backdrop, setBackdrop] = useState(null);
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3000/api/movies/${id}`);
      const {
        belongs_to_collection: { backdrop_path, poster_path },
      } = await response.json();
      setBackdrop(backdrop_path);
      setPoster(poster_path);
    })();
  }, [id]);

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
      {backdrop && <img src={`${IMG_URL}/${backdrop}`} />}
      {poster && <img src={`${IMG_URL}/${poster}`} />}
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
