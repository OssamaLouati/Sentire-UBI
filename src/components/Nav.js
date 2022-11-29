import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faDrum} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>
        UBI <FontAwesomeIcon icon={faDrum} /> La Magica
      </h1>
      {/* <span>NEW SONG</span> */}
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
         Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
