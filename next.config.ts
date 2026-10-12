import type { NextConfig } from "next";
import path from "node:path";

const netlify=process.env.SITE_DEPLOY_TARGET==="netlify";

const nextConfig: NextConfig = {
  env: {SITE_DEPLOY_TARGET:process.env.SITE_DEPLOY_TARGET??""},
  ...(netlify?{
    webpack(config, {webpack}) {
      config.plugins.push(new webpack.NormalModuleReplacementPlugin(
        /^cloudflare:workers$/,
        path.resolve("lib/netlify-cloudflare-bindings.ts"),
      ));
      return config;
    },
  }:{}),
};

export default nextConfig;
