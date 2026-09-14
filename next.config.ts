import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Requis par le déploiement Cap Connect (cPanel Node.js). Ne pas retirer.
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vagozgtmmwfsjireanfl.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
