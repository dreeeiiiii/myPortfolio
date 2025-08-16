/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export
  images: {
    unoptimized: true, // disable image optimization for static export
  },
};

export default nextConfig;
