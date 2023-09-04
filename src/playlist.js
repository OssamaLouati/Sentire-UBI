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
import song24 from './assets/UBI CHANTS/24 COMME DABITUDE.mp3';
import song25 from './assets/UBI CHANTS/25 MAMEYO.mp3';
import song26 from './assets/UBI CHANTS/26 YALLAH NODO YAL 3ZARA.mp3';
import cover from './assets/images/new_cover.jpg';

function chillHop() {
  return [
    {
      name: "SIAMO L INPT",
      cover: cover ,
      link: song10,
      artist: "Ultras Bleu Ines",
      audio: song10,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
      {
          lyric:"les bleus INEs allez allez allez allez allez (x2)"
      },
      {
          lyric:"Siamo l'INPT"
      },
      {
          lyric:"wm3aha ra presente"
      },
      {
          lyric:"a la vida a la muerte a la muerte a la muerte"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"lalalallallallalla lla lla lla lla lla lla lla allez (x2)"
      },
      {
          lyric:"oohoo oho oho oho oho oho ohoo ohoooo"
      },
      ],
      active: true,
    },
    // {
    //   name: "YALLAH NODO YAL 3ZARA",
    //   link: song26,
    //   cover: cover ,
    //   artist: "Ultras Bleu Ines",
    //   audio: song26,
    //   color: ["#06424D", "#A1C0EE"],
    //   id: uuidv4(),
    //   lyrics:[
    //     {
    //       lyric:"o yalah nodo ya la3zara w golo m3ana "
    //     },
    //     {
    //       lyric:"W zarqa wlbayda ya 3omriii"
    //     },
    //     {
    //       lyric:"w paaalmares ya7ki elinaaa ya wmn bakri "
    //     },
    //     {
    //       lyric:"UBi nbghiha mn soghriiii"
    //     },
    //     {
    //       lyric:"Ya roo7 khtiha ya Lghomri"
    //     },
    //     {
    //       lyric:"W zaaaaarqa ya mon amour "
    //     },
    //     {
    //       lyric:"Elachanak ntiya kola journee rani à jour"
    //     },
    //     {
    //       lyric:"ohhoohhhoohooo"
    //     },
    //     {
    //       lyric:"UBI joue joue"
    //     },
    //     {
    //       lyric:"F ga3 les école dawii"
    //     },
    //     {
    //       lyric:"L bleu ines 3ayach khalwi"
    //     },
    //     {
    //       lyric:"Ohohhoooooh"
    //     },
    //     {
    //       lyric:"         "
    //     },
    //     {
    //       lyric:"E****s dar da3ara ktro lbnaat "
    //     },
    //     {
    //       lyric:"hadi école lharibaaat "
    //     },
    //     {
    //       lyric:"Whdaaa tbkii whda tchkii ga3ma t3chat"
    //     },
    //     {
    //       lyric:"Kil3ada l gamila t7rgaaat "
    //     },
    //     {
    //       lyric:"Ga3ma kisd9o lwasafaaat"
    //     },
    //     {
    //       lyric:""
    //     },
    //     {
    //       lyric:"wl3iiirfaaan fiha wliya chomicha chalotiya "
    //     },
    //     {
    //       lyric:"Kadal tl7ass fl7ssasbia"
    //     },
    //     {
    //       lyric:"Ohohooohoooo "
    //     },
    //     {
    //       lyric:"Ga3 les ines Bagcia "
    //     },
    //     {
    //       lyric:"7ata w l3aqliya "
    //     },
    //     {
    //       lyric:"Mentalité gawriya "
    //     },
    //     {
    //       lyric:"Ohohhoooooh"
    //     },
    //     {
    //       lyric:"W lalalalallaa lala la laaa "
    //     },
    //     {
    //       lyric:"Ohohohohohohhoooo (x2)"
    //     },
    //     {
    //       lyric:"(x2)"
    //     },
    //   ],
    //   active: false,
    // },
    {
      name: "MAMEYO",
      link: song25,
      cover: cover ,
      artist: "Ultras Bleu Ines",
      audio: song25,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
        {
          lyric:"Mameyo ni vida senza zora"
        },
        {
          lyric:"Mameyo cabeza beha loca "
        },
        {
          lyric:"Mameyo 3a2ila w9ima mtorkha "
        },
        {
          lyric:"Mameyo lli gabelna ytchoqua"
        },
        {
          lyric:"Zido katbo zido lbastardo "
        },
        {
          lyric:"(Bastaardo)"
        },
        {
          lyric:"Wana sla7i message petardo "
        },
        {
          lyric:"(Petaardo)"
        },
        {
          lyric:"Analyser nota lmesmouma"
        },
        {
          lyric:"L'INPT la grandé fiamaa"
        },
        {
          lyric:"Awee awee (x2)"
        },
        {
          lyric:"Bleu INE ma3la balo"
        },
        {
          lyric:"Awee awee (x2)"
        },
        {
          lyric:"F journée kolchi dyalo"
        },
        {
          lyric:"(x2)"
        },
      ],
      active: false,
    },
    {
      name: "COMME D'HABITUDE ",
      cover: cover ,
      link: song24,
      artist: "Ultras Bleu Ines",
      audio: song24,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
      {
          lyric:"Wlalalalalalaa"
      },
      {
          lyric:"Ohooooho aléyaléalé oh"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"Alé alé alé alé alé alé oh"
      },
      {
          lyric:"(clap x3)"
      },
      {
          lyric:"(x3)"
      },
      {
          lyric:"Comme d'habitude wlyoma jina"
      },
      {
          lyric:"Les INPTistes wndiro lli 3lina"
      },
      {
          lyric:"3la lwan lghalya hallina 3inina "
      },
      {
          lyric:"Les Bleu INEs hiya lli tzahhina"
      },
      {
          lyric:"Zar9a wlbayda tu quiero mi amore"
      },
      {
          lyric:"(clap x3)"
      },
      {
          lyric:"N3icho la belle vie m3aha jusqu'à la mort "
      },
      {
          lyric:"(clap x3)"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"Ngoloha ga3 hadi la vérité "
      },
      {
          lyric:"Nhabboha fort hasta la muerte "
      },
      {
          lyric:"Dima fi bali mnghirha ma yahla li"
      },
      {
          lyric:"M3aha jowwal toujours chaghla bali"
      },
      {
          lyric:"Fwlad zar9a rakom mzl ghaltin"
      },
      {
          lyric:"(clap x3)"
      },
      {
          lyric:"Toujours m3aha winma troh rayhin"
      },
      {
          lyric:"(clap x3)"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"Wlalalalalalaa"
      },
      {
          lyric:"Ohooooho aléyaléalé oh"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"Alé alé alé alé alé alé oh"
      },
      {
          lyric:"(clap x3)"
      },
      {
          lyric:"(x3)"
      },
      
      ],
      active: false,
    },
    {
      name: "3AYCHIN MOLOUK",
      link: song1,
      cover: cover ,
      artist: "Ultras Bleu Ines",
      audio: song1,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
        {
          lyric:"3aychin molouk mna rah yghiroo"
        },
        {
          lyric:"Ga3 les ecoles fina rah y7iro "
        },
        {
          lyric:"Ch7al 9assaw m3ana mazal liyam mazal"
        },
        {
          lyric:"Ytle3 niveau machi ki bouzebal"
        },
        {
          lyric:"Ya lbenay o ya lbenay ya li 3ayech b lghaba"
        },
        {
          lyric:"Dik l’ecole jm3at les gays ch7al fiha dial l3enaba"
        },
        {
          lyric:"Ya lfella7 o ya lfella7 ya li 3ayeh f lkouri"
        },
        {
          lyric:"Fo9 tben na3ess mrta7 ysre7 djaj f nebbouri"
        },
        {
          lyric:"ya tricien o ya tricien ya li 3ayech f l7ofra"
        },
        {
          lyric:"west journée baghi tban o tnessi rasek f l7ogra"
        },
      ],
      active: false,
    },
    {
      name: "UNIDOS",
      link: song17,
      cover: cover ,
      artist: "Ultras Bleu Ines",
      audio: song17,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
        {
          lyric:"ya men nhar tla9ina"
        },
        {
          lyric:"yed we7da rah b9ina family "
        },
        {
          lyric:"Jem3tna UBI ziina"
        },
        {
          lyric:"hiya li tzehina a jamais"
        },
        {
          lyric:"ay wa7ed harebna l9ana solidaire"
        },
        {
          lyric:"UNIDOS oli sar ysiiir"
        },
        {
          lyric:"haja matfere9na li binatna kbiir"
        },
        {
          lyric:"3la chanha randiro la geurre"
        },
        {
          lyric:"Allez Bleu Ines Alleeez (x3) "
        },
      ],
      active: false,
    },
    
    {
      name: "CRAZY PUBLICO",
      link: song22,
      cover: cover ,
      artist: "Ultras Bleu Ines",
      audio: song22,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
        {
          lyric:"Les bleus bianco"
        },
        {
          lyric:"Crazy publico"
        },
        {
          lyric:"W3la zar9a nmootoo"
        },
        {
          lyric:"BI ra danger"
        },
        {
          lyric:"Kolchi ghaybouger"
        },
        {
          lyric:"Vamos les tiifooziii"
        },
        {
          lyric:"Wlalalalaaa lalalalaaa"
        },
        {
          lyric:"Laalalalalalaaa"
        },
        {
          lyric:"Ohoooo (x2)"
        },
        {
          lyric:"Ohooohoohoo"
        },
        {
          lyric:"Les blues ines (x2)"
        },
        {
          lyric:"Fiesta wlcarnavaal"
        },
        {
          lyric:"Lli ga3ed m3ana jamais yanssana"
        },
        {
          lyric:"Ecolna anormaaal"
        },
        {
          lyric:"Wlalalalalaaaa ohohohohoo (x2) "
        },
        {
          lyric:"W 2009 bdina l'historya"
        },
        {
          lyric:"Mn bkri zar9a gloria"
        },
        {
          lyric:"Ndiro lahbal ncha3lo niraan"
        },
        {
          lyric:"3la chanek ya lghalya"
        },
        {
          lyric:"Wlalalalaa (x2) "
        },
        {
          lyric:"Lalalalalaaa"
        },
        {
          lyric:"Ohohoho (x2)"
        },
        {
          lyric:"Ohohohohohooo"
        },
        
      ],
      active: false,
    },
    
    {
      name: "HONORE LBANDERA",
      link: song20,
      cover: cover ,
      artist: "Ultras Bleu Ines",
      audio: song20,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
        {
          lyric:"Lalalalalalala (x4)"
        },
        {
          lyric:"Wlaalalalalala lalalalalala  dalé dalé dalé ohhh (x2)"
        },
        {
          lyric:"Avanti ya lawlad honore lbandera"
        },
        {
          lyric:"Defendiw les couleurs wtnod lguerra"
        },
        {
          lyric:"Zar9a w bayda inchallah vencera"
        },
        {
          lyric:"Ubi zahya zoomer l camera"
        },
        {
          lyric:"Chaque partie cha3lin obligé "
        },
        {
          lyric:"Fumigène autorisé"
        },
        {
          lyric:"Mayakhla3na hetta 9anon"
        },
        {
          lyric:"Chaque journée zahwa mesmouma "
        },
        {
          lyric:"Loghat wellat mafhoma "
        },
        {
          lyric:"Differente fl3al9liya"
        },
        {
          lyric:"Lalalalla siempre fidile"
        },
        {
          lyric:"Lalalalala mi corazon"
        },
        {
          lyric:"Lalalalala ya chaghla bali"
        },
        {
          lyric:"Lalalalala vince per noi"
        },
        {
          lyric:"Wlaalalalalala lalalalalala  dalé dalé dalé ohhh (x2)"
        },
      ],  
      active: false,
    },
    
    {
      name: "F LA CURVA",
      link: song2,
      cover: cover ,
      artist: "Ultras Bleu Ines",
      audio: song2,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
        {
          lyric:"F la curva ytjem3o lee3zaraa"
        },
        {
          lyric:"Les bleus ines lyouma ndiro 7aalaa"
        },
        {
          lyric:"W fkol mkan 3omri wnti ray7aa"
        },
        {
          lyric:"W nwli m3ak nchaalah w nti raab7aa"
        },
        {
          lyric:"Aller aller aller les bleus alleeeer"
        },
        {
          lyric:"Chanter bouger vibrew sans arrêt"
        },
        {
          lyric:"W zar9a ntiya 3omri"
        },
        {
          lyric:"nro7 m3ak w ndeplacer"
        },
        {
          lyric:"Vamos inpt roma wla paris"
        },
        {
          lyric:"ohohoo ohouhoo ohohoo (x3)"
        },
        {
          lyric:"Allez les bleus"
        },
        {
          lyric:"ohohoo ohouhoo ohohoo (x3)"
        },
        {
          lyric:"Les bleus INEs"
        },
      ], 
      active: false,
    },
    
    // {
    //   name: "EMISTE YA DEMDOUMA",
    //   link: song3,
    //   cover: cover ,
    //   artist: "Ultras Bleu Ines",
    //   audio: song3,
    //   color: ["#06424D", "#A1C0EE"],
    //   id: uuidv4(),
    //   lyrics:[
    //     {
    //       lyric:"L’Emiste ya demdouma "
    //     },
    //     {
    //       lyric:"Ya wlid l 7oukouma"
    //     },
    //     {
    //       lyric:"Jamais tfout l7ouma Ra l colonel temma"
    //     },
    //     {
    //       lyric:"{x2}"
    //     },
    //     {
    //       lyric:"L’Enime 7télinaha Lguerra nwednaha"
    //     },
    //     {
    //       lyric:"Hebsouna f terrain"
    //     },
    //     {
    //       lyric:"3arfouna holigans"
    //     },
    //     {
    //       lyric:"Bleu INEs kamikas"
    //     },
    //     {
    //       lyric:"Oohoo (x3)"
    //     },
    //     {
    //       lyric:"Allez Allez"
    //     },
    //     {
    //       lyric:"Oohoo (x3)"
    //     },
    //     {
    //       lyric:"On va gagner"
    //     },
    //     {
    //       lyric:"Oohoo (x3)"
    //     },
    //     {
    //       lyric:"Hiya 3omri"
    //     },
    //     {
    //       lyric:"Nebghiha men soghri"
    //     },
    //     {
    //       lyric:"w m3aha ndéplacii"
    //     },
    //     {
    //       lyric:"L’EHTP mchina"
    //     },
    //     {
    //       lyric:"L3edyan 7arou fina"
    //     },
    //     {
    //       lyric:"Galou hadou chay3iin"
    //     },
    //     {
    //       lyric:"F niveau rah harbin (x2)"
    //     },
    //   ],
    //   active: false,
    // },
    
    // {
    //   name: "NSINI F DENYA",
    //   link: song4,
    //   cover: cover ,
    //   artist: "Ultras Bleu Ines",
    //   audio: song4,
    //   color: ["#06424D", "#A1C0EE"],
    //   id: uuidv4(),
    //   lyrics:[
    //     {
    //       lyric:"Nssini f denya l’avenir maysswach"
    //     },
    //     {
    //       lyric:"W ntiya 3iniya bla bik ma vie mat7lach"
    //     },
    //     {
    //       lyric:"Jouer (x2)"
    //     },
    //     {
    //       lyric:"ya ma cherie"
    //     },
    //     {
    //       lyric:"Dawwi 3linaa dawwi yak nti la lumiere"
    //     },
    //     {
    //       lyric:"Ya zar9aa ya 3omrii"
    //     },
    //     {
    //       lyric:"Jibouha ya lwlad"
    //     },
    //     {
    //       lyric:"7adrin f ga3 les journees kil3ada ra zahyin"
    //     },
    //     {
    //       lyric:"Mcha3linha f ga3 les ecoles flammat w femigeen"
    //     },
    //     {
    //       lyric:"W tifowat w craquageat b niveau ra hezat"
    //     },
    //     {
    //       lyric:"Bleu ine ra 7ekmat w fga3 journiyat"
    //     },
    //     {
    //       lyric:"W la la la la la la la la la la la laaa.."
    //     },
    //   ], 
    //   active: false,
    // },
    
    // {
    //   name: "NIKO L INSEA",
    //   link: song5,
    //   cover: cover ,
    //   artist: "Ultras Bleu Ines",
    //   audio: song5,
    //   color: ["#06424D", "#A1C0EE"],
    //   id: uuidv4(),
    //   lyrics:[
    //     {
    //       lyric:"Ohoooo ohooo voliamo l7oria "
    //     },
    //     {
    //       lyric:"Ohoooo ohooo 3a9lia 3onsoria"
    //     },
    //     {
    //       lyric:"Ohoooo ohooo niko l’insea"
    //     },
    //     {
    //       lyric:"O ghir rebbi y7kem fia"
    //     },
    //     {
    //       lyric:"O liberta nchlh lia "
    //     },
    //     {
    //       lyric:"Hada attack l l3edian li rana nkarhohom"
    //     },
    //     {
    //       lyric:"Hada message l7ssasasbi o bghina n3elmouhom"
    //     },
    //     {
    //       lyric:"Wlh jamais tweslona ka ndiro li 3lina"
    //     },
    //     {
    //       lyric:"Zar9a o lbayda nbghiwha nefdiwha b rwa7na"
    //     },
    //     {
    //       lyric:"Les bleu ine les kamikass jihad 3la les couleurs"
    //     },
    //     {
    //       lyric:"Rou7 m3ak l kol place  toujours avec honneur"
    //     },
    //     {
    //       lyric:"Ultras mentalite voliamo liberte"
    //     },
    //     {
    //       lyric:"BI chaque journee presente"
    //     },
    //   ],
    //   active: false,
    // },
    
    {
      name: "MI CORAZON",
      link: song6,
      cover: cover ,
      artist: "Ultras Bleu Ines",
      audio: song6,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
        {
          lyric:"Besmek ya zar9a ra nghani BI la grande"
        },
        {
          lyric:"W lwank yjriw f dmi w sakno fi 9albi"
        },
        {
          lyric:"Ntiya bouya ntiya khouya w ntiya saahbi"
        },
        {
          lyric:"W l3alm raabi"
        },
        {
          lyric:"Mi corazon ki netfeker crackage colommbiii"
        },
        {
          lyric:"Hejna 3lihom f 2016 f l’ehtp"
        },
        {
          lyric:"Rani meghroum bik ya la grandé l’inpt"
        },
        {
          lyric:"Les bleu avantéééé"
        },
        {
          lyric:"Joueezzzz (x2) "
        },
        {
          lyric:"Les bleu ines tfera7 l9louuuub"
        },
        {
          lyric:"On vaaaaaaa gagnéééé"
        },
        {
          lyric:"W l festival f kol écoooole"
        },
        {
          lyric:"Allé yalé yalé yalézuré (x3)"
        },
        {
          lyric:"Les bleus avantééé "
        },
        {
          lyric:"Joueezzzz"
        },
      ], 
      active: false,
    },
    
    {
      name: "RYE7 YA L BNAY",
      link: song7,
      cover: cover ,
      artist: "Ultras Bleu Ines",
      audio: song7,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
        {
          lyric:"ohhhh rayyeh ya lbennay"
        },
        {
            lyric:"tferrej wskoot bleu INEs rah jaw"
        },
        {
            lyric:"(x2)"
        },
        {
            lyric:"w eeehhh rayyeh ya lbennay"
        },
        {
            lyric:"w 3 mars journiyat salaaw "
        },
        {
            lyric:"w eeehhh rayyeh ya lbennay"
        },
        {
            lyric:"w 2016 jaamais tansaaat"
        },
        {
            lyric:"Bleus INEs makayench m3aamen"
        },
        {
            lyric:"Blues INEs bennaya ghir demaadem"
        },
        {
            lyric:"(x2)"
        },
        {
            lyric:"way way way lowkan 3endi lafrada"
        },
        {
            lyric:"way way way wntiri fl3ennaaba"
        },
        {
            lyric:"(x2)"
        }
      ], 
      active: false,
    },
    
    {
      name: "ZER9A MI AMORE",
      link: song8,
      cover: cover ,
      artist: "Ultras Bleu Ines",
      audio: song8,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
        {
          lyric:"Zar9a mi amore (clap x5)"
      },
      {
          lyric:"wakha yasra lli saarr (clap x5)"
      },
      {
          lyric:"amoure à l'infinii (clap x5)"
      },
      {
          lyric:"wm3ak hetal la9baarr (clap x5)"
      },
      {
          lyric:"wmn seghri passioonnéee (clap x5)"
      },
      {
          lyric:"maywa99efna 9aanoon (clap x5)"
      },
      {
          lyric:"ya zaahi wma3la baalii (clap x5)"
      },
      {
          lyric:"winma mchina ndiro lhoooooool"
      },
      {
          lyric:"Allez allez allezzzz (x4)"
      }
      ],
      active: false,
    },
    
    {
      name: "LYUM KI L3ADA",
      cover: cover ,
      artist: "Ultras Bleu Ines",
      audio: song9,
      link: song9,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
        {
          lyric:"wlyom kil3aada mnl3irfan jina (clap x3)"
      },
      {
          lyric:"zar9a wlbaayda w3liha ghannina (clap x3)"
      },
      {
          lyric:"m3a l'INPT ndiro lli 3lina (clap x3)"
      },
      {
          lyric:"jamais twaslooona ghir fotoonaa (clap x3)"
      },
      {
          lyric:"les bleus INEs hiya lli tzahhina (clap x3)"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"Allez allez allez allez allez (clap x3) (x3)"
      },
      {
          lyric:"les bleus INEs jawkom mn l'INPT"
      },
      ],
      active: false,
    },
    
    
    
    {
      name: "BI MECORASSON",
      cover: cover ,
      link: song11,
      artist: "Ultras Bleu Ines",
      audio: song11,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
        {
          lyric:"BI mi corazon"
      },
      {
          lyric:"w3liha rani nghanni"
      },
      {
          lyric:"mi vida mi passion"
      },
      {
          lyric:"whwaha rah hebbelnii"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"bouugez bouugez"
      },
      {
          lyric:"lalalallallallalla"
      },
      {
          lyric:"(x2)"
      },
      ],
      active: false,
    },
    
    {
      name: "COURAGE",
      cover: cover ,
      link: song12,
      artist: "Ultras Bleu Ines",
      audio: song12,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
      {
          lyric:"Couuuurage nsarna ya reebbi"
      },
      {
          lyric:"BI lyoma lli tzahhiinaa"
      },
      {
          lyric:"paaaquetage rayeh mtriiper"
      },
      {
          lyric:"hetta chi journée makhlliinaaa"
      },
      {
          lyric:"kif casa kif rbat"
      },
      {
          lyric:"wakha tachbak ratt"
      },
      {
          lyric:"mayhammonach les exaams maykhaal3ona"
      },
      {
          lyric:"jamais nghib nhar"
      },
      {
          lyric:"m3ak hetta la9bar"
      },
      {
          lyric:"mn écoole l écoole y3aarfona"
      },
      ],
      active: false,
    },
    
    {
      name: "ZER9A W L BAYDA",
      cover: cover ,
      link: song13,
      artist: "Ultras Bleu Ines",
      audio: song13,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
        {
          lyric:"Zaaar9a wlbaayda"
      },
      {
          lyric:"3liha rah majmou3iin"
      },
      {
          lyric:"winma rahet (clap x2)"
      },
      {
          lyric:"nroh m3aha (clap x2)"
      },
      {
          lyric:"jamais nsamhoo fiiihaa (clap x2)"
      },
      {
          lyric:"aamoure éternel (clap x2)"
      },
      {
          lyric:"biha rah yajmaa3naaa (clap x2)"
      },
      {
          lyric:"l'INPT (clap x2)"
      },
      {
          lyric:"chaghla bali (clap x2)"
      },
      {
          lyric:"l3icha fiha tahlaa liii (clap x2)"
      },
      {
          lyric:"oohohohoho (x5)"
      },
      ],
      active: false,
    },
    
    {
      name: "OBRIGADO CAMPIONE",
      cover: cover ,
      link: song14,
      artist: "Ultras Bleu Ines",
      audio: song14,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
      {
          lyric:"Obrigaado campeone"
      },
      {
          lyric:"nchallah ziiina"
      },
      {
          lyric:"ncha3lo denya ndiro lhool"
      },
      {
          lyric:"zar9a tzahhinaa"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"Oooh bleu ine"
      },
      {
          lyric:"mahbool ma3la baalo"
      },
      {
          lyric:"Oooh bleu ine"
      },
      {
          lyric:"f journée kolchi dyaaaloo"
      },
      {
          lyric:"(x2)"
      }
      ],
      active: false,
    },
    
    {
      name: "VAMOS",
      cover: cover ,
      link: song15,
      artist: "Ultras Bleu Ines",
      audio: song15,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
      {
          lyric:"lalallalla vamos"
      },
      {
          lyric:"lalallalla chicos"
      },
      {
          lyric:"lalallalla laa laa laa"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"ohoho oho oo oho oho oo oho oho oo (x2)"
      },
      ],
      active: false,
    },
    
    {
      name: "JINAKOM JINA",
      cover: cover ,
      link: song16,
      artist: "Ultras Bleu Ines",
      audio: song16,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
      {
          lyric:"Allez allez"
      },
      {
          lyric:"jinakom jina"
      },
      {
          lyric:"l guerra wrwina"
      },
      {
          lyric:"UBI lli tzaahhiina"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"bzaaf nabghik wya zer9a"
      },
      {
          lyric:"ya raayeh win raayhaa"
      },
      {
          lyric:"ntiya 3amri ntiya ma viee"
      },
      {
          lyric:"nahwaak ana mn sooghriii"
      },
      ],
      active: false,
    },
    
    {
      name: "SANS ARRET",
      cover: cover ,
      link: song18,
      artist: "Ultras Bleu Ines",
      audio: song18,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
      {
          lyric:"Ooooohéééé ohoéhoooo"
      },
      {
          lyric:"Lalalalalalalalalalalaaaaa"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"Aléaléaléaléo (clap x2)"
      },
      {
          lyric:"Aléaléaléaléo (clap x2)"
      },
      {
          lyric:"Aléaléaléaléoooooooooooooooo (clap x2)"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"Ooooohééééohoéhoooo"
      },
      {
          lyric:"bouugez sans arrêt"
      },
      {
          lyric:"aallez ndiro l courage"
      },
      {
          lyric:"wncha3loha fkol mkaan"
      },
      {
          lyric:"mn kol centre jina (clap x2)"
      },
      {
          lyric:"l'INPT bghina (clap x2)"
      },
      {
          lyric:"les Bleu INEs hiya lli tzahhinaa"
      },
      {
          lyric:"(x2)"
      }
      ],
      active: false,
    },
    
    {
      name: "LA STORIA GRANDE",
      cover: cover ,
      link: song19,
      artist: "Ultras Bleu Ines",
      audio: song19,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
      {
          lyric:"les Bleus INEs à vie fidellé"
      },
      {
          lyric:"vamos magica mi amoore"
      },
      {
          lyric:"zar9a wbayda ya sakna baalii"
      },
      {
          lyric:"avanti manwalliwch lor"
      },
      {
          lyric:"3a9liya matadooor"
      },
      {
          lyric:"les bleus INEs la storia graande"
      },
      {
          lyric:"te quiero mi corazzoon"
      },
      {
          lyric:"wa3lik ya zer9a raani ngheeenni"
      },
      {
          lyric:"wmayakhla3na hetta 9anon"
      },
      {
          lyric:"wchkon yahbasna chkoooon"
      },
      {
          lyric:"allo allo cha3lat lahrii9aa"
      },
      {
          lyric:"wm3a signal pyro shooow"
      },
      {
          lyric:"INE farhan fkol d9iii9aa"
      },
      {
          lyric:"zoomer l camera kolchi flou"
      },
      {
          lyric:"UBI siamo noi"
      },
      {
          lyric:"Eh dallé dallé dallé daaallé"
      },
      {
          lyric:"Eh dallé dallé dallé oooh"
      },
      {
          lyric:"Eh dallé dallé dallé daaallé"
      },
      {
          lyric:"Eh dallé dallé dallé oooh"
      },
      {
          lyric:"Daaallé oooh"
      },
      ],
      active: false,
    },
    
    {
      name: "NASSI DENYA",
      cover: cover ,
      link: song21,
      artist: "Ultras Bleu Ines",
      audio: song21,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
      {
          lyric:"naassi denya belli fiha"
      },
      {
          lyric:"nassi denya mataswach"
      },
      {
          lyric:"zar9a wbeyda lli nebghiha"
      },
      {
          lyric:"biha madroguer wmanas7ach"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"hiya doookha"
      },
      {
          lyric:"hiya l hiroine"
      },
      {
          lyric:"hiya hyaaatna"
      },
      {
          lyric:"lli biha maghromin"
      },
      {
          lyric:"(x2)"
      },
      {
          lyric:"ooh oho aya yo oo (x2)"
      },
      {
          lyric:"hadra lmentalita f journée mfixer bachi"
      },
      {
          lyric:"ultras style de vita m3ak ya zer9a jamais n lâcher"
      },
      {
          lyric:"capo f yeddo mégaphone"
      },
      {
          lyric:"wana netsenna f départ"
      },
      {
          lyric:"kinasma3 kalmat BLEUS INES"
      },
      {
          lyric:"ma3labalich nach3al nar"
      },
      {
          lyric:"ooh oho aya yo oo (x2)"
      },
      ],
      active: false,
    },
    
    {
      name: "SENZA FINE ",
      cover: cover ,
      link: song23,
      artist: "Ultras Bleu Ines",
      audio: song23,
      color: ["#06424D", "#A1C0EE"],
      id: uuidv4(),
      lyrics:[
      {
          lyric:"Aaamouure biha yajma3na"
      },
      {
          lyric:"w3la chaanha ndiro la gueeere"
      },
      {
          lyric:"Bleus INEs hiya lli tzahhina"
      },
      {
          lyric:"jamais nansaw les souveniiirs"
      },
      {
          lyric:"w 2009 Bleus INEs t2assat"
      },
      {
          lyric:"wfga3 les journées raha dowaaat"
      },
      {
          lyric:"hkaaaya 3amra ibda3at"
      },
      {
          lyric:"3achna m3aha dikrayaat (x2)"
      },
      {
          lyric:"w l'hiiistoire daroha rijaal"
      },
      {
          lyric:"kola wfin laahto la9daaar"
      },
      {
          lyric:"w seeenza fine w mazaal"
      },
      {
          lyric:"ya rebbi towal la3maaar"
      },
      {
          lyric:"f deeenya maydom lhaal"
      },
      {
          lyric:"jaamais nansaaw lli saaar"
      },
      {
          lyric:"zaaar9a toujours flbaal"
      },
      {
          lyric:"wnsorha ya l3ali ya settaaarr (x2)"
      },
      {
          lyric:"eeehooo eh allez oh allez ya allez ya allez allez ooh (x4)"
      },
      ],
      active: false,
    },

  ];
}

export default chillHop;
