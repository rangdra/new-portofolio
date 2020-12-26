module.exports = {
  async rewrites() {
    return [
      {
        source: "/firstblog",
        destination: "/blog/firstblog",
      },
      {
        source: "/secondblog",
        destination: "/blog/secondblog",
      },
    ];
  },
  env: {
    BASE_URL: "http://localhost:3000",
  },
};
