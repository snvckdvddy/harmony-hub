import React from 'react';
import { Music2, Youtube, Cloud, Apple } from 'lucide-react';

const SourceSelector: React.FC = () => {
  const sources = [
    { name: 'Spotify', icon: Music2, color: 'bg-green-500' },
    { name: 'YouTube', icon: Youtube, color: 'bg-red-500' },
    { name: 'SoundCloud', icon: Cloud, color: 'bg-orange-500' },
    { name: 'Apple Music', icon: Apple, color: 'bg-pink-500' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {sources.map((source) => (
        <button
          key={source.name}
          className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10 flex flex-col items-center gap-2"
        >
          <div className={`w-10 h-10 rounded-full ${source.color} flex items-center justify-center`}>
            <source.icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm text-white/70">{source.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SourceSelector;