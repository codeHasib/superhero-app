/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "/gh/akabab/superhero-api@0.3.0/api/images/**",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
