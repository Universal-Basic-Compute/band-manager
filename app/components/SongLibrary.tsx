import Link from 'next/link';

type Song = {
  id: string;
  title: string;
  duration: string;
  albumTitle?: string;
};

type SongLibraryProps = {
  songs: Song[];
};

export default function SongLibrary({ songs }: SongLibraryProps) {
  return (
    <div className="bg-[#360A0F] p-6 rounded-xl border border-[#DFBD69]/20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-serif text-[#DFBD69]">Your Songs</h2>
        <Link 
          href="/create-song" 
          className="px-4 py-2 bg-[#DFBD69] text-[#360A0F] rounded-full text-sm font-bold hover:bg-[#DFBD69]/90 transition-all"
        >
          Create New Song
        </Link>
      </div>
      
      {songs.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400 mb-4">You haven't created any songs yet</p>
          <Link 
            href="/create-song" 
            className="px-6 py-3 bg-[#36E2EC]/20 text-[#36E2EC] rounded-full hover:bg-[#36E2EC]/30 transition-all"
          >
            Start Creating Music
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {songs.map(song => (
            <div key={song.id} className="flex items-center justify-between p-3 bg-[#23070A] rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-[#DFBD69]/20 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#DFBD69]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div>
                  <p className="text-white">{song.title}</p>
                  <p className="text-xs text-gray-400">
                    {song.albumTitle ? `${song.albumTitle} • ` : ''}{song.duration}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-full hover:bg-[#360A0F] text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-[#360A0F] text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
