import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jonathan Voary - Professional Web Developer Portfolio',
    short_name: 'Jonathan Voary - Professional Web Developer Portfolio',
    description:
      "Explore Jonathan Voary's professional portfolio showcasing expertise in web development, including projects on modern frameworks like Next.js, React, and more.",
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
