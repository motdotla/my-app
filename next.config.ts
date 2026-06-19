import type { NextConfig } from "next";

const dotenvxTraceIncludes = [
  "node_modules/@dotenvx/dotenvx/**/*",
  "node_modules/@ecies/ciphers/**/*",
  "node_modules/@noble/ciphers/**/*",
  "node_modules/@noble/curves/**/*",
  "node_modules/@noble/hashes/**/*",
  "node_modules/ajv-formats/**/*",
  "node_modules/ansi-colors/**/*",
  "node_modules/ansi-regex/**/*",
  "node_modules/atomically/**/*",
  "node_modules/commander/**/*",
  "node_modules/conf/**/*",
  "node_modules/cross-spawn/**/*",
  "node_modules/debounce-fn/**/*",
  "node_modules/define-lazy-prop/**/*",
  "node_modules/dot-prop/**/*",
  "node_modules/dotenv/**/*",
  "node_modules/eciesjs/**/*",
  "node_modules/enquirer/**/*",
  "node_modules/env-paths/**/*",
  "node_modules/execa/**/*",
  "node_modules/get-stream/**/*",
  "node_modules/human-signals/**/*",
  "node_modules/ignore/**/*",
  "node_modules/is-docker/**/*",
  "node_modules/is-obj/**/*",
  "node_modules/is-stream/**/*",
  "node_modules/is-wsl/**/*",
  "node_modules/isexe/**/*",
  "node_modules/json-schema-typed/**/*",
  "node_modules/merge-stream/**/*",
  "node_modules/mimic-fn/**/*",
  "node_modules/npm-run-path/**/*",
  "node_modules/object-treeify/**/*",
  "node_modules/onetime/**/*",
  "node_modules/open/**/*",
  "node_modules/path-key/**/*",
  "node_modules/pkg-up/**/*",
  "node_modules/shebang-command/**/*",
  "node_modules/shebang-regex/**/*",
  "node_modules/signal-exit/**/*",
  "node_modules/strip-ansi/**/*",
  "node_modules/strip-final-newline/**/*",
  "node_modules/systeminformation/**/*",
  "node_modules/undici/**/*",
  "node_modules/which/**/*",
  "node_modules/yocto-spinner/**/*",
  "node_modules/yoctocolors/**/*",
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
