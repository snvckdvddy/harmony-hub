import React, { useState, useEffect } from 'react';
import { PlayCircle, PauseCircle, SkipForward, Volume2, Heart, Music2 } from 'lucide-react';
import type { MoodTheme } from '../App';
import { colorSchemes } from '../App';

interface MusicPlayerProps {
  isHost: boolean;
  onMoodChange: (mood: MoodTheme) => void;
  currentMood: MoodTheme;
}

// Sample songs with mood metadata
const songs = [
  { 
    title: 'Midnight City',
    artist: 'M83',
    mood: 'energetic',
    source: 'Spotify',
    duration: '4:15',
    currentTime: '2:30'
  },
  { 
    title: 'Weightless',
    artist: 'Marconi Union',
    mood: 'calm',
    source: 'Spotify',
    duration: '8:05',
    currentTime: '3:45'
  },
  { 
    title: 'Mad World',
    artist: 'Gary Jules',
    mood: 'melancholic',
    source: 'Spotify',
    duration: '3:20',
    currentTime: '1:15'
  },
  { 
    title: 'Happy',
    artist: 'Pharrell Williams',
    mood: 'happy',
    source: 'Spotify',
    duration: '3:53',
    currentTime: '2:10'
  }
];

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isHost, onMoodChange, currentMood }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [liked, setLiked] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // Move to next song
            setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isPlaying]);

  useEffect(() => {
    onMoodChange(currentSong.mood as MoodTheme);
  }, [currentSongIndex, onMoodChange, currentSong.mood]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <div className={`w-24 h-24 rounded-lg bg-gradient-to-br ${colorSchemes[currentMood].gradient} flex items-center justify-center group relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <PlayCircle className="w-12 h-12 text-white" />
          </div>
          <Music2 className="w-12 h-12 text-white group-hover:opacity-0 transition-opacity" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-white">{currentSong.title}</h3>
            <span className={`px-2 py-1 rounded-full bg-${colorSchemes[currentMood].secondary}/20 text-${colorSchemes[currentMood].secondary}-300 text-xs`}>
              {currentSong.source}
            </span>
          </div>
          <p className="text-white/70">{currentSong.artist}</p>
          <div className="flex items-center gap-2 mt-1">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
                 className="w-5 h-5 rounded-full border border-white/20" alt="User avatar" />
            <p className="text-sm text-white/50">Added by Sarah</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setLiked(!liked)}
            className={`p-2 rounded-full transition-all ${
              liked ? `bg-${colorSchemes[currentMood].secondary}/20 text-${colorSchemes[currentMood].secondary}-400` : 'hover:bg-white/10 text-white/70'
            }`}
          >
            <Heart className="w-6 h-6" fill={liked ? 'currentColor' : 'none'} />
          </button>

          {isHost && (
            <>
              <div className="group relative">
                <button className="p-2 rounded-full hover:bg-white/10 transition-all">
                  <Volume2 className="w-6 h-6 text-white/70" />
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
                  <div className="h-24 w-8 bg-white/10 rounded-full p-2">
                    <input 
                      type="range" 
                      value={volume} 
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-24 -rotate-90 translate-y-8 -translate-x-8"
                      min="0"
                      max="100"
                    />
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full hover:bg-white/10 transition-all"
              >
                {isPlaying ? (
                  <PauseCircle className="w-6 h-6 text-white" />
                ) : (
                  <PlayCircle className="w-6 h-6 text-white" />
                )}
              </button>
              <button 
                onClick={() => setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length)}
                className="p-2 rounded-full hover:bg-white/10 transition-all"
              >
                <SkipForward className="w-6 h-6 text-white/70" />
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="relative w-full">
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r from-${colorSchemes[currentMood].secondary} to-violet-500 transition-all duration-1000`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-white/50 mt-1">
          <span>{currentSong.currentTime}</span>
          <span>{currentSong.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;