/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: "/DoHi0512.github.io/Blog_FE",
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

const removeImports = require("next-remove-imports")();
module.exports = removeImports({ ...nextConfig });
