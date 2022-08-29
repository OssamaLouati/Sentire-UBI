import React from "react";

const Song = ({ currentSong, lyricsStatus, setLyricsStatus }) => {
  return (
    <div className="song-container">
      <img alt={currentSong.name} src={currentSong.cover}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      <button onClick={() => setLyricsStatus(!lyricsStatus)}>Lyrics</button>
    </div>
  );
};

export default Song;
