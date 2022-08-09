import { v4 as uuidv4 } from "uuid";
import song1 from  './assets/UBI CHANTS/01 3AYCHIN MOLOUK.mp3';
import song2 from  './assets/UBI CHANTS/02 F LA CURVA.mp3';
import song3 from  './assets/UBI CHANTS/03 EMISTE YA DEMDOUMA.mp3';
import song4 from  './assets/UBI CHANTS/04 NSINI F DENYA.mp3';
import song5 from  './assets/UBI CHANTS/05 NIKO L INSEA.mp3';
import song6 from  './assets/UBI CHANTS/06 MI CORAZON.mp3';
import song7 from  './assets/UBI CHANTS/07 RYE7 YA L BNAY.mp3';
import song8 from  './assets/UBI CHANTS/08 ZER9A MI AMORE.mp3';
import song9 from  './assets/UBI CHANTS/09 LYUM KI L3ADA.mp3';
import song10 from './assets/UBI CHANTS/10 SIAMO L INPT.mp3';
import song11 from './assets/UBI CHANTS/11 BI MECORASSON.mp3';
import song12 from './assets/UBI CHANTS/12 COURAGE.mp3';
import song13 from './assets/UBI CHANTS/13 ZER9A W L BAYDA.mp3';
import song14 from './assets/UBI CHANTS/14 OBRIGADO CAMPIONE.mp3';
import song15 from './assets/UBI CHANTS/15 VAMOS.mp3';
import song16 from './assets/UBI CHANTS/16 JINAKOM JINA.mp3';
import song17 from './assets/UBI CHANTS/17 UNIDOS.mp3';
import song18 from './assets/UBI CHANTS/18 SANS ARRET.mp3';
import song19 from './assets/UBI CHANTS/19 LA STORIA GRANDE.mp3';
import song20 from './assets/UBI CHANTS/20 HONORE LBANDERA.mp3';
import song21 from './assets/UBI CHANTS/21 NASSI DENYA.mp3';
import song22 from './assets/UBI CHANTS/22 CRAZY PUBLICO.mp3';
import song23 from './assets/UBI CHANTS/23 SENZA FINE.mp3';
import cover from './assets/images/cover.jpg';
function chillHop() {
  return [
    {
      name: "Oasis",
      cover: cover ,
      artist: "Makzo",
      audio: song1,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Going Back",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
      color: ["#335561", "#3A393E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bliss",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",
      artist: "Misha, Jussi Halme",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
      color: ["#2A416D", "#E98087"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Growing Apart",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9219",
      color: ["#BD3D76", "#551853"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sails",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      artist: "Strehlow, Aylior",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9355",
      color: ["#F2C5AB", "#BE5853"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cruisin'",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/8404541e3b694d16fd79433b142ed910f36764dd-1024x1024.jpg",
      artist: "Cloudchord, G Mills",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8200",
      color: ["#FF194A", "#41B3B3"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Maple Leaf Pt.2",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      artist: "Philanthrope",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10243",
      color: ["#CA483B", "#682C24"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Leaving For Good",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/7a84488fd87082302cb69c05262f2f3f87e93018-1024x1024.jpg",
      artist: "Hanz",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8264",
      color: ["#90B4AA", "#F2AE87"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Eastway",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/c572841e8431cebc120dffed4f92119f723dd954-1024x1024.jpg",
      artist: "Dontcry, Nokiaa",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9071",
      color: ["#B442A1", "#F54F7A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Wake up",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/2c3bd458bfb0713c89f991d1ce469523e95e3b53-1024x1024.jpg",
      artist: "Evil Needle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8285",
      color: ["#A35CA0", "#EE8D66"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Velocities",
      cover: "https://i.scdn.co/image/ab67616d0000b2734fb6a52430e65dbc6c593faf",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=3524",
      color: ["#74c7b4", "#1d6d92"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Deeper",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      artist: "Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10460",
      color: ["#C668B2", "#4D92D7"],
      id: uuidv4(),
      active: false,
    },

    //ADD MORE HERE
  ];
}

export default chillHop;
