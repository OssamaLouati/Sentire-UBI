import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone} from "@fortawesome/free-solid-svg-icons";


const Song = ({ currentSong, lyricsStatus, setLyricsStatus }) => {
  return (
    <div className="song-container">
      <img alt={currentSong.name} src={currentSong.cover}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      <button onClick={() => setLyricsStatus(!lyricsStatus)}><FontAwesomeIcon className="micro" icon={faMicrophone} />{" "}Lyrics</button>
    </div>
  );
};

export default Song;
