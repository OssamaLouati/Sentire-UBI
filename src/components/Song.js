import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faDownload} from "@fortawesome/free-solid-svg-icons";


const Song = ({ currentSong, lyricsStatus, setLyricsStatus }) => {
  return (
    <div className="song-container">
      <img alt={currentSong.name} src={currentSong.cover}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      <div className="Feature">
        <button className="btn-1" onClick={() => setLyricsStatus(!lyricsStatus)}><FontAwesomeIcon className="micro" icon={faMicrophone} />{" "}Lyrics</button>
        
        <a href={currentSong.link} download>
          <button className="btn-2">Download{" "}<FontAwesomeIcon className="micro0" icon={faDownload} /></button>
        </a>

      </div>
    
    </div>
  );
};

export default Song;
