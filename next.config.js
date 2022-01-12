const API_KEY = process.env.API_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        destination: 'new-blog/:path*',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: API_URL,
      },
    ];
  },
};
