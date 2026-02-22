import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https:office-production-618e.up.railway.app' },

          
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
        ],
      },
    ];
  },
  env: {

    API_BASE_URL: 'https://office-production-618e.up.railway.app', // Update this to your backend URL
  

  },
};

export default nextConfig;

