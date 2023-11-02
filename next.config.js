/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    domains: ["res.cloudinary.com", "scontent.fplm4-1.fna.fbcdn.net"]
  }
};

module.exports = nextConfig;
