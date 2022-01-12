import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          gap: 1rem;
        }
        a {
          text-decoration: none;
        }
        .active {
          background-color: tomato;
          color: white;
        }
      `}</style>
    </nav>
  );
}
