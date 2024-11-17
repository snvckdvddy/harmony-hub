import React, { useState } from 'react';
import { Music2 } from 'lucide-react';
import QueueList from './components/QueueList';
import MusicPlayer from './components/MusicPlayer';
import UserList from './components/UserList';
import SourceSelector from './components/SourceSelector';
import GamePanel from './components/GamePanel';

// Mood-based color schemes
export const colorSchemes = {
  energetic: {
    gradient: 'from-orange-600 via-pink-600 to-purple-600',
    accent: 'bg-pink-500',
    text: 'text-orange-500',
    secondary: 'pink-500',
  },
  calm: {
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    accent: 'bg-teal-500',
    text: 'text-teal-500',
    secondary: 'teal-500',
  },
  melancholic: {
    gradient: 'from-indigo-900 via-purple-900 to-pink-900',
    accent: 'bg-purple-500',
    text: 'text-purple-500',
    secondary: 'purple-500',
  },
  happy: {
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
    accent: 'bg-orange-500',
    text: 'text-yellow-500',
    secondary: 'orange-500',
  }
};

export type MoodTheme = keyof typeof colorSchemes;

function App() {
  const [isHost, setIsHost] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [currentMood, setCurrentMood] = useState<MoodTheme>('energetic');

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colorSchemes[currentMood].gradient} transition-all duration-1000`}>
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music2 className={`h-8 w-8 ${colorSchemes[currentMood].text}`} />
            <h1 className={`text-2xl font-bold bg-gradient-to-r from-${colorSchemes[currentMood].secondary} to-violet-500 bg-clip-text text-transparent`}>
              Harmony Hub
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsHost(!isHost)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isHost ? `${colorSchemes[currentMood].accent} text-white` : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {isHost ? '🎵 Host Mode' : 'Join Session'}
            </button>
            <div className="flex -space-x-2">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-purple-900" alt="User 1" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-purple-900" alt="User 2" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-purple-900" alt="User 3" />
              <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-purple-900 flex items-center justify-center text-xs text-white">
                +3
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex gap-8">
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Current Track */}
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <MusicPlayer isHost={isHost} onMoodChange={setCurrentMood} currentMood={currentMood} />
          </div>

          {/* Queue */}
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Up Next</h2>
              <button 
                onClick={() => setShowGame(!showGame)}
                className={`px-4 py-2 rounded-full bg-${colorSchemes[currentMood].secondary}/20 text-${colorSchemes[currentMood].secondary}-300 hover:bg-${colorSchemes[currentMood].secondary}/30 transition-all text-sm`}
              >
                Start Game
              </button>
            </div>
            <QueueList currentMood={currentMood} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 flex flex-col gap-8">
          {/* Source Selector */}
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Add Music</h2>
            <SourceSelector />
          </div>

          {/* Connected Users */}
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Connected Users</h2>
            <UserList />
          </div>

          {/* Game Panel */}
          {showGame && (
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">Guess Who?</h2>
              <GamePanel currentMood={currentMood} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;