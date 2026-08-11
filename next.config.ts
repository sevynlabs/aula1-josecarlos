import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O projeto Vercel está configurado para procurar a pasta dist.
  // Mantemos essa saída compatível com o build padrão do Next.js.
  distDir: "dist",
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
