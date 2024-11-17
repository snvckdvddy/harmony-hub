import React from 'react';
import { Crown } from 'lucide-react';

const UserList: React.FC = () => {
  const users = [
    { name: 'Host User', isHost: true, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' },
    { name: 'User 2', isHost: false, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' },
    { name: 'User 3', isHost: false, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
  ];

  return (
    <div className="space-y-2">
      {users.map((user, index) => (
        <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all">
          <img src={user.avatar} className="w-10 h-10 rounded-full" alt={user.name} />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">{user.name}</span>
              {user.isHost && (
                <Crown className="w-4 h-4 text-yellow-500" />
              )}
            </div>
            <p className="text-xs text-white/50">Connected</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;