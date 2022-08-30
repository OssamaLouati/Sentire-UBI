import React from 'react';


const Lyrics = ({
  currentSong,
  lyricsStatus,
  setLyricsStatus,
  }) => {
  return (
    <div className={`lyrics ${lyricsStatus ? "active-lyrics" : ""}`}>
      <h3> {currentSong.name} </h3>
      {currentSong.lyrics.map((lyric, index) =>
        <p key={index}>{lyric.lyric}</p>
      )}
      <button onClick={() =>setLyricsStatus(!lyricsStatus)}> Close</button>
    
    </div>
  );
};

export default Lyrics;