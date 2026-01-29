/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações de otimização de imagem
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Configuração para rotas limpas
  trailingSlash: false,
};

export default nextConfig;
