import React from 'react';
import { Timer } from './components/Timer';
import { AlbumCard } from './components/AlbumCard';
import { albums } from './data/albums';
import { Ghost } from 'lucide-react';

export default function App() {
  const latestAlbum = albums[0];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pixel-grid crt-overlay">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            {/* <Ghost className="w-12 h-12 text-[#00ff00]" /> */}
            <h1 className="text-2xl space-text">
              KING GIZZARD
              <br />
              & THE LIZARD WIZARD
              <br/>
              Discography
            </h1>
          </div>
          <Timer lastReleaseDate={latestAlbum.releaseDate} />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <AlbumCard key={album.title} album={album} />
          ))}
        </div>
      </div>
      
      <div className="space-invader top-4 right-4"></div>
      <div className="space-invader bottom-4 left-4"></div>
    </div>
  );
}