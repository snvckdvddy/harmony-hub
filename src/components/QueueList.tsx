import React from 'react';
import { GripVertical, Music, Trash2, ArrowUp, PlayCircle } from 'lucide-react';

const QueueList: React.FC = () => {
  const queueItems = [
    { 
      title: 'Midnight City', 
      artist: 'M83', 
      source: 'Spotify',
      addedBy: 'Sarah',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      votes: 3,
      duration: '4:15'
    },
    { 
      title: 'Take on Me', 
      artist: 'a-ha', 
      source: 'YouTube',
      addedBy: 'Mike',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      votes: 1,
      duration: '3:45'
    },
    { 
      title: 'Dreams', 
      artist: 'Fleetwood Mac', 
      source: 'Apple Music',
      addedBy: 'Alex',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      votes: 2,
      duration: '4:14'
    },
  ];

  return (
    <div className="space-y-2">
      {queueItems.map((item, index) => (
        <div 
          key={index} 
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all group border border-transparent hover:border-white/10"
        >
          <GripVertical className="w-5 h-5 text-white/30 opacity-0 group-hover:opacity-100 cursor-move" />
          
          <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center relative group/play">
            <Music className="w-5 h-5 text-white/70 group-hover/play:opacity-0 transition-opacity" />
            <PlayCircle className="w-5 h-5 text-white absolute inset-0 m-auto opacity-0 group-hover/play:opacity-100 transition-opacity" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-white font-medium truncate">{item.title}</h4>
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-xs">
                {item.duration}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-white/50">{item.artist}</p>
              <span className="text-white/30">•</span>
              <div className="flex items-center gap-1">
                <img 
                  src={item.avatar} 
                  className="w-4 h-4 rounded-full"
                  alt={item.addedBy}
                />
                <span className="text-xs text-white/50">{item.addedBy}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-all">
              <ArrowUp className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70">{item.votes}</span>
            </button>
            
            <span className="px-2 py-1 rounded-full bg-white/5 text-white/50 text-xs">
              {item.source}
            </span>

            <button className="p-1.5 rounded-full hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100">
              <Trash2 className="w-4 h-4 text-white/50" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QueueList;