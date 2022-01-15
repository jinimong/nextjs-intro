import { useRouter } from 'next/router';

export default function MovieDetail() {
  const {
    query: { id, title },
  } = useRouter();
  return (
    <div>
      <h4>{title || 'Loading..'}</h4>
    </div>
  );
}
