import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json in a parent directory makes Turbopack infer the
  // wrong workspace root; pin it to this project so it stops warning.
  turbopack: {
    root: path.resolve(),
  },
};

export default nextConfig;
