/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export", // static site: works on any free static host
  trailingSlash: true,
};
export default nextConfig;
