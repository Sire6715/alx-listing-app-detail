import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me'],
  },

  webpack: (config) => {
    // Add custom Webpack configuration here if needed
    // For example, you can add plugins or modify the config 
    config.module?.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack', options: {icon: true}}],
    })
    return config;
  }
};

export default nextConfig;
