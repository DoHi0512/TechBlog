/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/detail",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

compiler: {
  styledComponents: true;
}
module.exports = nextConfig;
