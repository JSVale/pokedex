interface Color {
  id: number;
  name: string;
  pokemon_species: Array<{
    name: string;
    url: string;
  }>;
}

const colors = [
  {
    id: 1,
    name: "black",
    pokemon_species: [
      {
        name: "snorlax",
        url: "https://pokeapi.co/api/v2/pokemon-species/143/",
      },
      {
        name: "murkrow",
        url: "https://pokeapi.co/api/v2/pokemon-species/198/",
      },
      { name: "unown", url: "https://pokeapi.co/api/v2/pokemon-species/201/" },
      {
        name: "sneasel",
        url: "https://pokeapi.co/api/v2/pokemon-species/215/",
      },
      {
        name: "umbreon",
        url: "https://pokeapi.co/api/v2/pokemon-species/197/",
      },
      {
        name: "houndour",
        url: "https://pokeapi.co/api/v2/pokemon-species/228/",
      },
      {
        name: "houndoom",
        url: "https://pokeapi.co/api/v2/pokemon-species/229/",
      },
      { name: "mawile", url: "https://pokeapi.co/api/v2/pokemon-species/303/" },
      { name: "spoink", url: "https://pokeapi.co/api/v2/pokemon-species/325/" },
      {
        name: "seviper",
        url: "https://pokeapi.co/api/v2/pokemon-species/336/",
      },
      {
        name: "shuppet",
        url: "https://pokeapi.co/api/v2/pokemon-species/353/",
      },
      {
        name: "duskull",
        url: "https://pokeapi.co/api/v2/pokemon-species/355/",
      },
      {
        name: "claydol",
        url: "https://pokeapi.co/api/v2/pokemon-species/344/",
      },
      {
        name: "banette",
        url: "https://pokeapi.co/api/v2/pokemon-species/354/",
      },
      {
        name: "dusclops",
        url: "https://pokeapi.co/api/v2/pokemon-species/356/",
      },
      { name: "chatot", url: "https://pokeapi.co/api/v2/pokemon-species/441/" },
      {
        name: "munchlax",
        url: "https://pokeapi.co/api/v2/pokemon-species/446/",
      },
      {
        name: "honchkrow",
        url: "https://pokeapi.co/api/v2/pokemon-species/430/",
      },
      {
        name: "giratina",
        url: "https://pokeapi.co/api/v2/pokemon-species/487/",
      },
      {
        name: "darkrai",
        url: "https://pokeapi.co/api/v2/pokemon-species/491/",
      },
      {
        name: "blitzle",
        url: "https://pokeapi.co/api/v2/pokemon-species/522/",
      },
      {
        name: "weavile",
        url: "https://pokeapi.co/api/v2/pokemon-species/461/",
      },
      {
        name: "dusknoir",
        url: "https://pokeapi.co/api/v2/pokemon-species/477/",
      },
      {
        name: "zebstrika",
        url: "https://pokeapi.co/api/v2/pokemon-species/523/",
      },
      {
        name: "sigilyph",
        url: "https://pokeapi.co/api/v2/pokemon-species/561/",
      },
      { name: "yamask", url: "https://pokeapi.co/api/v2/pokemon-species/562/" },
      {
        name: "lampent",
        url: "https://pokeapi.co/api/v2/pokemon-species/608/",
      },
      { name: "zekrom", url: "https://pokeapi.co/api/v2/pokemon-species/644/" },
      {
        name: "scatterbug",
        url: "https://pokeapi.co/api/v2/pokemon-species/664/",
      },
      { name: "spewpa", url: "https://pokeapi.co/api/v2/pokemon-species/665/" },
      {
        name: "pikipek",
        url: "https://pokeapi.co/api/v2/pokemon-species/731/",
      },
      {
        name: "salandit",
        url: "https://pokeapi.co/api/v2/pokemon-species/757/",
      },
      {
        name: "trumbeak",
        url: "https://pokeapi.co/api/v2/pokemon-species/732/",
      },
      {
        name: "toucannon",
        url: "https://pokeapi.co/api/v2/pokemon-species/733/",
      },
      {
        name: "salazzle",
        url: "https://pokeapi.co/api/v2/pokemon-species/758/",
      },
      {
        name: "pyukumuku",
        url: "https://pokeapi.co/api/v2/pokemon-species/771/",
      },
      {
        name: "xurkitree",
        url: "https://pokeapi.co/api/v2/pokemon-species/796/",
      },
      {
        name: "guzzlord",
        url: "https://pokeapi.co/api/v2/pokemon-species/799/",
      },
      {
        name: "necrozma",
        url: "https://pokeapi.co/api/v2/pokemon-species/800/",
      },
      {
        name: "rolycoly",
        url: "https://pokeapi.co/api/v2/pokemon-species/837/",
      },
      { name: "carkol", url: "https://pokeapi.co/api/v2/pokemon-species/838/" },
      {
        name: "coalossal",
        url: "https://pokeapi.co/api/v2/pokemon-species/839/",
      },
      {
        name: "spectrier",
        url: "https://pokeapi.co/api/v2/pokemon-species/897/",
      },
      {
        name: "chandelure",
        url: "https://pokeapi.co/api/v2/pokemon-species/609/",
      },
    ],
  },
  {
    id: 2,
    name: "blue",
    pokemon_species: [
      { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon-species/7/" },
      {
        name: "nidoran-f",
        url: "https://pokeapi.co/api/v2/pokemon-species/29/",
      },
      { name: "oddish", url: "https://pokeapi.co/api/v2/pokemon-species/43/" },
      { name: "poliwag", url: "https://pokeapi.co/api/v2/pokemon-species/60/" },
      {
        name: "tentacool",
        url: "https://pokeapi.co/api/v2/pokemon-species/72/",
      },
      {
        name: "wartortle",
        url: "https://pokeapi.co/api/v2/pokemon-species/8/",
      },
      {
        name: "blastoise",
        url: "https://pokeapi.co/api/v2/pokemon-species/9/",
      },
      {
        name: "nidorina",
        url: "https://pokeapi.co/api/v2/pokemon-species/30/",
      },
      {
        name: "nidoqueen",
        url: "https://pokeapi.co/api/v2/pokemon-species/31/",
      },
      { name: "gloom", url: "https://pokeapi.co/api/v2/pokemon-species/44/" },
      { name: "golduck", url: "https://pokeapi.co/api/v2/pokemon-species/55/" },
      {
        name: "poliwhirl",
        url: "https://pokeapi.co/api/v2/pokemon-species/61/",
      },
      {
        name: "poliwrath",
        url: "https://pokeapi.co/api/v2/pokemon-species/62/",
      },
      {
        name: "tentacruel",
        url: "https://pokeapi.co/api/v2/pokemon-species/73/",
      },
      {
        name: "tangela",
        url: "https://pokeapi.co/api/v2/pokemon-species/114/",
      },
      { name: "horsea", url: "https://pokeapi.co/api/v2/pokemon-species/116/" },
      { name: "lapras", url: "https://pokeapi.co/api/v2/pokemon-species/131/" },
      {
        name: "omanyte",
        url: "https://pokeapi.co/api/v2/pokemon-species/138/",
      },
      {
        name: "articuno",
        url: "https://pokeapi.co/api/v2/pokemon-species/144/",
      },
      {
        name: "dratini",
        url: "https://pokeapi.co/api/v2/pokemon-species/147/",
      },
      { name: "seadra", url: "https://pokeapi.co/api/v2/pokemon-species/117/" },
      {
        name: "gyarados",
        url: "https://pokeapi.co/api/v2/pokemon-species/130/",
      },
      {
        name: "vaporeon",
        url: "https://pokeapi.co/api/v2/pokemon-species/134/",
      },
      {
        name: "omastar",
        url: "https://pokeapi.co/api/v2/pokemon-species/139/",
      },
      {
        name: "dragonair",
        url: "https://pokeapi.co/api/v2/pokemon-species/148/",
      },
      {
        name: "totodile",
        url: "https://pokeapi.co/api/v2/pokemon-species/158/",
      },
      {
        name: "chinchou",
        url: "https://pokeapi.co/api/v2/pokemon-species/170/",
      },
      { name: "wooper", url: "https://pokeapi.co/api/v2/pokemon-species/194/" },
      {
        name: "heracross",
        url: "https://pokeapi.co/api/v2/pokemon-species/214/",
      },
      {
        name: "croconaw",
        url: "https://pokeapi.co/api/v2/pokemon-species/159/",
      },
      {
        name: "feraligatr",
        url: "https://pokeapi.co/api/v2/pokemon-species/160/",
      },
      {
        name: "lanturn",
        url: "https://pokeapi.co/api/v2/pokemon-species/171/",
      },
      { name: "marill", url: "https://pokeapi.co/api/v2/pokemon-species/183/" },
      {
        name: "azumarill",
        url: "https://pokeapi.co/api/v2/pokemon-species/184/",
      },
      {
        name: "jumpluff",
        url: "https://pokeapi.co/api/v2/pokemon-species/189/",
      },
      {
        name: "quagsire",
        url: "https://pokeapi.co/api/v2/pokemon-species/195/",
      },
      {
        name: "wobbuffet",
        url: "https://pokeapi.co/api/v2/pokemon-species/202/",
      },
      { name: "phanpy", url: "https://pokeapi.co/api/v2/pokemon-species/231/" },
      {
        name: "suicune",
        url: "https://pokeapi.co/api/v2/pokemon-species/245/",
      },
      { name: "mudkip", url: "https://pokeapi.co/api/v2/pokemon-species/258/" },
      {
        name: "taillow",
        url: "https://pokeapi.co/api/v2/pokemon-species/276/",
      },
      {
        name: "surskit",
        url: "https://pokeapi.co/api/v2/pokemon-species/283/",
      },
      {
        name: "azurill",
        url: "https://pokeapi.co/api/v2/pokemon-species/298/",
      },
      {
        name: "kingdra",
        url: "https://pokeapi.co/api/v2/pokemon-species/230/",
      },
      {
        name: "marshtomp",
        url: "https://pokeapi.co/api/v2/pokemon-species/259/",
      },
      {
        name: "swampert",
        url: "https://pokeapi.co/api/v2/pokemon-species/260/",
      },
      {
        name: "swellow",
        url: "https://pokeapi.co/api/v2/pokemon-species/277/",
      },
      {
        name: "masquerain",
        url: "https://pokeapi.co/api/v2/pokemon-species/284/",
      },
      {
        name: "loudred",
        url: "https://pokeapi.co/api/v2/pokemon-species/294/",
      },
      {
        name: "exploud",
        url: "https://pokeapi.co/api/v2/pokemon-species/295/",
      },
      {
        name: "meditite",
        url: "https://pokeapi.co/api/v2/pokemon-species/307/",
      },
      {
        name: "wailmer",
        url: "https://pokeapi.co/api/v2/pokemon-species/320/",
      },
      { name: "swablu", url: "https://pokeapi.co/api/v2/pokemon-species/333/" },
      { name: "wynaut", url: "https://pokeapi.co/api/v2/pokemon-species/360/" },
      { name: "spheal", url: "https://pokeapi.co/api/v2/pokemon-species/363/" },
      {
        name: "clamperl",
        url: "https://pokeapi.co/api/v2/pokemon-species/366/",
      },
      { name: "bagon", url: "https://pokeapi.co/api/v2/pokemon-species/371/" },
      { name: "beldum", url: "https://pokeapi.co/api/v2/pokemon-species/374/" },
      {
        name: "sharpedo",
        url: "https://pokeapi.co/api/v2/pokemon-species/319/",
      },
      {
        name: "wailord",
        url: "https://pokeapi.co/api/v2/pokemon-species/321/",
      },
      {
        name: "altaria",
        url: "https://pokeapi.co/api/v2/pokemon-species/334/",
      },
      {
        name: "whiscash",
        url: "https://pokeapi.co/api/v2/pokemon-species/340/",
      },
      {
        name: "chimecho",
        url: "https://pokeapi.co/api/v2/pokemon-species/358/",
      },
      { name: "sealeo", url: "https://pokeapi.co/api/v2/pokemon-species/364/" },
      {
        name: "walrein",
        url: "https://pokeapi.co/api/v2/pokemon-species/365/",
      },
      {
        name: "huntail",
        url: "https://pokeapi.co/api/v2/pokemon-species/367/",
      },
      {
        name: "salamence",
        url: "https://pokeapi.co/api/v2/pokemon-species/373/",
      },
      { name: "metang", url: "https://pokeapi.co/api/v2/pokemon-species/375/" },
      { name: "regice", url: "https://pokeapi.co/api/v2/pokemon-species/378/" },
      { name: "latios", url: "https://pokeapi.co/api/v2/pokemon-species/381/" },
      { name: "kyogre", url: "https://pokeapi.co/api/v2/pokemon-species/382/" },
      { name: "piplup", url: "https://pokeapi.co/api/v2/pokemon-species/393/" },
      { name: "shinx", url: "https://pokeapi.co/api/v2/pokemon-species/403/" },
      {
        name: "cranidos",
        url: "https://pokeapi.co/api/v2/pokemon-species/408/",
      },
      { name: "gible", url: "https://pokeapi.co/api/v2/pokemon-species/443/" },
      { name: "riolu", url: "https://pokeapi.co/api/v2/pokemon-species/447/" },
      {
        name: "croagunk",
        url: "https://pokeapi.co/api/v2/pokemon-species/453/",
      },
      {
        name: "prinplup",
        url: "https://pokeapi.co/api/v2/pokemon-species/394/",
      },
      {
        name: "empoleon",
        url: "https://pokeapi.co/api/v2/pokemon-species/395/",
      },
      { name: "luxio", url: "https://pokeapi.co/api/v2/pokemon-species/404/" },
      { name: "luxray", url: "https://pokeapi.co/api/v2/pokemon-species/405/" },
      {
        name: "rampardos",
        url: "https://pokeapi.co/api/v2/pokemon-species/409/",
      },
      { name: "gabite", url: "https://pokeapi.co/api/v2/pokemon-species/444/" },
      {
        name: "garchomp",
        url: "https://pokeapi.co/api/v2/pokemon-species/445/",
      },
      {
        name: "lucario",
        url: "https://pokeapi.co/api/v2/pokemon-species/448/",
      },
      {
        name: "finneon",
        url: "https://pokeapi.co/api/v2/pokemon-species/456/",
      },
      {
        name: "mantyke",
        url: "https://pokeapi.co/api/v2/pokemon-species/458/",
      },
      { name: "azelf", url: "https://pokeapi.co/api/v2/pokemon-species/482/" },
      { name: "phione", url: "https://pokeapi.co/api/v2/pokemon-species/489/" },
      {
        name: "manaphy",
        url: "https://pokeapi.co/api/v2/pokemon-species/490/",
      },
      {
        name: "oshawott",
        url: "https://pokeapi.co/api/v2/pokemon-species/501/",
      },
      {
        name: "panpour",
        url: "https://pokeapi.co/api/v2/pokemon-species/515/",
      },
      {
        name: "roggenrola",
        url: "https://pokeapi.co/api/v2/pokemon-species/524/",
      },
      { name: "woobat", url: "https://pokeapi.co/api/v2/pokemon-species/527/" },
      {
        name: "lumineon",
        url: "https://pokeapi.co/api/v2/pokemon-species/457/",
      },
      {
        name: "tangrowth",
        url: "https://pokeapi.co/api/v2/pokemon-species/465/",
      },
      {
        name: "glaceon",
        url: "https://pokeapi.co/api/v2/pokemon-species/471/",
      },
      { name: "dewott", url: "https://pokeapi.co/api/v2/pokemon-species/502/" },
      {
        name: "samurott",
        url: "https://pokeapi.co/api/v2/pokemon-species/503/",
      },
      {
        name: "simipour",
        url: "https://pokeapi.co/api/v2/pokemon-species/516/",
      },
      {
        name: "boldore",
        url: "https://pokeapi.co/api/v2/pokemon-species/525/",
      },
      {
        name: "gigalith",
        url: "https://pokeapi.co/api/v2/pokemon-species/526/",
      },
      {
        name: "swoobat",
        url: "https://pokeapi.co/api/v2/pokemon-species/528/",
      },
      {
        name: "tympole",
        url: "https://pokeapi.co/api/v2/pokemon-species/535/",
      },
      { name: "sawk", url: "https://pokeapi.co/api/v2/pokemon-species/539/" },
      {
        name: "tirtouga",
        url: "https://pokeapi.co/api/v2/pokemon-species/564/",
      },
      {
        name: "ducklett",
        url: "https://pokeapi.co/api/v2/pokemon-species/580/",
      },
      {
        name: "karrablast",
        url: "https://pokeapi.co/api/v2/pokemon-species/588/",
      },
      { name: "elgyem", url: "https://pokeapi.co/api/v2/pokemon-species/605/" },
      {
        name: "palpitoad",
        url: "https://pokeapi.co/api/v2/pokemon-species/536/",
      },
      {
        name: "seismitoad",
        url: "https://pokeapi.co/api/v2/pokemon-species/537/",
      },
      {
        name: "carracosta",
        url: "https://pokeapi.co/api/v2/pokemon-species/565/",
      },
      {
        name: "eelektrik",
        url: "https://pokeapi.co/api/v2/pokemon-species/603/",
      },
      {
        name: "eelektross",
        url: "https://pokeapi.co/api/v2/pokemon-species/604/",
      },
      {
        name: "cryogonal",
        url: "https://pokeapi.co/api/v2/pokemon-species/615/",
      },
      { name: "deino", url: "https://pokeapi.co/api/v2/pokemon-species/633/" },
      {
        name: "cobalion",
        url: "https://pokeapi.co/api/v2/pokemon-species/638/",
      },
      {
        name: "thundurus",
        url: "https://pokeapi.co/api/v2/pokemon-species/642/",
      },
      {
        name: "froakie",
        url: "https://pokeapi.co/api/v2/pokemon-species/656/",
      },
      { name: "inkay", url: "https://pokeapi.co/api/v2/pokemon-species/686/" },
      {
        name: "zweilous",
        url: "https://pokeapi.co/api/v2/pokemon-species/634/",
      },
      {
        name: "hydreigon",
        url: "https://pokeapi.co/api/v2/pokemon-species/635/",
      },
      {
        name: "frogadier",
        url: "https://pokeapi.co/api/v2/pokemon-species/657/",
      },
      {
        name: "greninja",
        url: "https://pokeapi.co/api/v2/pokemon-species/658/",
      },
      {
        name: "meowstic",
        url: "https://pokeapi.co/api/v2/pokemon-species/678/",
      },
      {
        name: "clauncher",
        url: "https://pokeapi.co/api/v2/pokemon-species/692/",
      },
      { name: "amaura", url: "https://pokeapi.co/api/v2/pokemon-species/698/" },
      {
        name: "bergmite",
        url: "https://pokeapi.co/api/v2/pokemon-species/712/",
      },
      {
        name: "xerneas",
        url: "https://pokeapi.co/api/v2/pokemon-species/716/",
      },
      {
        name: "popplio",
        url: "https://pokeapi.co/api/v2/pokemon-species/728/",
      },
      {
        name: "wishiwashi",
        url: "https://pokeapi.co/api/v2/pokemon-species/746/",
      },
      {
        name: "mareanie",
        url: "https://pokeapi.co/api/v2/pokemon-species/747/",
      },
      {
        name: "clawitzer",
        url: "https://pokeapi.co/api/v2/pokemon-species/693/",
      },
      {
        name: "aurorus",
        url: "https://pokeapi.co/api/v2/pokemon-species/699/",
      },
      {
        name: "avalugg",
        url: "https://pokeapi.co/api/v2/pokemon-species/713/",
      },
      {
        name: "primarina",
        url: "https://pokeapi.co/api/v2/pokemon-species/730/",
      },
      {
        name: "vikavolt",
        url: "https://pokeapi.co/api/v2/pokemon-species/738/",
      },
      {
        name: "toxapex",
        url: "https://pokeapi.co/api/v2/pokemon-species/748/",
      },
      { name: "komala", url: "https://pokeapi.co/api/v2/pokemon-species/775/" },
      { name: "cosmog", url: "https://pokeapi.co/api/v2/pokemon-species/789/" },
      { name: "sobble", url: "https://pokeapi.co/api/v2/pokemon-species/816/" },
      {
        name: "rookidee",
        url: "https://pokeapi.co/api/v2/pokemon-species/821/",
      },
      {
        name: "blipbug",
        url: "https://pokeapi.co/api/v2/pokemon-species/824/",
      },
      {
        name: "cosmoem",
        url: "https://pokeapi.co/api/v2/pokemon-species/790/",
      },
      {
        name: "drizzile",
        url: "https://pokeapi.co/api/v2/pokemon-species/817/",
      },
      {
        name: "inteleon",
        url: "https://pokeapi.co/api/v2/pokemon-species/818/",
      },
      {
        name: "corvisquire",
        url: "https://pokeapi.co/api/v2/pokemon-species/822/",
      },
      {
        name: "cramorant",
        url: "https://pokeapi.co/api/v2/pokemon-species/845/",
      },
      { name: "eiscue", url: "https://pokeapi.co/api/v2/pokemon-species/875/" },
      {
        name: "arctozolt",
        url: "https://pokeapi.co/api/v2/pokemon-species/881/",
      },
      {
        name: "arctovish",
        url: "https://pokeapi.co/api/v2/pokemon-species/883/",
      },
      { name: "zacian", url: "https://pokeapi.co/api/v2/pokemon-species/888/" },
      {
        name: "metagross",
        url: "https://pokeapi.co/api/v2/pokemon-species/376/",
      },
      {
        name: "toxicroak",
        url: "https://pokeapi.co/api/v2/pokemon-species/454/",
      },
      {
        name: "malamar",
        url: "https://pokeapi.co/api/v2/pokemon-species/687/",
      },
      {
        name: "brionne",
        url: "https://pokeapi.co/api/v2/pokemon-species/729/",
      },
      {
        name: "grapploct",
        url: "https://pokeapi.co/api/v2/pokemon-species/853/",
      },
    ],
  },
  {
    id: 3,
    name: "brown",
    pokemon_species: [
      { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon-species/13/" },
      { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon-species/16/" },
      { name: "spearow", url: "https://pokeapi.co/api/v2/pokemon-species/21/" },
      { name: "vulpix", url: "https://pokeapi.co/api/v2/pokemon-species/37/" },
      { name: "diglett", url: "https://pokeapi.co/api/v2/pokemon-species/50/" },
      { name: "mankey", url: "https://pokeapi.co/api/v2/pokemon-species/56/" },
      {
        name: "growlithe",
        url: "https://pokeapi.co/api/v2/pokemon-species/58/",
      },
      { name: "abra", url: "https://pokeapi.co/api/v2/pokemon-species/63/" },
      { name: "geodude", url: "https://pokeapi.co/api/v2/pokemon-species/74/" },
      {
        name: "pidgeotto",
        url: "https://pokeapi.co/api/v2/pokemon-species/17/",
      },
      { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon-species/18/" },
      {
        name: "raticate",
        url: "https://pokeapi.co/api/v2/pokemon-species/20/",
      },
      { name: "fearow", url: "https://pokeapi.co/api/v2/pokemon-species/22/" },
      { name: "dugtrio", url: "https://pokeapi.co/api/v2/pokemon-species/51/" },
      {
        name: "primeape",
        url: "https://pokeapi.co/api/v2/pokemon-species/57/",
      },
      {
        name: "arcanine",
        url: "https://pokeapi.co/api/v2/pokemon-species/59/",
      },
      { name: "kadabra", url: "https://pokeapi.co/api/v2/pokemon-species/64/" },
      {
        name: "alakazam",
        url: "https://pokeapi.co/api/v2/pokemon-species/65/",
      },
      {
        name: "graveler",
        url: "https://pokeapi.co/api/v2/pokemon-species/75/",
      },
      {
        name: "farfetchd",
        url: "https://pokeapi.co/api/v2/pokemon-species/83/",
      },
      { name: "doduo", url: "https://pokeapi.co/api/v2/pokemon-species/84/" },
      { name: "cubone", url: "https://pokeapi.co/api/v2/pokemon-species/104/" },
      {
        name: "kangaskhan",
        url: "https://pokeapi.co/api/v2/pokemon-species/115/",
      },
      { name: "staryu", url: "https://pokeapi.co/api/v2/pokemon-species/120/" },
      { name: "pinsir", url: "https://pokeapi.co/api/v2/pokemon-species/127/" },
      { name: "tauros", url: "https://pokeapi.co/api/v2/pokemon-species/128/" },
      { name: "eevee", url: "https://pokeapi.co/api/v2/pokemon-species/133/" },
      { name: "kabuto", url: "https://pokeapi.co/api/v2/pokemon-species/140/" },
      { name: "dodrio", url: "https://pokeapi.co/api/v2/pokemon-species/85/" },
      {
        name: "marowak",
        url: "https://pokeapi.co/api/v2/pokemon-species/105/",
      },
      {
        name: "hitmonlee",
        url: "https://pokeapi.co/api/v2/pokemon-species/106/",
      },
      {
        name: "hitmonchan",
        url: "https://pokeapi.co/api/v2/pokemon-species/107/",
      },
      {
        name: "kabutops",
        url: "https://pokeapi.co/api/v2/pokemon-species/141/",
      },
      {
        name: "dragonite",
        url: "https://pokeapi.co/api/v2/pokemon-species/149/",
      },
      {
        name: "sentret",
        url: "https://pokeapi.co/api/v2/pokemon-species/161/",
      },
      {
        name: "hoothoot",
        url: "https://pokeapi.co/api/v2/pokemon-species/163/",
      },
      {
        name: "teddiursa",
        url: "https://pokeapi.co/api/v2/pokemon-species/216/",
      },
      { name: "swinub", url: "https://pokeapi.co/api/v2/pokemon-species/220/" },
      { name: "furret", url: "https://pokeapi.co/api/v2/pokemon-species/162/" },
      {
        name: "noctowl",
        url: "https://pokeapi.co/api/v2/pokemon-species/164/",
      },
      {
        name: "sudowoodo",
        url: "https://pokeapi.co/api/v2/pokemon-species/185/",
      },
      {
        name: "ursaring",
        url: "https://pokeapi.co/api/v2/pokemon-species/217/",
      },
      {
        name: "piloswine",
        url: "https://pokeapi.co/api/v2/pokemon-species/221/",
      },
      {
        name: "stantler",
        url: "https://pokeapi.co/api/v2/pokemon-species/234/",
      },
      { name: "entei", url: "https://pokeapi.co/api/v2/pokemon-species/244/" },
      {
        name: "zigzagoon",
        url: "https://pokeapi.co/api/v2/pokemon-species/263/",
      },
      { name: "seedot", url: "https://pokeapi.co/api/v2/pokemon-species/273/" },
      {
        name: "shroomish",
        url: "https://pokeapi.co/api/v2/pokemon-species/285/",
      },
      {
        name: "slakoth",
        url: "https://pokeapi.co/api/v2/pokemon-species/287/",
      },
      {
        name: "hitmontop",
        url: "https://pokeapi.co/api/v2/pokemon-species/237/",
      },
      {
        name: "nuzleaf",
        url: "https://pokeapi.co/api/v2/pokemon-species/274/",
      },
      {
        name: "shiftry",
        url: "https://pokeapi.co/api/v2/pokemon-species/275/",
      },
      {
        name: "slaking",
        url: "https://pokeapi.co/api/v2/pokemon-species/289/",
      },
      {
        name: "shedinja",
        url: "https://pokeapi.co/api/v2/pokemon-species/292/",
      },
      {
        name: "hariyama",
        url: "https://pokeapi.co/api/v2/pokemon-species/297/",
      },
      {
        name: "torkoal",
        url: "https://pokeapi.co/api/v2/pokemon-species/324/",
      },
      { name: "spinda", url: "https://pokeapi.co/api/v2/pokemon-species/327/" },
      {
        name: "trapinch",
        url: "https://pokeapi.co/api/v2/pokemon-species/328/",
      },
      { name: "baltoy", url: "https://pokeapi.co/api/v2/pokemon-species/343/" },
      { name: "feebas", url: "https://pokeapi.co/api/v2/pokemon-species/349/" },
      {
        name: "regirock",
        url: "https://pokeapi.co/api/v2/pokemon-species/377/",
      },
      {
        name: "chimchar",
        url: "https://pokeapi.co/api/v2/pokemon-species/390/",
      },
      { name: "starly", url: "https://pokeapi.co/api/v2/pokemon-species/396/" },
      { name: "bidoof", url: "https://pokeapi.co/api/v2/pokemon-species/399/" },
      { name: "buizel", url: "https://pokeapi.co/api/v2/pokemon-species/418/" },
      {
        name: "buneary",
        url: "https://pokeapi.co/api/v2/pokemon-species/427/",
      },
      { name: "bonsly", url: "https://pokeapi.co/api/v2/pokemon-species/438/" },
      {
        name: "hippopotas",
        url: "https://pokeapi.co/api/v2/pokemon-species/449/",
      },
      {
        name: "infernape",
        url: "https://pokeapi.co/api/v2/pokemon-species/392/",
      },
      {
        name: "staravia",
        url: "https://pokeapi.co/api/v2/pokemon-species/397/",
      },
      {
        name: "staraptor",
        url: "https://pokeapi.co/api/v2/pokemon-species/398/",
      },
      {
        name: "bibarel",
        url: "https://pokeapi.co/api/v2/pokemon-species/400/",
      },
      {
        name: "floatzel",
        url: "https://pokeapi.co/api/v2/pokemon-species/419/",
      },
      {
        name: "lopunny",
        url: "https://pokeapi.co/api/v2/pokemon-species/428/",
      },
      {
        name: "hippowdon",
        url: "https://pokeapi.co/api/v2/pokemon-species/450/",
      },
      {
        name: "heatran",
        url: "https://pokeapi.co/api/v2/pokemon-species/485/",
      },
      { name: "patrat", url: "https://pokeapi.co/api/v2/pokemon-species/504/" },
      {
        name: "lillipup",
        url: "https://pokeapi.co/api/v2/pokemon-species/506/",
      },
      {
        name: "watchog",
        url: "https://pokeapi.co/api/v2/pokemon-species/505/",
      },
      {
        name: "sandile",
        url: "https://pokeapi.co/api/v2/pokemon-species/551/",
      },
      {
        name: "conkeldurr",
        url: "https://pokeapi.co/api/v2/pokemon-species/534/",
      },
      {
        name: "krokorok",
        url: "https://pokeapi.co/api/v2/pokemon-species/552/",
      },
      {
        name: "sawsbuck",
        url: "https://pokeapi.co/api/v2/pokemon-species/586/",
      },
      {
        name: "beheeyem",
        url: "https://pokeapi.co/api/v2/pokemon-species/606/",
      },
      {
        name: "stunfisk",
        url: "https://pokeapi.co/api/v2/pokemon-species/618/",
      },
      {
        name: "bouffalant",
        url: "https://pokeapi.co/api/v2/pokemon-species/626/",
      },
      {
        name: "vullaby",
        url: "https://pokeapi.co/api/v2/pokemon-species/629/",
      },
      {
        name: "landorus",
        url: "https://pokeapi.co/api/v2/pokemon-species/645/",
      },
      {
        name: "bunnelby",
        url: "https://pokeapi.co/api/v2/pokemon-species/659/",
      },
      { name: "litleo", url: "https://pokeapi.co/api/v2/pokemon-species/667/" },
      { name: "skiddo", url: "https://pokeapi.co/api/v2/pokemon-species/672/" },
      {
        name: "honedge",
        url: "https://pokeapi.co/api/v2/pokemon-species/679/",
      },
      {
        name: "mandibuzz",
        url: "https://pokeapi.co/api/v2/pokemon-species/630/",
      },
      {
        name: "diggersby",
        url: "https://pokeapi.co/api/v2/pokemon-species/660/",
      },
      { name: "pyroar", url: "https://pokeapi.co/api/v2/pokemon-species/668/" },
      { name: "gogoat", url: "https://pokeapi.co/api/v2/pokemon-species/673/" },
      {
        name: "doublade",
        url: "https://pokeapi.co/api/v2/pokemon-species/680/",
      },
      {
        name: "aegislash",
        url: "https://pokeapi.co/api/v2/pokemon-species/681/",
      },
      {
        name: "binacle",
        url: "https://pokeapi.co/api/v2/pokemon-species/688/",
      },
      { name: "skrelp", url: "https://pokeapi.co/api/v2/pokemon-species/690/" },
      { name: "tyrunt", url: "https://pokeapi.co/api/v2/pokemon-species/696/" },
      {
        name: "phantump",
        url: "https://pokeapi.co/api/v2/pokemon-species/708/",
      },
      {
        name: "pumpkaboo",
        url: "https://pokeapi.co/api/v2/pokemon-species/710/",
      },
      {
        name: "volcanion",
        url: "https://pokeapi.co/api/v2/pokemon-species/721/",
      },
      { name: "rowlet", url: "https://pokeapi.co/api/v2/pokemon-species/722/" },
      {
        name: "yungoos",
        url: "https://pokeapi.co/api/v2/pokemon-species/734/",
      },
      {
        name: "rockruff",
        url: "https://pokeapi.co/api/v2/pokemon-species/744/",
      },
      {
        name: "mudbray",
        url: "https://pokeapi.co/api/v2/pokemon-species/749/",
      },
      {
        name: "barbaracle",
        url: "https://pokeapi.co/api/v2/pokemon-species/689/",
      },
      {
        name: "dragalge",
        url: "https://pokeapi.co/api/v2/pokemon-species/691/",
      },
      {
        name: "trevenant",
        url: "https://pokeapi.co/api/v2/pokemon-species/709/",
      },
      {
        name: "gourgeist",
        url: "https://pokeapi.co/api/v2/pokemon-species/711/",
      },
      {
        name: "dartrix",
        url: "https://pokeapi.co/api/v2/pokemon-species/723/",
      },
      {
        name: "decidueye",
        url: "https://pokeapi.co/api/v2/pokemon-species/724/",
      },
      {
        name: "gumshoos",
        url: "https://pokeapi.co/api/v2/pokemon-species/735/",
      },
      {
        name: "lycanroc",
        url: "https://pokeapi.co/api/v2/pokemon-species/745/",
      },
      {
        name: "mudsdale",
        url: "https://pokeapi.co/api/v2/pokemon-species/750/",
      },
      {
        name: "sandygast",
        url: "https://pokeapi.co/api/v2/pokemon-species/769/",
      },
      { name: "minior", url: "https://pokeapi.co/api/v2/pokemon-species/774/" },
      {
        name: "skwovet",
        url: "https://pokeapi.co/api/v2/pokemon-species/819/",
      },
      { name: "nickit", url: "https://pokeapi.co/api/v2/pokemon-species/827/" },
      {
        name: "palossand",
        url: "https://pokeapi.co/api/v2/pokemon-species/770/",
      },
      {
        name: "greedent",
        url: "https://pokeapi.co/api/v2/pokemon-species/820/",
      },
      {
        name: "thievul",
        url: "https://pokeapi.co/api/v2/pokemon-species/828/",
      },
      {
        name: "arrokuda",
        url: "https://pokeapi.co/api/v2/pokemon-species/846/",
      },
      {
        name: "clobbopus",
        url: "https://pokeapi.co/api/v2/pokemon-species/852/",
      },
      { name: "golem", url: "https://pokeapi.co/api/v2/pokemon-species/76/" },
      {
        name: "monferno",
        url: "https://pokeapi.co/api/v2/pokemon-species/391/",
      },
      {
        name: "mamoswine",
        url: "https://pokeapi.co/api/v2/pokemon-species/473/",
      },
      {
        name: "barraskewda",
        url: "https://pokeapi.co/api/v2/pokemon-species/847/",
      },
      {
        name: "perrserker",
        url: "https://pokeapi.co/api/v2/pokemon-species/863/",
      },
    ],
  },
  {
    id: 4,
    name: "gray",
    pokemon_species: [
      { name: "machop", url: "https://pokeapi.co/api/v2/pokemon-species/66/" },
      { name: "machoke", url: "https://pokeapi.co/api/v2/pokemon-species/67/" },
      { name: "machamp", url: "https://pokeapi.co/api/v2/pokemon-species/68/" },
      {
        name: "magnemite",
        url: "https://pokeapi.co/api/v2/pokemon-species/81/",
      },
      { name: "onix", url: "https://pokeapi.co/api/v2/pokemon-species/95/" },
      {
        name: "rhyhorn",
        url: "https://pokeapi.co/api/v2/pokemon-species/111/",
      },
      {
        name: "magneton",
        url: "https://pokeapi.co/api/v2/pokemon-species/82/",
      },
      { name: "rhydon", url: "https://pokeapi.co/api/v2/pokemon-species/112/" },
      {
        name: "misdreavus",
        url: "https://pokeapi.co/api/v2/pokemon-species/200/",
      },
      { name: "pineco", url: "https://pokeapi.co/api/v2/pokemon-species/204/" },
      {
        name: "qwilfish",
        url: "https://pokeapi.co/api/v2/pokemon-species/211/",
      },
      {
        name: "remoraid",
        url: "https://pokeapi.co/api/v2/pokemon-species/223/",
      },
      {
        name: "steelix",
        url: "https://pokeapi.co/api/v2/pokemon-species/208/",
      },
      {
        name: "skarmory",
        url: "https://pokeapi.co/api/v2/pokemon-species/227/",
      },
      {
        name: "poochyena",
        url: "https://pokeapi.co/api/v2/pokemon-species/261/",
      },
      {
        name: "nincada",
        url: "https://pokeapi.co/api/v2/pokemon-species/290/",
      },
      {
        name: "nosepass",
        url: "https://pokeapi.co/api/v2/pokemon-species/299/",
      },
      {
        name: "donphan",
        url: "https://pokeapi.co/api/v2/pokemon-species/232/",
      },
      {
        name: "pupitar",
        url: "https://pokeapi.co/api/v2/pokemon-species/247/",
      },
      {
        name: "mightyena",
        url: "https://pokeapi.co/api/v2/pokemon-species/262/",
      },
      { name: "aron", url: "https://pokeapi.co/api/v2/pokemon-species/304/" },
      {
        name: "volbeat",
        url: "https://pokeapi.co/api/v2/pokemon-species/313/",
      },
      {
        name: "barboach",
        url: "https://pokeapi.co/api/v2/pokemon-species/339/",
      },
      {
        name: "anorith",
        url: "https://pokeapi.co/api/v2/pokemon-species/347/",
      },
      {
        name: "castform",
        url: "https://pokeapi.co/api/v2/pokemon-species/351/",
      },
      {
        name: "snorunt",
        url: "https://pokeapi.co/api/v2/pokemon-species/361/",
      },
      {
        name: "relicanth",
        url: "https://pokeapi.co/api/v2/pokemon-species/369/",
      },
      { name: "lairon", url: "https://pokeapi.co/api/v2/pokemon-species/305/" },
      { name: "aggron", url: "https://pokeapi.co/api/v2/pokemon-species/306/" },
      {
        name: "armaldo",
        url: "https://pokeapi.co/api/v2/pokemon-species/348/",
      },
      { name: "glalie", url: "https://pokeapi.co/api/v2/pokemon-species/362/" },
      {
        name: "registeel",
        url: "https://pokeapi.co/api/v2/pokemon-species/379/",
      },
      {
        name: "shieldon",
        url: "https://pokeapi.co/api/v2/pokemon-species/410/",
      },
      {
        name: "glameow",
        url: "https://pokeapi.co/api/v2/pokemon-species/431/",
      },
      {
        name: "bastiodon",
        url: "https://pokeapi.co/api/v2/pokemon-species/411/",
      },
      {
        name: "purugly",
        url: "https://pokeapi.co/api/v2/pokemon-species/432/",
      },
      { name: "pidove", url: "https://pokeapi.co/api/v2/pokemon-species/519/" },
      {
        name: "drilbur",
        url: "https://pokeapi.co/api/v2/pokemon-species/529/",
      },
      {
        name: "magnezone",
        url: "https://pokeapi.co/api/v2/pokemon-species/462/",
      },
      {
        name: "rhyperior",
        url: "https://pokeapi.co/api/v2/pokemon-species/464/",
      },
      {
        name: "probopass",
        url: "https://pokeapi.co/api/v2/pokemon-species/476/",
      },
      {
        name: "stoutland",
        url: "https://pokeapi.co/api/v2/pokemon-species/508/",
      },
      {
        name: "tranquill",
        url: "https://pokeapi.co/api/v2/pokemon-species/520/",
      },
      {
        name: "unfezant",
        url: "https://pokeapi.co/api/v2/pokemon-species/521/",
      },
      {
        name: "excadrill",
        url: "https://pokeapi.co/api/v2/pokemon-species/530/",
      },
      {
        name: "timburr",
        url: "https://pokeapi.co/api/v2/pokemon-species/532/",
      },
      { name: "zorua", url: "https://pokeapi.co/api/v2/pokemon-species/570/" },
      {
        name: "minccino",
        url: "https://pokeapi.co/api/v2/pokemon-species/572/",
      },
      {
        name: "ferroseed",
        url: "https://pokeapi.co/api/v2/pokemon-species/597/",
      },
      { name: "klink", url: "https://pokeapi.co/api/v2/pokemon-species/599/" },
      {
        name: "whirlipede",
        url: "https://pokeapi.co/api/v2/pokemon-species/544/",
      },
      {
        name: "zoroark",
        url: "https://pokeapi.co/api/v2/pokemon-species/571/",
      },
      {
        name: "cinccino",
        url: "https://pokeapi.co/api/v2/pokemon-species/573/",
      },
      {
        name: "escavalier",
        url: "https://pokeapi.co/api/v2/pokemon-species/589/",
      },
      {
        name: "ferrothorn",
        url: "https://pokeapi.co/api/v2/pokemon-species/598/",
      },
      { name: "klang", url: "https://pokeapi.co/api/v2/pokemon-species/600/" },
      { name: "durant", url: "https://pokeapi.co/api/v2/pokemon-species/632/" },
      {
        name: "terrakion",
        url: "https://pokeapi.co/api/v2/pokemon-species/639/",
      },
      { name: "kyurem", url: "https://pokeapi.co/api/v2/pokemon-species/646/" },
      { name: "espurr", url: "https://pokeapi.co/api/v2/pokemon-species/677/" },
      {
        name: "carbink",
        url: "https://pokeapi.co/api/v2/pokemon-species/703/",
      },
      { name: "klefki", url: "https://pokeapi.co/api/v2/pokemon-species/707/" },
      {
        name: "grubbin",
        url: "https://pokeapi.co/api/v2/pokemon-species/736/",
      },
      { name: "wimpod", url: "https://pokeapi.co/api/v2/pokemon-species/767/" },
      {
        name: "type-null",
        url: "https://pokeapi.co/api/v2/pokemon-species/772/",
      },
      {
        name: "togedemaru",
        url: "https://pokeapi.co/api/v2/pokemon-species/777/",
      },
      {
        name: "jangmo-o",
        url: "https://pokeapi.co/api/v2/pokemon-species/782/",
      },
      {
        name: "magearna",
        url: "https://pokeapi.co/api/v2/pokemon-species/801/",
      },
      {
        name: "marshadow",
        url: "https://pokeapi.co/api/v2/pokemon-species/802/",
      },
      {
        name: "stakataka",
        url: "https://pokeapi.co/api/v2/pokemon-species/805/",
      },
      { name: "meltan", url: "https://pokeapi.co/api/v2/pokemon-species/808/" },
      {
        name: "silvally",
        url: "https://pokeapi.co/api/v2/pokemon-species/773/",
      },
      {
        name: "hakamo-o",
        url: "https://pokeapi.co/api/v2/pokemon-species/783/",
      },
      {
        name: "kommo-o",
        url: "https://pokeapi.co/api/v2/pokemon-species/784/",
      },
      {
        name: "melmetal",
        url: "https://pokeapi.co/api/v2/pokemon-species/809/",
      },
      { name: "raboot", url: "https://pokeapi.co/api/v2/pokemon-species/814/" },
      {
        name: "stonjourner",
        url: "https://pokeapi.co/api/v2/pokemon-species/874/",
      },
      { name: "kubfu", url: "https://pokeapi.co/api/v2/pokemon-species/891/" },
      {
        name: "herdier",
        url: "https://pokeapi.co/api/v2/pokemon-species/507/",
      },
      {
        name: "gurdurr",
        url: "https://pokeapi.co/api/v2/pokemon-species/533/",
      },
      {
        name: "klinklang",
        url: "https://pokeapi.co/api/v2/pokemon-species/601/",
      },
      {
        name: "obstagoon",
        url: "https://pokeapi.co/api/v2/pokemon-species/862/",
      },
      {
        name: "runerigus",
        url: "https://pokeapi.co/api/v2/pokemon-species/867/",
      },
      {
        name: "urshifu",
        url: "https://pokeapi.co/api/v2/pokemon-species/892/",
      },
      {
        name: "golisopod",
        url: "https://pokeapi.co/api/v2/pokemon-species/768/",
      },
    ],
  },
  {
    id: 5,
    name: "green",
    pokemon_species: [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/1/",
      },
      {
        name: "caterpie",
        url: "https://pokeapi.co/api/v2/pokemon-species/10/",
      },
      {
        name: "bellsprout",
        url: "https://pokeapi.co/api/v2/pokemon-species/69/",
      },
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon-species/3/" },
      { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon-species/11/" },
      {
        name: "weepinbell",
        url: "https://pokeapi.co/api/v2/pokemon-species/70/",
      },
      {
        name: "victreebel",
        url: "https://pokeapi.co/api/v2/pokemon-species/71/",
      },
      {
        name: "scyther",
        url: "https://pokeapi.co/api/v2/pokemon-species/123/",
      },
      {
        name: "chikorita",
        url: "https://pokeapi.co/api/v2/pokemon-species/152/",
      },
      {
        name: "spinarak",
        url: "https://pokeapi.co/api/v2/pokemon-species/167/",
      },
      { name: "natu", url: "https://pokeapi.co/api/v2/pokemon-species/177/" },
      {
        name: "meganium",
        url: "https://pokeapi.co/api/v2/pokemon-species/154/",
      },
      { name: "xatu", url: "https://pokeapi.co/api/v2/pokemon-species/178/" },
      {
        name: "bellossom",
        url: "https://pokeapi.co/api/v2/pokemon-species/182/",
      },
      {
        name: "politoed",
        url: "https://pokeapi.co/api/v2/pokemon-species/186/",
      },
      {
        name: "skiploom",
        url: "https://pokeapi.co/api/v2/pokemon-species/188/",
      },
      {
        name: "larvitar",
        url: "https://pokeapi.co/api/v2/pokemon-species/246/",
      },
      { name: "celebi", url: "https://pokeapi.co/api/v2/pokemon-species/251/" },
      {
        name: "treecko",
        url: "https://pokeapi.co/api/v2/pokemon-species/252/",
      },
      { name: "lotad", url: "https://pokeapi.co/api/v2/pokemon-species/270/" },
      {
        name: "tyranitar",
        url: "https://pokeapi.co/api/v2/pokemon-species/248/",
      },
      {
        name: "grovyle",
        url: "https://pokeapi.co/api/v2/pokemon-species/253/",
      },
      {
        name: "sceptile",
        url: "https://pokeapi.co/api/v2/pokemon-species/254/",
      },
      { name: "dustox", url: "https://pokeapi.co/api/v2/pokemon-species/269/" },
      { name: "lombre", url: "https://pokeapi.co/api/v2/pokemon-species/271/" },
      {
        name: "ludicolo",
        url: "https://pokeapi.co/api/v2/pokemon-species/272/",
      },
      {
        name: "breloom",
        url: "https://pokeapi.co/api/v2/pokemon-species/286/",
      },
      {
        name: "electrike",
        url: "https://pokeapi.co/api/v2/pokemon-species/309/",
      },
      { name: "gulpin", url: "https://pokeapi.co/api/v2/pokemon-species/316/" },
      { name: "cacnea", url: "https://pokeapi.co/api/v2/pokemon-species/331/" },
      {
        name: "kecleon",
        url: "https://pokeapi.co/api/v2/pokemon-species/352/",
      },
      {
        name: "tropius",
        url: "https://pokeapi.co/api/v2/pokemon-species/357/",
      },
      {
        name: "roselia",
        url: "https://pokeapi.co/api/v2/pokemon-species/315/",
      },
      {
        name: "vibrava",
        url: "https://pokeapi.co/api/v2/pokemon-species/329/",
      },
      { name: "flygon", url: "https://pokeapi.co/api/v2/pokemon-species/330/" },
      {
        name: "cacturne",
        url: "https://pokeapi.co/api/v2/pokemon-species/332/",
      },
      {
        name: "cradily",
        url: "https://pokeapi.co/api/v2/pokemon-species/346/",
      },
      {
        name: "rayquaza",
        url: "https://pokeapi.co/api/v2/pokemon-species/384/",
      },
      {
        name: "turtwig",
        url: "https://pokeapi.co/api/v2/pokemon-species/387/",
      },
      { name: "budew", url: "https://pokeapi.co/api/v2/pokemon-species/406/" },
      { name: "burmy", url: "https://pokeapi.co/api/v2/pokemon-species/412/" },
      {
        name: "bronzor",
        url: "https://pokeapi.co/api/v2/pokemon-species/436/",
      },
      { name: "grotle", url: "https://pokeapi.co/api/v2/pokemon-species/388/" },
      {
        name: "torterra",
        url: "https://pokeapi.co/api/v2/pokemon-species/389/",
      },
      {
        name: "roserade",
        url: "https://pokeapi.co/api/v2/pokemon-species/407/",
      },
      {
        name: "wormadam",
        url: "https://pokeapi.co/api/v2/pokemon-species/413/",
      },
      {
        name: "bronzong",
        url: "https://pokeapi.co/api/v2/pokemon-species/437/",
      },
      {
        name: "carnivine",
        url: "https://pokeapi.co/api/v2/pokemon-species/455/",
      },
      {
        name: "shaymin",
        url: "https://pokeapi.co/api/v2/pokemon-species/492/",
      },
      { name: "snivy", url: "https://pokeapi.co/api/v2/pokemon-species/495/" },
      {
        name: "pansage",
        url: "https://pokeapi.co/api/v2/pokemon-species/511/",
      },
      {
        name: "yanmega",
        url: "https://pokeapi.co/api/v2/pokemon-species/469/",
      },
      {
        name: "leafeon",
        url: "https://pokeapi.co/api/v2/pokemon-species/470/",
      },
      {
        name: "servine",
        url: "https://pokeapi.co/api/v2/pokemon-species/496/",
      },
      {
        name: "serperior",
        url: "https://pokeapi.co/api/v2/pokemon-species/497/",
      },
      {
        name: "simisage",
        url: "https://pokeapi.co/api/v2/pokemon-species/512/",
      },
      {
        name: "cottonee",
        url: "https://pokeapi.co/api/v2/pokemon-species/546/",
      },
      {
        name: "petilil",
        url: "https://pokeapi.co/api/v2/pokemon-species/548/",
      },
      {
        name: "basculin",
        url: "https://pokeapi.co/api/v2/pokemon-species/550/",
      },
      {
        name: "maractus",
        url: "https://pokeapi.co/api/v2/pokemon-species/556/",
      },
      {
        name: "trubbish",
        url: "https://pokeapi.co/api/v2/pokemon-species/568/",
      },
      {
        name: "solosis",
        url: "https://pokeapi.co/api/v2/pokemon-species/577/",
      },
      {
        name: "swadloon",
        url: "https://pokeapi.co/api/v2/pokemon-species/541/",
      },
      {
        name: "whimsicott",
        url: "https://pokeapi.co/api/v2/pokemon-species/547/",
      },
      {
        name: "lilligant",
        url: "https://pokeapi.co/api/v2/pokemon-species/549/",
      },
      {
        name: "garbodor",
        url: "https://pokeapi.co/api/v2/pokemon-species/569/",
      },
      {
        name: "duosion",
        url: "https://pokeapi.co/api/v2/pokemon-species/578/",
      },
      {
        name: "reuniclus",
        url: "https://pokeapi.co/api/v2/pokemon-species/579/",
      },
      { name: "axew", url: "https://pokeapi.co/api/v2/pokemon-species/610/" },
      { name: "golett", url: "https://pokeapi.co/api/v2/pokemon-species/622/" },
      {
        name: "virizion",
        url: "https://pokeapi.co/api/v2/pokemon-species/640/",
      },
      {
        name: "tornadus",
        url: "https://pokeapi.co/api/v2/pokemon-species/641/",
      },
      {
        name: "chespin",
        url: "https://pokeapi.co/api/v2/pokemon-species/650/",
      },
      {
        name: "fraxure",
        url: "https://pokeapi.co/api/v2/pokemon-species/611/",
      },
      { name: "golurk", url: "https://pokeapi.co/api/v2/pokemon-species/623/" },
      {
        name: "quilladin",
        url: "https://pokeapi.co/api/v2/pokemon-species/651/",
      },
      {
        name: "chesnaught",
        url: "https://pokeapi.co/api/v2/pokemon-species/652/",
      },
      {
        name: "hawlucha",
        url: "https://pokeapi.co/api/v2/pokemon-species/701/",
      },
      {
        name: "zygarde",
        url: "https://pokeapi.co/api/v2/pokemon-species/718/",
      },
      {
        name: "dewpider",
        url: "https://pokeapi.co/api/v2/pokemon-species/751/",
      },
      { name: "comfey", url: "https://pokeapi.co/api/v2/pokemon-species/764/" },
      {
        name: "charjabug",
        url: "https://pokeapi.co/api/v2/pokemon-species/737/",
      },
      {
        name: "araquanid",
        url: "https://pokeapi.co/api/v2/pokemon-species/752/",
      },
      {
        name: "dhelmise",
        url: "https://pokeapi.co/api/v2/pokemon-species/781/",
      },
      {
        name: "celesteela",
        url: "https://pokeapi.co/api/v2/pokemon-species/797/",
      },
      {
        name: "grookey",
        url: "https://pokeapi.co/api/v2/pokemon-species/810/",
      },
      {
        name: "gossifleur",
        url: "https://pokeapi.co/api/v2/pokemon-species/829/",
      },
      {
        name: "chewtle",
        url: "https://pokeapi.co/api/v2/pokemon-species/833/",
      },
      { name: "applin", url: "https://pokeapi.co/api/v2/pokemon-species/840/" },
      {
        name: "thwackey",
        url: "https://pokeapi.co/api/v2/pokemon-species/811/",
      },
      {
        name: "rillaboom",
        url: "https://pokeapi.co/api/v2/pokemon-species/812/",
      },
      {
        name: "eldegoss",
        url: "https://pokeapi.co/api/v2/pokemon-species/830/",
      },
      {
        name: "drednaw",
        url: "https://pokeapi.co/api/v2/pokemon-species/834/",
      },
      {
        name: "flapple",
        url: "https://pokeapi.co/api/v2/pokemon-species/841/",
      },
      {
        name: "silicobra",
        url: "https://pokeapi.co/api/v2/pokemon-species/843/",
      },
      {
        name: "dracozolt",
        url: "https://pokeapi.co/api/v2/pokemon-species/880/",
      },
      {
        name: "dracovish",
        url: "https://pokeapi.co/api/v2/pokemon-species/882/",
      },
      { name: "dreepy", url: "https://pokeapi.co/api/v2/pokemon-species/885/" },
      { name: "zarude", url: "https://pokeapi.co/api/v2/pokemon-species/893/" },
      {
        name: "regidrago",
        url: "https://pokeapi.co/api/v2/pokemon-species/895/",
      },
      {
        name: "calyrex",
        url: "https://pokeapi.co/api/v2/pokemon-species/898/",
      },
      { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon-species/2/" },
      {
        name: "bayleef",
        url: "https://pokeapi.co/api/v2/pokemon-species/153/",
      },
      {
        name: "sandaconda",
        url: "https://pokeapi.co/api/v2/pokemon-species/844/",
      },
      {
        name: "copperajah",
        url: "https://pokeapi.co/api/v2/pokemon-species/879/",
      },
      {
        name: "drakloak",
        url: "https://pokeapi.co/api/v2/pokemon-species/886/",
      },
      {
        name: "dragapult",
        url: "https://pokeapi.co/api/v2/pokemon-species/887/",
      },
      {
        name: "appletun",
        url: "https://pokeapi.co/api/v2/pokemon-species/842/",
      },
    ],
  },
  {
    id: 6,
    name: "pink",
    pokemon_species: [
      {
        name: "clefairy",
        url: "https://pokeapi.co/api/v2/pokemon-species/35/",
      },
      {
        name: "clefable",
        url: "https://pokeapi.co/api/v2/pokemon-species/36/",
      },
      {
        name: "jigglypuff",
        url: "https://pokeapi.co/api/v2/pokemon-species/39/",
      },
      {
        name: "wigglytuff",
        url: "https://pokeapi.co/api/v2/pokemon-species/40/",
      },
      {
        name: "slowpoke",
        url: "https://pokeapi.co/api/v2/pokemon-species/79/",
      },
      {
        name: "exeggcute",
        url: "https://pokeapi.co/api/v2/pokemon-species/102/",
      },
      {
        name: "lickitung",
        url: "https://pokeapi.co/api/v2/pokemon-species/108/",
      },
      {
        name: "porygon",
        url: "https://pokeapi.co/api/v2/pokemon-species/137/",
      },
      { name: "slowbro", url: "https://pokeapi.co/api/v2/pokemon-species/80/" },
      {
        name: "chansey",
        url: "https://pokeapi.co/api/v2/pokemon-species/113/",
      },
      {
        name: "mr-mime",
        url: "https://pokeapi.co/api/v2/pokemon-species/122/",
      },
      { name: "mew", url: "https://pokeapi.co/api/v2/pokemon-species/151/" },
      { name: "cleffa", url: "https://pokeapi.co/api/v2/pokemon-species/173/" },
      {
        name: "igglybuff",
        url: "https://pokeapi.co/api/v2/pokemon-species/174/",
      },
      { name: "hoppip", url: "https://pokeapi.co/api/v2/pokemon-species/187/" },
      {
        name: "snubbull",
        url: "https://pokeapi.co/api/v2/pokemon-species/209/",
      },
      {
        name: "corsola",
        url: "https://pokeapi.co/api/v2/pokemon-species/222/",
      },
      {
        name: "flaaffy",
        url: "https://pokeapi.co/api/v2/pokemon-species/180/",
      },
      {
        name: "slowking",
        url: "https://pokeapi.co/api/v2/pokemon-species/199/",
      },
      {
        name: "smoochum",
        url: "https://pokeapi.co/api/v2/pokemon-species/238/",
      },
      {
        name: "miltank",
        url: "https://pokeapi.co/api/v2/pokemon-species/241/",
      },
      {
        name: "whismur",
        url: "https://pokeapi.co/api/v2/pokemon-species/293/",
      },
      { name: "skitty", url: "https://pokeapi.co/api/v2/pokemon-species/300/" },
      {
        name: "blissey",
        url: "https://pokeapi.co/api/v2/pokemon-species/242/",
      },
      {
        name: "luvdisc",
        url: "https://pokeapi.co/api/v2/pokemon-species/370/",
      },
      {
        name: "milotic",
        url: "https://pokeapi.co/api/v2/pokemon-species/350/",
      },
      {
        name: "gorebyss",
        url: "https://pokeapi.co/api/v2/pokemon-species/368/",
      },
      {
        name: "cherubi",
        url: "https://pokeapi.co/api/v2/pokemon-species/420/",
      },
      {
        name: "mime-jr",
        url: "https://pokeapi.co/api/v2/pokemon-species/439/",
      },
      {
        name: "happiny",
        url: "https://pokeapi.co/api/v2/pokemon-species/440/",
      },
      {
        name: "mesprit",
        url: "https://pokeapi.co/api/v2/pokemon-species/481/",
      },
      { name: "munna", url: "https://pokeapi.co/api/v2/pokemon-species/517/" },
      { name: "audino", url: "https://pokeapi.co/api/v2/pokemon-species/531/" },
      {
        name: "lickilicky",
        url: "https://pokeapi.co/api/v2/pokemon-species/463/",
      },
      {
        name: "musharna",
        url: "https://pokeapi.co/api/v2/pokemon-species/518/",
      },
      {
        name: "deerling",
        url: "https://pokeapi.co/api/v2/pokemon-species/585/",
      },
      {
        name: "alomomola",
        url: "https://pokeapi.co/api/v2/pokemon-species/594/",
      },
      {
        name: "spritzee",
        url: "https://pokeapi.co/api/v2/pokemon-species/682/",
      },
      {
        name: "aromatisse",
        url: "https://pokeapi.co/api/v2/pokemon-species/683/",
      },
      {
        name: "diancie",
        url: "https://pokeapi.co/api/v2/pokemon-species/719/",
      },
      {
        name: "fomantis",
        url: "https://pokeapi.co/api/v2/pokemon-species/753/",
      },
      {
        name: "stufful",
        url: "https://pokeapi.co/api/v2/pokemon-species/759/",
      },
      {
        name: "sylveon",
        url: "https://pokeapi.co/api/v2/pokemon-species/700/",
      },
      {
        name: "lurantis",
        url: "https://pokeapi.co/api/v2/pokemon-species/754/",
      },
      { name: "bewear", url: "https://pokeapi.co/api/v2/pokemon-species/760/" },
      {
        name: "bruxish",
        url: "https://pokeapi.co/api/v2/pokemon-species/779/",
      },
      {
        name: "tapu-lele",
        url: "https://pokeapi.co/api/v2/pokemon-species/786/",
      },
      {
        name: "hatenna",
        url: "https://pokeapi.co/api/v2/pokemon-species/856/",
      },
      {
        name: "impidimp",
        url: "https://pokeapi.co/api/v2/pokemon-species/859/",
      },
      {
        name: "hattrem",
        url: "https://pokeapi.co/api/v2/pokemon-species/857/",
      },
      {
        name: "morgrem",
        url: "https://pokeapi.co/api/v2/pokemon-species/860/",
      },
      {
        name: "hatterene",
        url: "https://pokeapi.co/api/v2/pokemon-species/858/",
      },
    ],
  },
  {
    id: 7,
    name: "purple",
    pokemon_species: [
      { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon-species/19/" },
      { name: "ekans", url: "https://pokeapi.co/api/v2/pokemon-species/23/" },
      {
        name: "nidoran-m",
        url: "https://pokeapi.co/api/v2/pokemon-species/32/",
      },
      { name: "zubat", url: "https://pokeapi.co/api/v2/pokemon-species/41/" },
      { name: "venonat", url: "https://pokeapi.co/api/v2/pokemon-species/48/" },
      { name: "arbok", url: "https://pokeapi.co/api/v2/pokemon-species/24/" },
      {
        name: "nidorino",
        url: "https://pokeapi.co/api/v2/pokemon-species/33/",
      },
      {
        name: "nidoking",
        url: "https://pokeapi.co/api/v2/pokemon-species/34/",
      },
      { name: "golbat", url: "https://pokeapi.co/api/v2/pokemon-species/42/" },
      {
        name: "venomoth",
        url: "https://pokeapi.co/api/v2/pokemon-species/49/",
      },
      { name: "grimer", url: "https://pokeapi.co/api/v2/pokemon-species/88/" },
      {
        name: "shellder",
        url: "https://pokeapi.co/api/v2/pokemon-species/90/",
      },
      { name: "gastly", url: "https://pokeapi.co/api/v2/pokemon-species/92/" },
      {
        name: "koffing",
        url: "https://pokeapi.co/api/v2/pokemon-species/109/",
      },
      { name: "ditto", url: "https://pokeapi.co/api/v2/pokemon-species/132/" },
      {
        name: "aerodactyl",
        url: "https://pokeapi.co/api/v2/pokemon-species/142/",
      },
      { name: "mewtwo", url: "https://pokeapi.co/api/v2/pokemon-species/150/" },
      { name: "muk", url: "https://pokeapi.co/api/v2/pokemon-species/89/" },
      {
        name: "cloyster",
        url: "https://pokeapi.co/api/v2/pokemon-species/91/",
      },
      { name: "haunter", url: "https://pokeapi.co/api/v2/pokemon-species/93/" },
      { name: "gengar", url: "https://pokeapi.co/api/v2/pokemon-species/94/" },
      {
        name: "weezing",
        url: "https://pokeapi.co/api/v2/pokemon-species/110/",
      },
      {
        name: "starmie",
        url: "https://pokeapi.co/api/v2/pokemon-species/121/",
      },
      { name: "aipom", url: "https://pokeapi.co/api/v2/pokemon-species/190/" },
      { name: "gligar", url: "https://pokeapi.co/api/v2/pokemon-species/207/" },
      { name: "crobat", url: "https://pokeapi.co/api/v2/pokemon-species/169/" },
      { name: "espeon", url: "https://pokeapi.co/api/v2/pokemon-species/196/" },
      {
        name: "forretress",
        url: "https://pokeapi.co/api/v2/pokemon-species/205/",
      },
      {
        name: "granbull",
        url: "https://pokeapi.co/api/v2/pokemon-species/210/",
      },
      {
        name: "tyrogue",
        url: "https://pokeapi.co/api/v2/pokemon-species/236/",
      },
      {
        name: "cascoon",
        url: "https://pokeapi.co/api/v2/pokemon-species/268/",
      },
      {
        name: "sableye",
        url: "https://pokeapi.co/api/v2/pokemon-species/302/",
      },
      {
        name: "illumise",
        url: "https://pokeapi.co/api/v2/pokemon-species/314/",
      },
      { name: "lileep", url: "https://pokeapi.co/api/v2/pokemon-species/345/" },
      { name: "swalot", url: "https://pokeapi.co/api/v2/pokemon-species/317/" },
      {
        name: "grumpig",
        url: "https://pokeapi.co/api/v2/pokemon-species/326/",
      },
      {
        name: "shellos",
        url: "https://pokeapi.co/api/v2/pokemon-species/422/",
      },
      {
        name: "drifloon",
        url: "https://pokeapi.co/api/v2/pokemon-species/425/",
      },
      { name: "stunky", url: "https://pokeapi.co/api/v2/pokemon-species/434/" },
      {
        name: "spiritomb",
        url: "https://pokeapi.co/api/v2/pokemon-species/442/",
      },
      {
        name: "skorupi",
        url: "https://pokeapi.co/api/v2/pokemon-species/451/",
      },
      {
        name: "cherrim",
        url: "https://pokeapi.co/api/v2/pokemon-species/421/",
      },
      {
        name: "ambipom",
        url: "https://pokeapi.co/api/v2/pokemon-species/424/",
      },
      {
        name: "drifblim",
        url: "https://pokeapi.co/api/v2/pokemon-species/426/",
      },
      {
        name: "mismagius",
        url: "https://pokeapi.co/api/v2/pokemon-species/429/",
      },
      {
        name: "skuntank",
        url: "https://pokeapi.co/api/v2/pokemon-species/435/",
      },
      {
        name: "drapion",
        url: "https://pokeapi.co/api/v2/pokemon-species/452/",
      },
      { name: "palkia", url: "https://pokeapi.co/api/v2/pokemon-species/484/" },
      {
        name: "purrloin",
        url: "https://pokeapi.co/api/v2/pokemon-species/509/",
      },
      {
        name: "gliscor",
        url: "https://pokeapi.co/api/v2/pokemon-species/472/",
      },
      {
        name: "liepard",
        url: "https://pokeapi.co/api/v2/pokemon-species/510/",
      },
      {
        name: "gothita",
        url: "https://pokeapi.co/api/v2/pokemon-species/574/",
      },
      {
        name: "gothorita",
        url: "https://pokeapi.co/api/v2/pokemon-species/575/",
      },
      {
        name: "gothitelle",
        url: "https://pokeapi.co/api/v2/pokemon-species/576/",
      },
      {
        name: "genesect",
        url: "https://pokeapi.co/api/v2/pokemon-species/649/",
      },
      { name: "goomy", url: "https://pokeapi.co/api/v2/pokemon-species/704/" },
      { name: "noibat", url: "https://pokeapi.co/api/v2/pokemon-species/714/" },
      { name: "hoopa", url: "https://pokeapi.co/api/v2/pokemon-species/720/" },
      {
        name: "crabrawler",
        url: "https://pokeapi.co/api/v2/pokemon-species/739/",
      },
      {
        name: "morelull",
        url: "https://pokeapi.co/api/v2/pokemon-species/755/",
      },
      {
        name: "bounsweet",
        url: "https://pokeapi.co/api/v2/pokemon-species/761/",
      },
      {
        name: "sliggoo",
        url: "https://pokeapi.co/api/v2/pokemon-species/705/",
      },
      { name: "goodra", url: "https://pokeapi.co/api/v2/pokemon-species/706/" },
      {
        name: "noivern",
        url: "https://pokeapi.co/api/v2/pokemon-species/715/",
      },
      {
        name: "shiinotic",
        url: "https://pokeapi.co/api/v2/pokemon-species/756/",
      },
      {
        name: "steenee",
        url: "https://pokeapi.co/api/v2/pokemon-species/762/",
      },
      {
        name: "tapu-fini",
        url: "https://pokeapi.co/api/v2/pokemon-species/788/",
      },
      {
        name: "poipole",
        url: "https://pokeapi.co/api/v2/pokemon-species/803/",
      },
      { name: "lunala", url: "https://pokeapi.co/api/v2/pokemon-species/792/" },
      {
        name: "naganadel",
        url: "https://pokeapi.co/api/v2/pokemon-species/804/",
      },
      { name: "toxel", url: "https://pokeapi.co/api/v2/pokemon-species/848/" },
      {
        name: "sinistea",
        url: "https://pokeapi.co/api/v2/pokemon-species/854/",
      },
      {
        name: "pincurchin",
        url: "https://pokeapi.co/api/v2/pokemon-species/871/",
      },
      {
        name: "indeedee",
        url: "https://pokeapi.co/api/v2/pokemon-species/876/",
      },
      {
        name: "eternatus",
        url: "https://pokeapi.co/api/v2/pokemon-species/890/",
      },
      {
        name: "mantine",
        url: "https://pokeapi.co/api/v2/pokemon-species/226/",
      },
      {
        name: "delcatty",
        url: "https://pokeapi.co/api/v2/pokemon-species/301/",
      },
      {
        name: "gastrodon",
        url: "https://pokeapi.co/api/v2/pokemon-species/423/",
      },
      {
        name: "mienshao",
        url: "https://pokeapi.co/api/v2/pokemon-species/620/",
      },
      {
        name: "toxtricity",
        url: "https://pokeapi.co/api/v2/pokemon-species/849/",
      },
      {
        name: "polteageist",
        url: "https://pokeapi.co/api/v2/pokemon-species/855/",
      },
      {
        name: "grimmsnarl",
        url: "https://pokeapi.co/api/v2/pokemon-species/861/",
      },
      {
        name: "mr-rime",
        url: "https://pokeapi.co/api/v2/pokemon-species/866/",
      },
      {
        name: "tsareena",
        url: "https://pokeapi.co/api/v2/pokemon-species/763/",
      },
      {
        name: "corviknight",
        url: "https://pokeapi.co/api/v2/pokemon-species/823/",
      },
    ],
  },
  {
    id: 8,
    name: "red",
    pokemon_species: [
      {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon-species/4/",
      },
      { name: "paras", url: "https://pokeapi.co/api/v2/pokemon-species/46/" },
      {
        name: "charmeleon",
        url: "https://pokeapi.co/api/v2/pokemon-species/5/",
      },
      {
        name: "charizard",
        url: "https://pokeapi.co/api/v2/pokemon-species/6/",
      },
      {
        name: "vileplume",
        url: "https://pokeapi.co/api/v2/pokemon-species/45/",
      },
      {
        name: "parasect",
        url: "https://pokeapi.co/api/v2/pokemon-species/47/",
      },
      { name: "krabby", url: "https://pokeapi.co/api/v2/pokemon-species/98/" },
      {
        name: "voltorb",
        url: "https://pokeapi.co/api/v2/pokemon-species/100/",
      },
      {
        name: "goldeen",
        url: "https://pokeapi.co/api/v2/pokemon-species/118/",
      },
      {
        name: "magikarp",
        url: "https://pokeapi.co/api/v2/pokemon-species/129/",
      },
      { name: "kingler", url: "https://pokeapi.co/api/v2/pokemon-species/99/" },
      {
        name: "electrode",
        url: "https://pokeapi.co/api/v2/pokemon-species/101/",
      },
      {
        name: "seaking",
        url: "https://pokeapi.co/api/v2/pokemon-species/119/",
      },
      { name: "jynx", url: "https://pokeapi.co/api/v2/pokemon-species/124/" },
      { name: "magmar", url: "https://pokeapi.co/api/v2/pokemon-species/126/" },
      {
        name: "flareon",
        url: "https://pokeapi.co/api/v2/pokemon-species/136/",
      },
      { name: "ledyba", url: "https://pokeapi.co/api/v2/pokemon-species/165/" },
      { name: "yanma", url: "https://pokeapi.co/api/v2/pokemon-species/193/" },
      { name: "slugma", url: "https://pokeapi.co/api/v2/pokemon-species/218/" },
      {
        name: "delibird",
        url: "https://pokeapi.co/api/v2/pokemon-species/225/",
      },
      { name: "ledian", url: "https://pokeapi.co/api/v2/pokemon-species/166/" },
      {
        name: "ariados",
        url: "https://pokeapi.co/api/v2/pokemon-species/168/",
      },
      { name: "scizor", url: "https://pokeapi.co/api/v2/pokemon-species/212/" },
      {
        name: "magcargo",
        url: "https://pokeapi.co/api/v2/pokemon-species/219/",
      },
      {
        name: "octillery",
        url: "https://pokeapi.co/api/v2/pokemon-species/224/",
      },
      { name: "magby", url: "https://pokeapi.co/api/v2/pokemon-species/240/" },
      { name: "ho-oh", url: "https://pokeapi.co/api/v2/pokemon-species/250/" },
      {
        name: "torchic",
        url: "https://pokeapi.co/api/v2/pokemon-species/255/",
      },
      {
        name: "wurmple",
        url: "https://pokeapi.co/api/v2/pokemon-species/265/",
      },
      {
        name: "porygon2",
        url: "https://pokeapi.co/api/v2/pokemon-species/233/",
      },
      {
        name: "combusken",
        url: "https://pokeapi.co/api/v2/pokemon-species/256/",
      },
      {
        name: "blaziken",
        url: "https://pokeapi.co/api/v2/pokemon-species/257/",
      },
      {
        name: "carvanha",
        url: "https://pokeapi.co/api/v2/pokemon-species/318/",
      },
      {
        name: "solrock",
        url: "https://pokeapi.co/api/v2/pokemon-species/338/",
      },
      {
        name: "corphish",
        url: "https://pokeapi.co/api/v2/pokemon-species/341/",
      },
      {
        name: "medicham",
        url: "https://pokeapi.co/api/v2/pokemon-species/308/",
      },
      {
        name: "camerupt",
        url: "https://pokeapi.co/api/v2/pokemon-species/323/",
      },
      {
        name: "crawdaunt",
        url: "https://pokeapi.co/api/v2/pokemon-species/342/",
      },
      { name: "latias", url: "https://pokeapi.co/api/v2/pokemon-species/380/" },
      {
        name: "groudon",
        url: "https://pokeapi.co/api/v2/pokemon-species/383/",
      },
      { name: "deoxys", url: "https://pokeapi.co/api/v2/pokemon-species/386/" },
      {
        name: "kricketot",
        url: "https://pokeapi.co/api/v2/pokemon-species/401/",
      },
      {
        name: "kricketune",
        url: "https://pokeapi.co/api/v2/pokemon-species/402/",
      },
      { name: "rotom", url: "https://pokeapi.co/api/v2/pokemon-species/479/" },
      { name: "tepig", url: "https://pokeapi.co/api/v2/pokemon-species/498/" },
      {
        name: "pansear",
        url: "https://pokeapi.co/api/v2/pokemon-species/513/",
      },
      {
        name: "magmortar",
        url: "https://pokeapi.co/api/v2/pokemon-species/467/",
      },
      {
        name: "porygon-z",
        url: "https://pokeapi.co/api/v2/pokemon-species/474/",
      },
      {
        name: "pignite",
        url: "https://pokeapi.co/api/v2/pokemon-species/499/",
      },
      { name: "emboar", url: "https://pokeapi.co/api/v2/pokemon-species/500/" },
      {
        name: "simisear",
        url: "https://pokeapi.co/api/v2/pokemon-species/514/",
      },
      { name: "throh", url: "https://pokeapi.co/api/v2/pokemon-species/538/" },
      {
        name: "venipede",
        url: "https://pokeapi.co/api/v2/pokemon-species/543/",
      },
      {
        name: "darumaka",
        url: "https://pokeapi.co/api/v2/pokemon-species/554/",
      },
      {
        name: "dwebble",
        url: "https://pokeapi.co/api/v2/pokemon-species/557/",
      },
      {
        name: "scolipede",
        url: "https://pokeapi.co/api/v2/pokemon-species/545/",
      },
      {
        name: "krookodile",
        url: "https://pokeapi.co/api/v2/pokemon-species/553/",
      },
      {
        name: "darmanitan",
        url: "https://pokeapi.co/api/v2/pokemon-species/555/",
      },
      {
        name: "crustle",
        url: "https://pokeapi.co/api/v2/pokemon-species/558/",
      },
      {
        name: "scrafty",
        url: "https://pokeapi.co/api/v2/pokemon-species/560/",
      },
      {
        name: "shelmet",
        url: "https://pokeapi.co/api/v2/pokemon-species/616/",
      },
      {
        name: "druddigon",
        url: "https://pokeapi.co/api/v2/pokemon-species/621/",
      },
      {
        name: "pawniard",
        url: "https://pokeapi.co/api/v2/pokemon-species/624/",
      },
      {
        name: "heatmor",
        url: "https://pokeapi.co/api/v2/pokemon-species/631/",
      },
      {
        name: "fennekin",
        url: "https://pokeapi.co/api/v2/pokemon-species/653/",
      },
      {
        name: "fletchling",
        url: "https://pokeapi.co/api/v2/pokemon-species/661/",
      },
      {
        name: "accelgor",
        url: "https://pokeapi.co/api/v2/pokemon-species/617/",
      },
      {
        name: "bisharp",
        url: "https://pokeapi.co/api/v2/pokemon-species/625/",
      },
      {
        name: "braviary",
        url: "https://pokeapi.co/api/v2/pokemon-species/628/",
      },
      {
        name: "braixen",
        url: "https://pokeapi.co/api/v2/pokemon-species/654/",
      },
      {
        name: "delphox",
        url: "https://pokeapi.co/api/v2/pokemon-species/655/",
      },
      {
        name: "fletchinder",
        url: "https://pokeapi.co/api/v2/pokemon-species/662/",
      },
      {
        name: "talonflame",
        url: "https://pokeapi.co/api/v2/pokemon-species/663/",
      },
      {
        name: "yveltal",
        url: "https://pokeapi.co/api/v2/pokemon-species/717/",
      },
      { name: "litten", url: "https://pokeapi.co/api/v2/pokemon-species/725/" },
      {
        name: "oricorio",
        url: "https://pokeapi.co/api/v2/pokemon-species/741/",
      },
      {
        name: "torracat",
        url: "https://pokeapi.co/api/v2/pokemon-species/726/",
      },
      {
        name: "incineroar",
        url: "https://pokeapi.co/api/v2/pokemon-species/727/",
      },
      {
        name: "turtonator",
        url: "https://pokeapi.co/api/v2/pokemon-species/776/",
      },
      {
        name: "tapu-bulu",
        url: "https://pokeapi.co/api/v2/pokemon-species/787/",
      },
      {
        name: "buzzwole",
        url: "https://pokeapi.co/api/v2/pokemon-species/794/",
      },
      {
        name: "orbeetle",
        url: "https://pokeapi.co/api/v2/pokemon-species/826/",
      },
      {
        name: "sizzlipede",
        url: "https://pokeapi.co/api/v2/pokemon-species/850/",
      },
      {
        name: "zamazenta",
        url: "https://pokeapi.co/api/v2/pokemon-species/889/",
      },
      {
        name: "tyrantrum",
        url: "https://pokeapi.co/api/v2/pokemon-species/697/",
      },
      {
        name: "centiskorch",
        url: "https://pokeapi.co/api/v2/pokemon-species/851/",
      },
    ],
  },
  {
    id: 9,
    name: "white",
    pokemon_species: [
      {
        name: "butterfree",
        url: "https://pokeapi.co/api/v2/pokemon-species/12/",
      },
      { name: "seel", url: "https://pokeapi.co/api/v2/pokemon-species/86/" },
      { name: "dewgong", url: "https://pokeapi.co/api/v2/pokemon-species/87/" },
      { name: "togepi", url: "https://pokeapi.co/api/v2/pokemon-species/175/" },
      { name: "mareep", url: "https://pokeapi.co/api/v2/pokemon-species/179/" },
      {
        name: "togetic",
        url: "https://pokeapi.co/api/v2/pokemon-species/176/",
      },
      {
        name: "smeargle",
        url: "https://pokeapi.co/api/v2/pokemon-species/235/",
      },
      { name: "lugia", url: "https://pokeapi.co/api/v2/pokemon-species/249/" },
      {
        name: "wingull",
        url: "https://pokeapi.co/api/v2/pokemon-species/278/",
      },
      { name: "ralts", url: "https://pokeapi.co/api/v2/pokemon-species/280/" },
      {
        name: "linoone",
        url: "https://pokeapi.co/api/v2/pokemon-species/264/",
      },
      {
        name: "silcoon",
        url: "https://pokeapi.co/api/v2/pokemon-species/266/",
      },
      { name: "kirlia", url: "https://pokeapi.co/api/v2/pokemon-species/281/" },
      {
        name: "gardevoir",
        url: "https://pokeapi.co/api/v2/pokemon-species/282/",
      },
      {
        name: "vigoroth",
        url: "https://pokeapi.co/api/v2/pokemon-species/288/",
      },
      {
        name: "zangoose",
        url: "https://pokeapi.co/api/v2/pokemon-species/335/",
      },
      { name: "absol", url: "https://pokeapi.co/api/v2/pokemon-species/359/" },
      {
        name: "shelgon",
        url: "https://pokeapi.co/api/v2/pokemon-species/372/",
      },
      {
        name: "pachirisu",
        url: "https://pokeapi.co/api/v2/pokemon-species/417/",
      },
      { name: "snover", url: "https://pokeapi.co/api/v2/pokemon-species/459/" },
      { name: "dialga", url: "https://pokeapi.co/api/v2/pokemon-species/483/" },
      {
        name: "regigigas",
        url: "https://pokeapi.co/api/v2/pokemon-species/486/",
      },
      { name: "arceus", url: "https://pokeapi.co/api/v2/pokemon-species/493/" },
      {
        name: "abomasnow",
        url: "https://pokeapi.co/api/v2/pokemon-species/460/",
      },
      {
        name: "togekiss",
        url: "https://pokeapi.co/api/v2/pokemon-species/468/",
      },
      {
        name: "gallade",
        url: "https://pokeapi.co/api/v2/pokemon-species/475/",
      },
      {
        name: "froslass",
        url: "https://pokeapi.co/api/v2/pokemon-species/478/",
      },
      {
        name: "vanillite",
        url: "https://pokeapi.co/api/v2/pokemon-species/582/",
      },
      { name: "emolga", url: "https://pokeapi.co/api/v2/pokemon-species/587/" },
      {
        name: "foongus",
        url: "https://pokeapi.co/api/v2/pokemon-species/590/",
      },
      {
        name: "frillish",
        url: "https://pokeapi.co/api/v2/pokemon-species/592/",
      },
      { name: "tynamo", url: "https://pokeapi.co/api/v2/pokemon-species/602/" },
      {
        name: "litwick",
        url: "https://pokeapi.co/api/v2/pokemon-species/607/",
      },
      { name: "swanna", url: "https://pokeapi.co/api/v2/pokemon-species/581/" },
      {
        name: "vanillish",
        url: "https://pokeapi.co/api/v2/pokemon-species/583/",
      },
      {
        name: "vanilluxe",
        url: "https://pokeapi.co/api/v2/pokemon-species/584/",
      },
      {
        name: "amoonguss",
        url: "https://pokeapi.co/api/v2/pokemon-species/591/",
      },
      {
        name: "jellicent",
        url: "https://pokeapi.co/api/v2/pokemon-species/593/",
      },
      {
        name: "cubchoo",
        url: "https://pokeapi.co/api/v2/pokemon-species/613/",
      },
      {
        name: "rufflet",
        url: "https://pokeapi.co/api/v2/pokemon-species/627/",
      },
      {
        name: "larvesta",
        url: "https://pokeapi.co/api/v2/pokemon-species/636/",
      },
      {
        name: "reshiram",
        url: "https://pokeapi.co/api/v2/pokemon-species/643/",
      },
      {
        name: "meloetta",
        url: "https://pokeapi.co/api/v2/pokemon-species/648/",
      },
      {
        name: "flabebe",
        url: "https://pokeapi.co/api/v2/pokemon-species/669/",
      },
      {
        name: "pancham",
        url: "https://pokeapi.co/api/v2/pokemon-species/674/",
      },
      {
        name: "furfrou",
        url: "https://pokeapi.co/api/v2/pokemon-species/676/",
      },
      {
        name: "swirlix",
        url: "https://pokeapi.co/api/v2/pokemon-species/684/",
      },
      {
        name: "beartic",
        url: "https://pokeapi.co/api/v2/pokemon-species/614/",
      },
      {
        name: "volcarona",
        url: "https://pokeapi.co/api/v2/pokemon-species/637/",
      },
      {
        name: "floette",
        url: "https://pokeapi.co/api/v2/pokemon-species/670/",
      },
      {
        name: "florges",
        url: "https://pokeapi.co/api/v2/pokemon-species/671/",
      },
      {
        name: "pangoro",
        url: "https://pokeapi.co/api/v2/pokemon-species/675/",
      },
      {
        name: "slurpuff",
        url: "https://pokeapi.co/api/v2/pokemon-species/685/",
      },
      {
        name: "crabominable",
        url: "https://pokeapi.co/api/v2/pokemon-species/740/",
      },
      {
        name: "oranguru",
        url: "https://pokeapi.co/api/v2/pokemon-species/765/",
      },
      {
        name: "passimian",
        url: "https://pokeapi.co/api/v2/pokemon-species/766/",
      },
      { name: "drampa", url: "https://pokeapi.co/api/v2/pokemon-species/780/" },
      {
        name: "nihilego",
        url: "https://pokeapi.co/api/v2/pokemon-species/793/",
      },
      {
        name: "pheromosa",
        url: "https://pokeapi.co/api/v2/pokemon-species/795/",
      },
      {
        name: "kartana",
        url: "https://pokeapi.co/api/v2/pokemon-species/798/",
      },
      {
        name: "blacephalon",
        url: "https://pokeapi.co/api/v2/pokemon-species/806/",
      },
      {
        name: "scorbunny",
        url: "https://pokeapi.co/api/v2/pokemon-species/813/",
      },
      { name: "wooloo", url: "https://pokeapi.co/api/v2/pokemon-species/831/" },
      {
        name: "solgaleo",
        url: "https://pokeapi.co/api/v2/pokemon-species/791/",
      },
      {
        name: "cinderace",
        url: "https://pokeapi.co/api/v2/pokemon-species/815/",
      },
      {
        name: "dubwool",
        url: "https://pokeapi.co/api/v2/pokemon-species/832/",
      },
      {
        name: "milcery",
        url: "https://pokeapi.co/api/v2/pokemon-species/868/",
      },
      { name: "snom", url: "https://pokeapi.co/api/v2/pokemon-species/872/" },
      {
        name: "duraludon",
        url: "https://pokeapi.co/api/v2/pokemon-species/884/",
      },
      {
        name: "glastrier",
        url: "https://pokeapi.co/api/v2/pokemon-species/896/",
      },
      {
        name: "vivillon",
        url: "https://pokeapi.co/api/v2/pokemon-species/666/",
      },
      {
        name: "cursola",
        url: "https://pokeapi.co/api/v2/pokemon-species/864/",
      },
      {
        name: "sirfetchd",
        url: "https://pokeapi.co/api/v2/pokemon-species/865/",
      },
      {
        name: "alcremie",
        url: "https://pokeapi.co/api/v2/pokemon-species/869/",
      },
      {
        name: "frosmoth",
        url: "https://pokeapi.co/api/v2/pokemon-species/873/",
      },
    ],
  },
  {
    id: 10,
    name: "yellow",
    pokemon_species: [
      {
        name: "sandshrew",
        url: "https://pokeapi.co/api/v2/pokemon-species/27/",
      },
      { name: "meowth", url: "https://pokeapi.co/api/v2/pokemon-species/52/" },
      { name: "psyduck", url: "https://pokeapi.co/api/v2/pokemon-species/54/" },
      { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon-species/14/" },
      {
        name: "beedrill",
        url: "https://pokeapi.co/api/v2/pokemon-species/15/",
      },
      { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon-species/25/" },
      { name: "raichu", url: "https://pokeapi.co/api/v2/pokemon-species/26/" },
      {
        name: "sandslash",
        url: "https://pokeapi.co/api/v2/pokemon-species/28/",
      },
      {
        name: "ninetales",
        url: "https://pokeapi.co/api/v2/pokemon-species/38/",
      },
      { name: "persian", url: "https://pokeapi.co/api/v2/pokemon-species/53/" },
      { name: "ponyta", url: "https://pokeapi.co/api/v2/pokemon-species/77/" },
      { name: "drowzee", url: "https://pokeapi.co/api/v2/pokemon-species/96/" },
      { name: "zapdos", url: "https://pokeapi.co/api/v2/pokemon-species/145/" },
      {
        name: "moltres",
        url: "https://pokeapi.co/api/v2/pokemon-species/146/",
      },
      {
        name: "rapidash",
        url: "https://pokeapi.co/api/v2/pokemon-species/78/",
      },
      { name: "hypno", url: "https://pokeapi.co/api/v2/pokemon-species/97/" },
      {
        name: "exeggutor",
        url: "https://pokeapi.co/api/v2/pokemon-species/103/",
      },
      {
        name: "electabuzz",
        url: "https://pokeapi.co/api/v2/pokemon-species/125/",
      },
      {
        name: "jolteon",
        url: "https://pokeapi.co/api/v2/pokemon-species/135/",
      },
      {
        name: "cyndaquil",
        url: "https://pokeapi.co/api/v2/pokemon-species/155/",
      },
      { name: "pichu", url: "https://pokeapi.co/api/v2/pokemon-species/172/" },
      {
        name: "sunkern",
        url: "https://pokeapi.co/api/v2/pokemon-species/191/",
      },
      {
        name: "girafarig",
        url: "https://pokeapi.co/api/v2/pokemon-species/203/",
      },
      {
        name: "dunsparce",
        url: "https://pokeapi.co/api/v2/pokemon-species/206/",
      },
      {
        name: "shuckle",
        url: "https://pokeapi.co/api/v2/pokemon-species/213/",
      },
      {
        name: "quilava",
        url: "https://pokeapi.co/api/v2/pokemon-species/156/",
      },
      {
        name: "typhlosion",
        url: "https://pokeapi.co/api/v2/pokemon-species/157/",
      },
      {
        name: "ampharos",
        url: "https://pokeapi.co/api/v2/pokemon-species/181/",
      },
      {
        name: "sunflora",
        url: "https://pokeapi.co/api/v2/pokemon-species/192/",
      },
      { name: "elekid", url: "https://pokeapi.co/api/v2/pokemon-species/239/" },
      { name: "raikou", url: "https://pokeapi.co/api/v2/pokemon-species/243/" },
      {
        name: "makuhita",
        url: "https://pokeapi.co/api/v2/pokemon-species/296/",
      },
      {
        name: "beautifly",
        url: "https://pokeapi.co/api/v2/pokemon-species/267/",
      },
      {
        name: "pelipper",
        url: "https://pokeapi.co/api/v2/pokemon-species/279/",
      },
      {
        name: "ninjask",
        url: "https://pokeapi.co/api/v2/pokemon-species/291/",
      },
      { name: "plusle", url: "https://pokeapi.co/api/v2/pokemon-species/311/" },
      { name: "minun", url: "https://pokeapi.co/api/v2/pokemon-species/312/" },
      { name: "numel", url: "https://pokeapi.co/api/v2/pokemon-species/322/" },
      {
        name: "lunatone",
        url: "https://pokeapi.co/api/v2/pokemon-species/337/",
      },
      {
        name: "manectric",
        url: "https://pokeapi.co/api/v2/pokemon-species/310/",
      },
      {
        name: "jirachi",
        url: "https://pokeapi.co/api/v2/pokemon-species/385/",
      },
      { name: "combee", url: "https://pokeapi.co/api/v2/pokemon-species/415/" },
      {
        name: "chingling",
        url: "https://pokeapi.co/api/v2/pokemon-species/433/",
      },
      { name: "mothim", url: "https://pokeapi.co/api/v2/pokemon-species/414/" },
      {
        name: "vespiquen",
        url: "https://pokeapi.co/api/v2/pokemon-species/416/",
      },
      { name: "uxie", url: "https://pokeapi.co/api/v2/pokemon-species/480/" },
      {
        name: "cresselia",
        url: "https://pokeapi.co/api/v2/pokemon-species/488/",
      },
      {
        name: "victini",
        url: "https://pokeapi.co/api/v2/pokemon-species/494/",
      },
      {
        name: "electivire",
        url: "https://pokeapi.co/api/v2/pokemon-species/466/",
      },
      {
        name: "sewaddle",
        url: "https://pokeapi.co/api/v2/pokemon-species/540/",
      },
      {
        name: "scraggy",
        url: "https://pokeapi.co/api/v2/pokemon-species/559/",
      },
      { name: "archen", url: "https://pokeapi.co/api/v2/pokemon-species/566/" },
      { name: "joltik", url: "https://pokeapi.co/api/v2/pokemon-species/595/" },
      {
        name: "leavanny",
        url: "https://pokeapi.co/api/v2/pokemon-species/542/",
      },
      {
        name: "archeops",
        url: "https://pokeapi.co/api/v2/pokemon-species/567/",
      },
      {
        name: "galvantula",
        url: "https://pokeapi.co/api/v2/pokemon-species/596/",
      },
      {
        name: "mienfoo",
        url: "https://pokeapi.co/api/v2/pokemon-species/619/",
      },
      { name: "keldeo", url: "https://pokeapi.co/api/v2/pokemon-species/647/" },
      {
        name: "haxorus",
        url: "https://pokeapi.co/api/v2/pokemon-species/612/",
      },
      {
        name: "helioptile",
        url: "https://pokeapi.co/api/v2/pokemon-species/694/",
      },
      {
        name: "dedenne",
        url: "https://pokeapi.co/api/v2/pokemon-species/702/",
      },
      {
        name: "cutiefly",
        url: "https://pokeapi.co/api/v2/pokemon-species/742/",
      },
      {
        name: "heliolisk",
        url: "https://pokeapi.co/api/v2/pokemon-species/695/",
      },
      {
        name: "ribombee",
        url: "https://pokeapi.co/api/v2/pokemon-species/743/",
      },
      {
        name: "mimikyu",
        url: "https://pokeapi.co/api/v2/pokemon-species/778/",
      },
      {
        name: "tapu-koko",
        url: "https://pokeapi.co/api/v2/pokemon-species/785/",
      },
      {
        name: "zeraora",
        url: "https://pokeapi.co/api/v2/pokemon-species/807/",
      },
      { name: "yamper", url: "https://pokeapi.co/api/v2/pokemon-species/835/" },
      {
        name: "dottler",
        url: "https://pokeapi.co/api/v2/pokemon-species/825/",
      },
      {
        name: "boltund",
        url: "https://pokeapi.co/api/v2/pokemon-species/836/",
      },
      {
        name: "falinks",
        url: "https://pokeapi.co/api/v2/pokemon-species/870/",
      },
      {
        name: "morpeko",
        url: "https://pokeapi.co/api/v2/pokemon-species/877/",
      },
      { name: "cufant", url: "https://pokeapi.co/api/v2/pokemon-species/878/" },
      {
        name: "regieleki",
        url: "https://pokeapi.co/api/v2/pokemon-species/894/",
      },
      {
        name: "cofagrigus",
        url: "https://pokeapi.co/api/v2/pokemon-species/563/",
      },
    ],
  },
];

export default colors as Color[];
