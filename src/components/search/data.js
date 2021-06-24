// Sounds
import verhuizenSound from '../../sound/verhuizen.mp3';
import verhuizenMoreSound from '../../sound/verhuizen-more-info.mp3';
import huisvestingsvergunningSound from '../../sound/huisvestigingsvergunning.mp3';
import huisvestingsvergunningMoreSound from '../../sound/huisvestigingsvergunning-more-info.mp3';
import eerstevestigingSound from '../../sound/eerstevestiging.mp3';
import eerstevestigingMoreSound from '../../sound/eerstevestiging-more-info.mp3';
import buitenlandSound from '../../sound/buitenland.mp3';
import buitenlandMoreSound from '../../sound/buitenland-more-info.mp3';
import huisnummerSound from '../../sound/huisnummer.mp3';
import huisnummerMoreSound from '../../sound/huisnummer-more-info.mp3';
import briefadresSound from '../../sound/briefadres.mp3';
import briefadresMoreSound from '../../sound/briefadres-more-info.mp3';
// Icons
import verhuisImage from '../../img/verhuizen.png';
import briefadresImage from '../../img/extra/briefadres.png';
import huisnummerImage from '../../img/extra/huisnummer-aanvraag.png';
import eerstevestingImage from '../../img/extra/huisvesting-nederland.png';
import huisvestingImage from '../../img/extra/huisvesting.png';
import buitenlandImage from '../../img/extra/vetrek-buitenland.png';

const Data = [
  {
    "title": "Verhuizing doorgeven",
    "description": "Verhuist u binnen of naar Rotterdam? Zorgt u er dan voor dat u binnen vijf dagen na de verhuisdatum uw nieuwe adres doorgeeft.",
    "moreinfo": "In sommige wijken heeft u een huisvestingsvergunning (HVV) nodig. Doe eerst de postcodecheck om te kijken of uw nieuwe woning in een wijk ligt waarvoor een huisvestingsvergunning nodig is. Als u een huisvestingsvergunning nodig heeft, dan vraagt u deze aan op de pagina Verhuizen naar gebied met huisvestingsvergunning. U geeft bij de aanvraag van de vergunning gelijk uw verhuizing door.",
    "image": verhuisImage,
    "link": "https://www.rotterdam.nl/loket/verhuizing-doorgeven/",
    "sound": verhuizenSound,
    "soundlong": verhuizenMoreSound,
    "soundtime": 11,
  },
  {
    "title": "Verhuizen naar gebied met huisvestingsvergunning",
    "description": "Verhuist u naar een woning waar u een huisvestingsvergunning voor nodig heeft? Dan vraagt u gelijk een vergunning aan bij uw verhuisaangifte.",
    "moreinfo": "In de postcodechecker ziet u of uw nieuwe woning in een wijk of straat ligt waarvoor een huisvestingsvergunning nodig is. U kunt uw verhuisaangifte en vergunningaanvraag op dit moment alleen online indienen.",
    "image": huisvestingImage,
    "link": "https://www.rotterdam.nl/loket/huisvestingsvergunning",
    "sound": huisvestingsvergunningSound,
    "soundlong": huisvestingsvergunningMoreSound,
    "soundtime": 14,
  },
  {
    "title": "Eerste vestiging",
    "description": "Komt u vanuit het buitenland voor langer dan 4 maanden in nederland wonen? dan moet u zelf langskomen bij de gemeente en zich in laten schrijven. dit heet een 'eerste vestiging'.",
    "moreinfo": "Heeft u de nationaliteit van een land buiten de Europese Unie? Dan vraagt u eerst een verblijfsvergunning aan bij de Immigratie- en naturalisatiedienst (IND). U kunt zich inschrijven als u de verblijfsvergunning heeft.",
    "image": eerstevestingImage,
    "link": "https://www.rotterdam.nl/loket/eerste-vestiging/",
    "sound": eerstevestigingSound,
    "soundlong": eerstevestigingMoreSound,
    "soundtime": 15,
  },
  {
    "title": "Vertrek naar het buitenland",
    "description": "Verhuist u naar het buitenland voor een periode langer dan 8 maanden? Zorg ervoor dat u zich uitschrijft bij de gemeente.",
    "moreinfo": "U kunt tegelijk met het vertrek van uzelf het vertrek doorgeven van hieronder genoemde personen. Deze personen moeten wel bij u op hetzelfde adres staan ingeschreven. *uw echtgenoot of echtgenote *uw geregistreerde partner *uw kinderen *uw ouders Heeft u een samenlevingscontract? Dan geven u en uw partner ieder apart het vertrek naar het buitenland door.",
    "image": buitenlandImage,
    "link": "https://www.rotterdam.nl/loket/vertrek-naar-buitenland/",
    "sound": buitenlandSound,
    "soundlong": buitenlandMoreSound,
    "soundtime": 11,
  },
  {
    "title": "Huisnummer aanvragen of intrekken",
    "description": "U kunt zelf een huisnummer aanvragen bij de gemeente als er een adres ontstaan of vervallen is zonder dat daar een omgevingsvergunning voor nodig is.",
    "moreinfo": "U kunt (een wijziging, splitsing, samenvoeging of intrekking van) een huisnummer op 2 manieren aanvragen bij de afdeling Basisinformatie van de gemeente.",
    "image": huisnummerImage,
    "link": "https://www.rotterdam.nl/loket/huisnummer/",
    "sound": huisnummerSound,
    "soundlong": huisnummerMoreSound,
    "soundtime": 16,
  },
  {
    "title": "Briefadres",
    "description": "Heeft u tijdelijk geen woonplek? Verblijft u in een instelling? Of bent u één keer korter dan 8 maanden in het buitenland? Vraag dan een briefadres in de aan.",
    "moreinfo": "Een briefadres kan het particuliere adres van een kennis of een familielid zijn die in Rotterdam is ingeschreven. Deze persoon wil voor uw post zorgen. U kunt een briefadres op een particulier adres online of per post aanvragen.",
    "image": briefadresImage,
    "link": "https://www.rotterdam.nl/loket/briefadres/",
    "sound": briefadresSound,
    "soundlong": briefadresMoreSound,
    "soundtime": 13,
  },
];

export default Data;