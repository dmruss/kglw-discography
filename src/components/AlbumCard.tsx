import { Ghost } from 'lucide-react';
import { Album } from '../data/albums';

interface AlbumCardProps {
  album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="space-border bg-black/50 transform hover:scale-105 transition-transform duration-300 overflow-hidden group">
      <div className="h-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00ff00]/20 z-10 group-hover:bg-[#00ff00]/30 transition-colors"></div>
        <img 
          src={album.coverUrl} 
          alt={album.title}
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Ghost className="w-5 h-5 text-[#00ff00]" />
          <h3 className="font-bold text-sm text-[#00ff00] space-text">{album.title}</h3>
        </div>
        <p className="text-xs text-[#00ff00] mb-2 opacity-80">
          Released: {new Date(album.releaseDate).toLocaleDateString()}
        </p>
        <p className="text-xs text-[#00ff00] opacity-60">{album.description}</p>
      </div>
    </div>
  );
}