const nextConfig = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,

      use: ["raw-loader"],
    });

    return config;
  },

  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/posts",
        permanent: true,
      },
    ];
  },

  // lint는 commit할 때 check한다.
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
