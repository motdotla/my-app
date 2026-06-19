import type { NextConfig } from "next";

const dotenvxTraceIncludes = [
  "node_modules/@dotenvx/dotenvx/**/*",
  "node_modules/@dotenvx/dotenvx/node_modules/**/*",
      ".env",
      ".env.local",
      ".env.production",
      ".env.production.local",
      ".env.development",
      ".env.development.local",
      ".env.test",
      ".env.test.local"
];

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api": dotenvxTraceIncludes,
    "/*": dotenvxTraceIncludes
  }
};

export default nextConfig;
