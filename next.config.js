/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Nëse përdorni imazhe nga domain‑e të jashtme, shtoni ato këtu.
    domains: ['example.com', 'another-domain.com'],
    unoptimized: true,
  },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
