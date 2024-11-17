import React, { useState } from 'react';
import { Vote } from 'lucide-react';

const GamePanel: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  
  const users = [
    { id: '1', name: 'User 1', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' },
    { id: '2', name: 'User 2', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' },
    { id: '3', name: 'User 3', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
  ];

  return (
    <div className="space-y-4">
      <p className="text-white/70 text-sm">Who added this song?</p>
      
      <div className="grid grid-cols-2 gap-2">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => setSelectedUser(user.id)}
            className={`p-2 rounded-lg flex items-center gap-2 transition-all ${
              selectedUser === user.id
                ? 'bg-pink-500/20 border-pink-500/50'
                : 'bg-white/5 border-white/10'
            } border`}
          >
            <img src={user.avatar} className="w-8 h-8 rounded-full" alt={user.name} />
            <span className="text-sm text-white/90">{user.name}</span>
          </button>
        ))}
      </div>

      <button
        disabled={!selectedUser}
        className="w-full py-2 px-4 rounded-lg bg-pink-500 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pink-600 transition-all flex items-center justify-center gap-2"
      >
        <Vote className="w-4 h-4" />
        Submit Vote
      </button>
    </div>
  );
};

export default GamePanel;