/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/en",
        destination: "/",
      },
    ];
  },
};
