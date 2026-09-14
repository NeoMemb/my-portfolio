import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json in a parent directory makes Turbopack infer the
  // wrong workspace root; pin it to this project so it stops warning.
  turbopack: {
    root: path.resolve(),
  },
  // @react-pdf/renderer ships its own bundling; keep it out of the server
  // bundle so the /resume route runs it as plain Node.
  serverExternalPackages: ["@react-pdf/renderer"],
};

export default nextConfig;
