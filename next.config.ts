import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
<<<<<<< HEAD
          { key: 'Access-Control-Allow-Origin', value: 'https:office-production-618e.up.railway.app' },
=======
          { key: 'Access-Control-Allow-Origin', value: 'https://omb-production-7172.up.railway.app' },
>>>>>>> c0eafc6cb3f0b8f43de09cf96ddc811449a36526
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
        ],
      },
    ];
  },
  env: {
<<<<<<< HEAD
    API_BASE_URL: 'https://office-production-618e.up.railway.app', // Update this to your backend URL
=======
    API_BASE_URL: 'https://omb-production-7172.up.railway.app',
>>>>>>> c0eafc6cb3f0b8f43de09cf96ddc811449a36526
  },
};

export default nextConfig;