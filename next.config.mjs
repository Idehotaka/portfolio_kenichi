import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensures Turbopack resolves `next` from this app (avoids wrong root on Windows/HMR).
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
