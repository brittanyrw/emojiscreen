const emojiItems = [
  {
    title: "The 25th Annual Putnum County Spelling Bee",
    emojiImgs: "🔤🐝😂",
    genres: ["musical", "comedy"],
    type: "musical",
    year: 2005,
    itemLink:
      "http://www.playbill.com/production/the-25th-annual-putnam-county-spelling-bee-circle-in-the-square-theatre-vault-0000003219"
  },
  {
    title: "The Great British Bake Off",
    emojiImgs: "👍🇬🇧🍞🎂🥐",
    genres: ["baking", "reality"],
    type: "tv",
    year: 2010,
    itemLink: "https://www.imdb.com/title/tt1877368/"
  },
  {
    title: "2001: A Space Odyssey ",
    emojiImgs: "🐵🌖👨‍🚀🤖👴",
    genres: ["adventure, sci-fi"],
    type: "movie",
    year: 1968,
    itemLink: "https://www.imdb.com/title/tt0062622/?ref_=nv_sr_1?ref_=nv_sr_1"
  },
  {
    title: "300 ",
    emojiImgs: " 💪🤕👊🏻⚔️ 🛡",
    genres: ["action", "drama", "fantasy"],
    type: "movie",
    year: 2007,
    itemLink: "https://www.imdb.com/title/tt0416449"
  },
  {
    title: "A Bug's Life",
    emojiImgs: "🐜🍃🦗🐦",
    genres: ["animation", "adventure", "comedy"],
    type: "movie",
    year: 1998,
    itemLink: "https://www.imdb.com/title/tt0120623/"
  },
  {
    title: "A Star is Born",
    emojiImgs: "🎤👩👨🎸⭐",
    genres: ["drama", "music", "romance"],
    type: "movie",
    year: 2018,
    itemLink: "https://www.imdb.com/title/tt1517451"
  },
  {
    title: "Aladdin",
    emojiImgs: "🧞‍♂️💞👸👳🏰",
    genres: ["adventure", "family", "comedy"],
    type: "movie",
    year: 2019,
    itemLink: "https://www.imdb.com/title/tt6139732"
  },
  {
    title: "Alf",
    emojiImgs: "🚀👽🍴🐈️",
    genres: ["comedy", "family", "sci-fi"],
    type: "tv",
    year: 1986,
    itemLink: "https://www.imdb.com/title/tt0090390"
  },

  {
    title: "American Horror Story: Asylum",
    emojiImgs: "🇺🇸👽👡😈",
    genres: ["drama", "horror", "thriller"],
    itemLink: "https://www.imdb.com/title/tt1844624/",
    type: "tv",
    year: 2011
  },
  {
    title: "American Horror Story: Coven",
    emojiImgs: "🇺🇸✡🕌🐍",
    genres: ["drama", "horror", "thriller"],
    itemLink: "https://www.imdb.com/title/tt1844624/",
    type: "tv",
    year: 2011
  },
  {
    title: "American Horror Story: Freak Show",
    emojiImgs: "🇺🇸🎪🎠👢",
    genres: ["drama", "horror", "thriller"],
    itemLink: "https://www.imdb.com/title/tt1844624/",
    type: "tv",
    year: 2011
  },
  {
    title: "American Horror Story: Hotel",
    emojiImgs: "🇺🇸💊💉🏨",
    genres: ["drama", "horror", "thriller"],
    itemLink: "https://www.imdb.com/title/tt1844624/",
    type: "tv",
    year: 2011
  },
  {
    title: "American Horror Story: Murder House",
    emojiImgs: "🇺🇸👪💀🔫",
    genres: ["drama", "horror", "thriller"],
    itemLink: "https://www.imdb.com/title/tt1844624/",
    type: "tv",
    year: 2011
  },
  {
    title: "Anchorman",
    emojiImgs: "⚓️👨🏻📰",
    genres: ["comedy"],
    itemLink: "https://www.imdb.com/title/tt0357413/",
    type: "movie",
    year: 2004
  },
  {
    title: "Alice in Wonderland",
    emojiImgs: "👱‍🐇⌚👑♥️",
    genres: ["animation", "adventure", "family"],
    type: "movie",
    year: 1951,
    itemLink: "https://www.imdb.com/title/tt0043274/"
  },
  {
    title: "Alien",
    emojiImgs: "🚀👾🔫👨‍🚀",
    genres: ["suspense", "horror"],
    type: "movie",
    year: 1979,
    itemLink: "https://www.imdb.com/title/tt0078748/"
  },
  {
    title: "Alita: Battle Angel",
    emojiImgs: "👩🏻🤖💚👦🏻🤺",
    genres: ["action", "adventure", "sci-fi"],
    type: "movie",
    year: 2019,
    itemLink: "https://www.imdb.com/title/tt0437086/"
  },
  {
    title: "American Idol",
    emojiImgs: "🇺🇸🗣🎤",
    genres: ["game show", "musical"],
    type: "tv",
    year: 2002,
    itemLink: "https://www.imdb.com/title/tt0319931/"
  },
  {
    title: "Anastasia",
    emojiImgs: "🏰👸🧙🇷🇺💗",
    genres: ["animation", "adventure", "drama"],
    itemLink: "https://www.imdb.com/title/tt0118617/",
    type: "movie",
    year: 1997
  },
  {
    title: "American Made",
    emojiImgs: "🕶️🛩️💵🧳",
    genres: ["action", "biography", "comedy"],
    itemLink: "https://www.imdb.com/title/tt3532216/",
    type: "movie",
    year: 2017
  },
  {
    title: "Avatar",
    emojiImgs: "👱‍♂️🔵👱‍♂️👩‍🦰🔵",
    genres: ["action", "fantasy"],
    type: "movie",
    year: 2009,
    itemLink: "https://www.imdb.com/title/tt0499549"
  },
  {
    title: "Ant-Man and the Wasp",
    emojiImgs: "🐜🙍‍♂️🐝🙎‍♀️👻",
    genres: ["action", "adventure", "comedy"],
    type: "movie",
    year: 2018,
    itemLink: "https://www.imdb.com/title/tt5095030/?ref_=fn_al_tt_1"
  },
  {
    title: "Avatar: The Last Airbender",
    emojiImgs: "🥋🌏🔥💧💨",
    genres: ["animation", "action", "adventure"],
    type: "tv",
    year: 2005,
    itemLink: "https://www.imdb.com/title/tt0417299/"
  },
  {
    title: "The Bachelor",
    emojiImgs: "🤵💑👩👩👰",
    genres: ["Drama"],
    itemLink: "https://www.imdb.com/title/tt0313038/",
    type: "tv",
    year: 2002
  },
  {
    title: "The Bachelorette",
    emojiImgs: "👰💑🧔🧔🤵",
    genres: ["Drama"],
    itemLink: "https://www.imdb.com/title/tt0348894/",
    type: "tv",
    year: 2002
  },
  {
    title: "The Breakfast Club",
    emojiImgs: "🏫🧠🤾👸",
    genres: ["comedy", "drama"],
    type: "movie",
    year: 1985,
    itemLink: "https://www.imdb.com/title/tt0088847/"
  },
  {
    title: "America's Next Top Model",
    emojiImgs: "🇺🇸👠👙👭",
    genres: ["game-show", "reality"],
    type: "tv",
    year: 2003
  },
  {
    title: "Battleship Potemkin",
    emojiImgs: "👶🤓😱🔫🛳",
    genres: ["drama", "history"],
    type: "movie",
    year: 1925,
    itemLink: "https://www.imdb.com/title/tt0015648/"
  },
  {
    title: "Beauty and the Beast",
    emojiImgs: "🏰🥀🎶📚🕰️",
    genres: ["animation", "family", "fantasy"],
    type: "movie",
    year: 1991,
    itemLink: "https://www.imdb.com/title/tt2771200"
  },
  {
    title: "Bettlejuice",
    emojiImgs: "⚰️🧟‍👰📙",
    genres: ["comedy", "fantasy"],
    type: "movie",
    year: 1988,
    itemLink: "https://www.imdb.com/title/tt0094721/"
  },
  {
    title: "Be More Chill",
    emojiImgs: "👾🎮😜🎤",
    genres: ["sci-fi", "musical", "comedy", "drama"],
    type: "musical",
    year: 2015,
    itemLink: "https://www.imdb.com/title/tt8804832/"
  },
  {
    title: "Bend It Like Beckham",
    emojiImgs: "🇮🇳🙎🏽‍♀️🙍🏽‍♂️🇬🇧⚽",
    genres: ["comedy", "drama", "romance"],
    type: "movie",
    year: 2002,
    itemLink: "https://www.imdb.com/title/tt0286499/"
  },
  {
    title: "The Big Bang Theory",
    emojiImgs: "🌍💻⚗🔭",
    genres: ["comedy", "romance"],
    type: "tv",
    year: 2007,
    itemLink: "https://www.imdb.com/title/tt0898266/"
  },
  {
    title: "Black Panther",
    emojiImgs: "😺🌍🏴💪🏿🦸🏿",
    genres: ["action", "adventure", "sci-fi"],
    type: "movie",
    year: 2018,
    itemLink: "https://www.imdb.com/title/tt1825683"
  },
  {
    title: "Black Swan",
    emojiImgs: "🩰👯‍♀️🦢🎭🔪",
    genres: ["drama", "thriller"],
    type: "movie",
    year: 2010,
    itemLink: "https://www.imdb.com/title/tt0947798"
  },
  {
    title: "Blade Runner",
    emojiImgs: "🗡️🏃🌕",
    genres: ["action", "thriller", "sci-fi"],
    itemLink: "https://www.imdb.com/title/tt0083658/",
    type: "movie",
    year: 1982
  },
  {
    title: "Bad Santa",
    emojiImgs: "🎅🧝‍♂️👦🧸",
    genres: ["comedy", "crime", "drama"],
    type: "movie",
    year: 2003,
    itemLink: "https://www.imdb.com/title/tt0307987/"
  },
  {
    title: "Blazing Saddles",
    emojiImgs: "🔥🤠🐴🏇🏜️",
    genres: ["western", "comedy"],
    type: "movie",
    year: 1974,
    itemLink: "https://www.imdb.com/title/tt0071230/"
  },
  {
    title: "The Book of Mormon",
    emojiImgs: "👋🔔👨📖✝️",
    genres: ["comedy", "satire", "musical"],
    type: "musical",
    year: 2011,
    itemLink:
      "http://www.playbill.com/production/the-book-of-mormon-eugene-oneill-theatre-vault-0000013715"
  },
  {
    title: "Boys over Flowers",
    emojiImgs: "👦🔼💮",
    genres: ["comedy", "drama", "romance"],
    type: "tv",
    year: 2009,
    itemLink: "https://www.imdb.com/title/tt1370334/"
  },
  {
    title: "Brave",
    emojiImgs: "🏹🎯🛡️🐻",
    genres: ["animation", "adventure", "comedy"],
    type: "movie",
    year: 2012,
    itemLink: "https://www.imdb.com/title/tt1217209/"
  },
  {
    title: "Breaking Bad",
    emojiImgs: "🌵🤓🧪💊💰",
    genres: ["crime", "drama", "thriller"],
    type: "tv",
    year: 2008,
    itemLink: "https://www.imdb.com/title/tt0903747/"
  },
  {
    title: "Bring It On",
    emojiImgs: "💃🤸‍♀️💗🤷‍♀️🧖‍♀️",
    genres: ["comedy", "romance", "sport"],
    type: "movie",
    year: 2000,
    itemLink: "https://www.imdb.com/title/tt0204946/"
  },
  {
    title: "Brooklyn Nine-Nine",
    emojiImgs: "🗽👮🏻‍♂️👮🏿‍👮🏻‍♀️👮🏾",
    genres: ["comedy", "crime"],
    type: "tv",
    year: 2013,
    itemLink: "https://www.imdb.com/title/tt2467372/"
  },
  {
    title: "Buffy the Vampire Slayer",
    emojiImgs: "👩‍🔪🧛🧛‍♂️‍",
    genres: ["drama", "fantasy", "romance", "action"],
    type: "tv",
    year: 1997,
    itemLink: "https://www.imdb.com/title/tt0118276/"
  },
  {
    title: "Bungou Stray Dogs: Dead Apple",
    emojiImgs: "🍎🗡🐶🇯🇵",
    genres: ["animation"],
    type: "movie",
    year: 2018,
    itemLink: "https://www.imdb.com/title/tt8391976/"
  },
  {
    title: "Cars",
    emojiImgs: "🚗🍃🏁⛽️",
    genres: ["animation", "comedy", "family"],
    type: "movie",
    year: 2006,
    itemLink: "https://www.imdb.com/title/tt0317219/"
  },
  {
    title: "Captain America: Civil War",
    emojiImgs: "🇺🇸🛡🤜🔫🔥",
    genres: ["action", "sci-fi", "adventure"],
    type: "movie",
    year: 2016,
    itemLink: "https://www.imdb.com/title/tt3498820/"
  },
  {
    title: "Captain America: The First Avenger",
    emojiImgs: "👨‍✈️🇺🇸🛡💪👹",
    genres: ["action", "sci-fi", "adventure"],
    type: "movie",
    year: 2011,
    itemLink: "https://www.imdb.com/title/tt0458339/"
  },
  {
    title: "Captain America: The Winter Soldier",
    emojiImgs: "🇺🇸🛡❄👨‍✈️💪",
    genres: ["action", "sci-fi", "adventure"],
    type: "movie",
    year: 2014,
    itemLink: "https://www.imdb.com/title/tt1843866/"
  },
  {
    title: "Captain Marvel",
    emojiImgs: "🙍‍♀️🛩🌌🦹‍♀️",
    genres: ["action", "adventure", "sci-fi"],
    type: "movie",
    year: 2019,
    itemLink: "https://www.imdb.com/title/tt4154664/"
  },
  {
    title: "Cast Away",
    emojiImgs: "🏐🥥🏝️",
    genres: ["action", "comedy", "musical"],
    itemLink: "https://www.imdb.com/title/tt0162222/",
    type: "movie",
    year: 2000
  },
  {
    title: "Catch Me If You Can",
    emojiImgs: "🕵️‍🏃‍👨‍✈️🏃‍‍",
    genres: ["biography", "crime", "drama"],
    type: "movie",
    year: 2002,
    itemLink: "https://www.imdb.com/title/tt0264464/"
  },
  {
    title: "Cats",
    emojiImgs: "😸 😹 😻 🙀 😿",
    genres: ["drama","musical"],
    itemLink: "https://www.http://www.playbill.com/production/cats-winter-garden-theatre-vault-0000011527.com/title/tt0357413/",
    type: "musical",
    year: 1982
  },
  {
    title: "The Cheetah Girls",
    emojiImgs: "🐆👭🐆👭🎵",
    genres: ["comedy", "drama", "musical"],
    itemLink: "https://www.imdb.com/title/tt0338852/",
    type: "movie",
    year: 2003
  },
  {
    title: "Chernobyl",
    emojiImgs: "💥☢️🇺🇦",
    genres: ["drama", "history"],
    itemLink: "https://www.imdb.com/title/tt7366338/",
    type: "tv",
    year: 2019
  },
  {
    title: "Chicago",
    emojiImgs: "🎷👯🔫👠🕺",
    genres: ["musical", "drama", "comedy"],
    itemLink: "https://www.imdb.com/title/tt0299658/",
    type: "movie",
    year: 2002
  },
  {
    title: "Chicken Little",
    emojiImgs: "🐓👽🌎",
    genres: ["family", "comedy", "animated"],
    itemLink: "https://www.imdb.com/title/tt0371606/",
    type: "movie",
    year: 2005
  },
  {
    title: "Child's Play",
    emojiImgs: "👶😰😫☠",
    genres: ["action", "horror", "sci-fi"],
    itemLink: "https://www.imdb.com/title/tt8663516/",
    type: "movie",
    year: 2019
  },
  {
    title: "Cinderella",
    emojiImgs: "🤴👸👠🐭🧚‍♀️",
    genres: ["animation", "family", "fantasy"],
    type: "movie",
    year: 1950,
    itemLink: "https://www.imdb.com/title/tt0042332/"
  },
  {
    title: "Cloudy with a Chance of Meatballs",
    emojiImgs: " ☁️🥩⚽☂️",
    genres: ["animation", "adventure", "comedy"],
    itemLink: "https://www.imdb.com/title/tt0844471/",
    type: "movie",
    year: 2009
  },
  {
    title: "Clueless",
    emojiImgs: "🛍️💅💞💋🗽",
    genres: ["comedy", "romance"],
    itemLink: "https://www.imdb.com/title/tt0112697/",
    type: "movie",
    year: 1995
  },
  {
    title: "The Color Purple",
    emojiImgs: "💜🏃🏾‍♀️🧘🏾‍♀️",
    genres: ["drama"],
    itemLink: "https://www.imdb.com/title/tt0088939/",
    type: "movie",
    year: 1986
  },
  {
    title: "Come From Away",
    emojiImgs: "🗽✈️🇨🇦🛄💞",
    genres: ["drama", "history"],
    itemLink: "http://www.playbill.com/production/come-from-away-2016-2017",
    type: "musical",
    year: 2015
  },
  {
    title: "The Crown",
    emojiImgs: "👑🤴👸🇬🇧",
    genres: ["drama", "history"],
    type: "tv",
    year: 2016,
    itemLink: "https://www.imdb.com/title/tt4786824/"
  },
  {
    title: "The Curious Case of Benjamin Button",
    emojiImgs: "👴🏻➡️🧔🏻➡️👶🏻",
    genres: ["drama", "fantasy", "romance"],
    type: "movie",
    year: 2008,
    itemLink: "https://www.imdb.com/title/tt0421715/"
  },
  {
    title: "Dance Moms",
    emojiImgs: "💃🤰🤱💃‍",
    genres: ["reality-tv"],
    type: "tv",
    year: 2011,
    itemLink: "https://www.imdb.com/title/tt1991410/"
  },
  {
    title: "Deadwood",
    emojiImgs: "🤠🔫⚰️",
    genres: ["drama", "crime", "history"],
    type: "tv",
    year: 2004,
    itemLink: "https://www.imdb.com/title/tt0348914/"
  },
  {
    title: "Dark Phoenix",
    emojiImgs: "🕶️☀️🔥 ",
    genres: ["sci-fi", "action", "adventure"],
    type: "movie",
    year: 2019,
    itemLink: "https://www.imdb.com/title/tt6565702/?ref_=ttls_li_tt"
  },
  {
    title: "Deadpool",
    emojiImgs: "⚰️🏊⚔️",
    genres: ["action", "adventure", "comedy"],
    type: "movie",
    year: 2016,
    itemLink: "https://www.imdb.com/title/tt1431045/?ref_=ttls_li_tt"
  },
  {
    title: "Deadpool 2",
    emojiImgs: "⚰️🏊2️⃣⚔️",
    genres: ["action", "adventure", "comedy"],
    type: "movie",
    year: 2018,
    itemLink: "https://www.imdb.com/title/tt5463162/?ref_=ttls_li_tt"
  },
  {
    title: "Dear Evan Hansen",
    emojiImgs: "💌⚰️👨‍👩‍👧‍👦💻💞",
    genres: ["drama", "musical"],
    type: "musical",
    year: 2015
  },
  {
    title: "Devil Wears Prada",
    emojiImgs: "😈💄👠🧣👓",
    genres: ["comedy", "drama"],
    type: "movie",
    year: 2006
  },
  {
    title: "Dinosaurs",
    emojiImgs: "🦖⛰️😂",
    genres: ["Comedy", "Family", "Fantasy "],
    itemLink: "https://www.imdb.com/title/tt0101081/",
    type: "tv",
    year: 1991
  },
  {
    title: "Dil Dhadakne Do",
    emojiImgs: "♥️💓✌️",
    genres: ["bollywood", "drama"],
    type: "movie",
    year: 2015,
    itemLink: "https://www.imdb.com/title/tt4110568/"
  },
  {
    title: "Dilwale Dulhania Le Jayenge",
    emojiImgs: "💕👰🚗",
    genres: ["drama", "romance"],
    type: "movie",
    year: 1995,
    itemLink: "https://www.imdb.com/title/tt0112870/"
  },
  {
    title: "Dirty Dancing",
    emojiImgs: "🍉💃🕶🕺👶",
    genres: ["drama", "music", "romance"],
    type: "movie",
    year: 1987
  },
  {
    title: "Donnie Darko",
    emojiImgs: "✈💥🐰✈💥",
    genres: ["Drama", "Sci-Fi", "Thriller"],
    type: "movie",
    year: 2001,
    itemLink: "https://www.imdb.com/title/tt0246578/"
  },
  {
    title: "Doctor Who",
    emojiImgs: "👶⚡️🚀🌍‍",
    genres: ["adventure", "drama", "family"],
    type: "tv",
    year: 2005,
    itemLink: "https://www.imdb.com/title/tt0436992/"
  },
  {
    title: "Doctor Strange",
    emojiImgs: "👨‍⚕️💎🧙‍♂️",
    genres: ["action", "adventure", "fantasy"],
    type: "movie",
    year: 1987,
    itemLink: "https://www.imdb.com/title/tt1211837/"
  },
  {
    title: "Dora and the Lost City of Gold",
    emojiImgs: "👧🐒🏕️🏰💰",
    genres: ["fantasy", "adventure", "comedy"],
    type: "movie",
    year: 2019
  },
  {
    title: "Dreams",
    emojiImgs: "💤💭👺🇯🇵",
    genres: ["drama", "fantasy"],
    itemLink: "https://www.imdb.com/title/tt0100998/",
    type: "movie",
    year: 1990
  },
  {
    title: "Dude, Where's My Car?",
    emojiImgs: "👨❓🚗",
    gebres: ["comedy", "sci-fi"],
    type: "movie",
    year: 2000,
    itemLink: "https://www.imdb.com/title/tt0242423/"
  },
  {
    title: "The Emoji Movie",
    emojiImgs: "😀😒✋💩",
    genres: ["animation", "adventure", "comedy"],
    itemLink: "https://www.imdb.com/title/tt4877122/",
    type: "movie",
    year: 2017
  },
  {
    title: "Eragon",
    emojiImgs: "👦🏼🐉🥚⚔️👑",
    genres: ["action", "adventure", "family"],
    itemLink: "https://www.imdb.com/title/tt0449010/",
    type: "movie",
    year: 2006
  },
  {
    title: "E.T. the Extra-Terrestrial",
    emojiImgs: "🌙🚲👉🏻👈🏻👽",
    genres: ["family", "sci-fi"],
    type: "movie",
    year: 1982
  },
  {
    title: "Edward Sicssorhands",
    emojiImgs: "👦✂🙌",
    genres: ["drama", "fantasy", "romance"],
    itemLink: "https://www.imdb.com/title/tt0099487/",
    type: "movie",
    year: 1990
  },
  {
    title: "Fantastic Beasts and Where to Find Them",
    emojiImgs: "🐉🐀🦉🔎💼",
    genres: ["adventure", "family", "fantasy"],
    itemLink: "https://www.imdb.com/title/tt3183660/",
    type: "movie",
    year: 2016
  },
  {
    title: "Fantastic Beasts: The Crimes of Grindelwald",
    emojiImgs: "🐉🦉🚔👨‍🦳🧙‍♂️",
    genres: ["adventure", "family", "fantasy"],
    itemLink: "https://www.imdb.com/title/tt4123430/",
    type: "movie",
    year: 2018
  },
  {
    title: "Fargo",
    emojiImgs: "🚔🌳👶🏻⚰️",
    genres: ["crime", "drama", "thriller"],
    type: "movie",
    year: 1996
  },
  {
    title: "The Fast and the Furious",
    emojiImgs: "🚗💨😡",
    genres: ["action", "crime", "thriller"],
    type: "movie",
    year: 2001
  },
  {
    title: "Fight Club",
    emojiImgs: "🥊🧼🤐",
    genres: ["drama"],
    type: "movie",
    year: 1999
  },
  {
    title: "Finding Nemo",
    emojiImgs: "🐟🦈🔭",
    genres: ["animation"],
    type: "movie",
    year: 2003
  },
  {
    title: "Five Feet Apart ",
    emojiImgs: "🏣🧒5⃣👧💞",
    genres: ["Drama", "Romance", "Comedy"],
    type: "movie",
    year: 2019
  },
  {
    title: "The Fresh Prince of Bel-Air",
    emojiImgs: "👑🛎💨‍",
    genres: ["comedy"],
    type: "tv",
    year: 1990,
    itemLink: "https://www.imdb.com/title/tt0098800/"
  },
  {
    title: "From Dusk Till Down",
    emojiImgs: "🧛‍♀️🩸🦶🏻",
    genres: ["action", "crime", "horror"],
    itemLink: "https://www.imdb.com/title/tt0116367/",
    type: "movie",
    year: 1996
  },
  {
    title: "Forrest Gump",
    emojiImgs: "🏃🏻🍫🍤",
    genres: ["drama", "romance"],
    itemLink: "https://www.imdb.com/title/tt0109830/",
    type: "movie",
    year: 1994
  },
  {
    title: "Flight of the Conchords",
    emojiImgs: "🎵🦏🦛🥝🇳🇿",
    genres: ["comedy", "musical", "adventure"],
    type: "tv",
    year: 2007,
    itemLink: "https://www.imdb.com/title/tt0863046/"
  },
  {
    title: "Four Weddings and a Funeral",
    emojiImgs: "4️⃣💒💑⚰️",
    genres: ["Comedy", "Drama", "Romance"],
    type: "movie",
    year: 1994,
    itemLink: "https://www.imdb.com/title/tt0109831/"
  },
  {
    title: "Frozen",
    emojiImgs: "👭☃️❄️",
    genres: ["animation", "adventure", "comedy"],
    type: "movie",
    year: 2013
  },
  {
    title: "Firebringer",
    emojiImgs: "🦆🕊️⚔️🔥👽",
    genres: ["musical", "comedy", "history"],
    type: "musical",
    year: 2016,
    itemLink: "https://www.imdb.com/title/tt6395628/"
  },
  {
    title: "Game of Thrones",
    emojiImgs: "🐉👑🗡️📚🧟",
    genres: ["action", "adventure", "drama"],
    type: "tv",
    year: 2011,
    itemLink: "https://www.imdb.com/title/tt0944947/"
  },
  {
    title: "Gavin and Stacey",
    emojiImgs: "🤵🏻👰🏼🙍🏻‍👱🏻‍👶🏼",
    genres: ["comedy", "romance"],
    itemLink: "https://www.imdb.com/title/tt0908454",
    type: "tv",
    year: 2007
  },
  {
    title: "Get Out",
    emojiImgs: "😮😱💪🏿🦸🏿",
    genres: ["horror", "sci-fi"],
    type: "movie",
    year: 2018,
    itemLink: "https://www.imdb.com/title/tt5052448/"
  },
  {
    title: "Ghostbusters",
    emojiImgs: "👻🔫👨‍🚒️",
    genres: ["comedy", "action", "fantasy"],
    type: "movie",
    year: 1984,
    itemLink: "https://www.imdb.com/title/tt1289401/"
  },
  {
    title: "The Shining",
    emojiImgs: "👭🔪🚪🆘",
    genres: ["drama", "horror"],
    type: "movie",
    year: 1980,
    itemLink: "https://www.imdb.com/title/tt0081505/?ref_=nv_sr_1?ref_=nv_sr_1"
  },
  {
    title: "Gilmore Girls",
    emojiImgs: "👩‍👧☕🧢👩‍⚖️👨‍⚖️",
    genres: ["comedy", "drama"],
    type: "tv",
    year: 2000,
    itemLink: "https://www.imdb.com/title/tt0238784/"
  },
  {
    title: "The Girl Next Door ",
    emojiImgs: "👩👉🚪",
    genres: ["comedy", "drama", "romance"],
    type: "movie",
    year: 2004,
    itemLink: "https://www.imdb.com/title/tt0265208/"
  },
  {
    title: "Gladiator",
    emojiImgs: "🤺⚔️🛡️",
    genres: ["action", "adventure", "drama"],
    type: "movie",
    year: 2000,
    itemLink: "https://www.imdb.com/title/tt0172495/"
  },
  {
    title: "Glee",
    emojiImgs: "👩🏻‍🏫💃🏻🕺🎤🌈",
    genres: ["comedy", "drama", "music"],
    itemLink: "https://www.imdb.com/title/tt1327801/",
    type: "tv",
    year: 2009
  },
  {
    title: "Goonies",
    emojiImgs: "🚴🚴‍♀️😲💍👨‍👩‍👧‍👦",
    genres: ["adventure", "comedy", "family"],
    type: "movie",
    year: 1985,
    itemLink: "https://www.imdb.com/title/tt0089218/"
  },
  {
    title: "Gravity",
    emojiImgs: "🚀✨👩🏻‍🚀",
    genres: ["drama", "sci-fi", "thriller"],
    itemLink: "https://www.imdb.com/title/tt1454468/",
    type: "movie",
    year: 2013
  },
  {
    title: "Grease",
    emojiImgs: "🌅👸💞👨‍🎤🚘",
    genres: ["musical", "romance"],
    type: "movie",
    year: 1978,
    itemLink: "https://www.imdb.com/title/tt0077631/"
  },
  {
    title: "Great Expectations",
    emojiImgs: "👫🛫💏🎨💔",
    genres: ["drama", "romance"],
    type: "movie",
    year: 1998,
    itemLink: "https://www.imdb.com/title/tt0119223/"
  },
  {
    title: "The Greatest Showman",
    emojiImgs: "🎩🕺🎪🔥🎶",
    genres: ["biography", "drama", "musical"],
    type: "movie",
    year: 2017,
    itemLink: "https://www.imdb.com/title/tt1485796/"
  },
  {
    title: "Grey's Anatomy",
    emojiImgs: "💊💉🧪⚕🍷",
    genres: ["drama", "romance"],
    type: "tv",
    year: 2005,
    itemLink: "https://www.imdb.com/title/tt0413573/"
  },
  {
    title: "The Girl with the Dragon Tattoo",
    emojiImgs: "👧💉🐉",
    itemLink: "https://www.imdb.com/title/tt0000000001132620/",
    genres: ["crime", "drama", "mystery"],
    type: "movie",
    year: 2009
  },
  {
    title: "Hachi: A Dog's Tale",
    emojiImgs: "👨‍🏫💔🚉🐕🌭",
    genres: ["family", "drama"],
    type: "movie",
    year: 2009
  },
  {
    title: "Hackers",
    emojiImgs: "👩🏻‍💻👨🏻‍💻📡🕵",
    genres: ["action-adventure", "mystery", "fiction-fantasy"],
    type: "movie",
    year: 1995,
    itemLink: "https://www.imdb.com/title/tt0113243/"
  },
  {
    title: "Hannibal",
    emojiImgs: "🔪🩸🥩👨‍⚕️",
    genres: ["crime", "drama", "horror"],
    type: "tv",
    year: 2013,
    itemLink: "https://www.imdb.com/title/tt2243973/"
  },
  {
    title: "Hamilton: The Musical",
    emojiImgs: "💵🖋️⚖️🎵📜",
    genres: ["drama", "comedy", "musical"],
    type: "musical",
    year: 2015
  },
  {
    title: "Hair",
    emojiImgs: "☮🎶🇻🇳🇺🇸⚰ ",
    genres: ["comedy", "drama", "musical"],
    type: "musical",
    year: 1979,
    itemLink: "https://www.imdb.com/title/tt00079261/"
  },
  {
    title: "Hairspray: The Musical",
    emojiImgs: "💋💃👠👨🏽‍🦱👨🏻",
    genres: ["comedy", "drama", "musical"],
    type: "musical",
    year: 2002
  },
  {
    title: "Hereditary",
    emojiImgs: "😱👑🚗 👨‍👩‍👧‍👧 🏡",
    genres: ["drama", "horror", "mystery"],
    type: "movie",
    year: 2018,
    itemLink: "https://www.imdb.com/title/tt7784604/"
  },
  {
    title: "The Hangover",
    emojiImgs: "🤵🎰🥃🍾🤕",
    genres: ["comedy"],
    type: "movie",
    year: 2009
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    emojiImgs: "🐍🧙‍♂️📓👩🏻‍🦰⚡",
    genres: ["adventure", "family", "fantasy"],
    type: "movie",
    year: 2002
  },
  {
    title: "Harry Potter and the Deathly Hallows – Part 1",
    emojiImgs: "👰🏻🤵🏻💀🐍🔪",
    genres: ["adventure", "family", "fantasy"],
    type: "movie",
    year: 2010
  },
  {
    title: "Harry Potter and the Deathly Hallows – Part 2",
    emojiImgs: "💍💀🐍🏰🔥",
    genres: ["adventure", "family", "fantasy"],
    type: "movie",
    year: 2011
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    emojiImgs: "🐉🧜☠️🏆🧙‍♂️",
    genres: ["adventure", "family", "fantasy"],
    type: "movie",
    year: 2005
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    emojiImgs: "👦🏻🐍💀📖🧙🏻‍♂️",
    genres: ["adventure", "family", "fantasy"],
    type: "movie",
    year: 2009
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    emojiImgs: "💀🏠💅🏻💭🔮",
    genres: ["adventure", "family", "fantasy"],
    type: "movie",
    year: 2007
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    emojiImgs: "📨🎂✨📖💎",
    genres: ["adventure", "family", "fantasy"],
    type: "movie",
    year: 2001
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    emojiImgs: "👨‍🏫🌕🐺🐀⚡",
    genres: ["adventure", "family", "fantasy"],
    type: "movie",
    year: 2004
  },
  {
    title: "Haunting of Hill House",
    emojiImgs: "🏠🚪👻👨‍👩‍👧⚰️",
    genres: ["horror", "mystery", "drama"],
    itemLink: "https://www.imdb.com/title/tt6763664/",
    type: "tv",
    year: 2018
  },
  {
    title: "Hidden Figures",
    emojiImgs: "🚀👩🏽‍💻🧮👨🏻‍🦳👨🏻‍🚀",
    genres: ["biography", "drama", "history"],
    type: "movie",
    year: 2016
  },
  {
    title: "The Hills",
    emojiImgs: "👩‍🎓🌄👚📏",
    genres: ["comedy", "drama"],
    itemLink: "https://www.imdb.com/title/tt0489598/",
    type: "tv",
    year: 2006
  },
  {
    title: "The Hills Have Eyes",
    emojiImgs: "👨‍👩‍👧‍👦🚐🏔👀",
    genres: ["horror", "thriller"],
    type: "movie",
    year: 2006
  },
  {
    title: "Holes",
    emojiImgs: "0️⃣👟🦎🕳️☀️",
    genres: ["Adventure", "Comedy", "Drama", "Family", "Mystery"],
    type: "movie",
    year: 2003,
    itemLink: "https://www.imdb.com/title/tt0311289/"
  },
  {
    title: "Home Alone",
    emojiImgs: "🏠🙈🎄",
    genres: ["comedy", "family"],
    type: "movie",
    year: 1990
  },
  {
    title: "Independence Day",
    emojiImgs: "🛸👽🌎🛩️",
    genres: ["war", "adventure", "drama", "sci-fi"],
    type: "movie",
    year: 1996,
    itemLink: "https://www.imdb.com/title/tt0116629/"
  },
  {
    title: "The Incredible Hulk",
    emojiImgs: "🤢💪🦍",
    genres: ["action", "adventure", "sci-fi"],
    type: "movie",
    year: 2008,
    itemLink: "https://www.imdb.com/title/tt0800080/"
  },
  {
    title: "Inglorious Basterds",
    emojiImgs: "💀🔪🎖️📽️🔥",
    genres: ["war", "history"],
    type: "movie",
    year: 2009
  },
  {
    title: "Interstellar",
    emojiImgs: "🌍👨‍🚀🚀⏱️❤️",
    genres: ["adventure", "drama", "sci-fi"],
    type: "movie",
    year: 2014,
    itemLink: "https://www.imdb.com/title/tt0816692/"
  },
  {
    title: "Into the Woods",
    emojiImgs: "➡️🌲🌲🔥🎶",
    genres: ["drama", "musical"],
    type: "musical",
    year: 1987
  },
  {
    title: "IT",
    emojiImgs: "🎈🤡☔🚲",
    genres: ["horror", "thriller"],
    type: "movie",
    year: 2017
  },
  {
    title: "IT: Chapter Two",
    emojiImgs: "🤡🎈🎈👦",
    genres: ["horror", "thriller"],
    type: "movie",
    year: 2019
  },
  {
    title: "The IT Crowd",
    emojiImgs: "🖥🤓👱🏼‍♀️👦🏼",
    genres: ["comedy"],
    itemLink: "https://www.imdb.com/title/tt0487831/",
    type: "tv",
    year: 2006
  },
  {
    title: "It's Always Sunny in Philadelphia",
    emojiImgs: "🕐☀🏙🧀🥩",
    genres: ["comedy"],
    type: "tv",
    year: 2005
  },
  {
    title: "Jackie Brown",
    emojiImgs: "🙎🏿‍♀️🛫💼💰",
    genres: ["crime", "film-noir"],
    type: "movie",
    year: 1997
  },
  {
    title: "James and the Giant Peach",
    emojiImgs: "🍑👦🦗🐛🐞",
    genres: ["animation", "adventure", "family"],
    type: "movie",
    year: 1996,
    itemLink: "https://www.imdb.com/title/tt0116683/"
  },
  {
    title: "Jane the Virgin",
    emojiImgs: "💃🏽♍️🌴👶🏽💖",
    genres: ["comedy", "romance", "tele novella"],
    type: "tv",
    year: 2014
  },
  {
    title: "Jaws",
    emojiImgs: "🛥️🌊🏊‍♂️🦈",
    genres: ["adventure", "drama", "thriller"],
    type: "movie",
    year: 1975
  },
  {
    title: "Jersey Shore ",
    emojiImgs: "👭🤵👙🍸💔",
    genres: ["comedy", "drama", "reality"],
    type: "tv",
    year: 2009,
    itemLink: "https://www.imdb.com/title/tt1563069/"
  },
  {
    title: "John Wick",
    emojiImgs: "🔪🐶🚗🔫🤵🏻",
    genres: ["action", "crime", "thriller"],
    type: "movie",
    year: 2014
  },
  {
    title: "John Wick: Chapter 3 - Parabellum",
    emojiImgs: "🔫🗡🐶💰🏎",
    genres: ["action", "crime", "thriller"],
    type: "movie",
    year: 2019
  },
  {
    title: "Jurassic Park",
    emojiImgs: "🔬🦖🏝",
    genres: ["action", "adventure", "sci-fi"],
    type: "movie",
    year: 1993
  },
  {
    title: "Jurassic Park: Fallen Kingdom",
    emojiImgs: "🦖🦕🐊🤯😫",
    genres: ["action", "adventure", "Sci-Fi"],
    type: "movie",
    year: 2018
  },
  {
    title: "The Karate Kid Part II",
    emojiImgs: "🤼‍♂️👦🏻👘2️⃣",
    genres: ["action", "drama", "family"],
    type: "movie",
    year: 1986,
    itemLink: "https://www.imdb.com/title/tt0091326/"
  },
  {
    title: "The Karate Kid",
    emojiImgs: "🤼‍♂️👦🏻👘",
    genres: ["action", "drama", "family"],
    type: "movie",
    year: 1984,
    itemLink: "https://www.imdb.com/title/tt0087538/"
  },
  {
    title: "King Authur",
    emojiImgs: "⚔️🤴🏼️️️⚔️",
    genres: ["action", "sci-fi"],
    type: "movie",
    year: 2017,
    itemLink: "https://www.imdb.com/title/tt1972591/"
  },
  {
    title: "Kingsman: The Secret Service ",
    emojiImgs: "👑👨👮🤵🐕",
    genres: ["action", "adventure", "comedy"],
    type: "movie",
    year: 2014,
    itemLink: "https://www.imdb.com/title/tt2802144/"
  },
  {
    title: "Kiki's Delivery Service",
    emojiImgs: "👧🐱🧹📫",
    genres: ["animated"],
    type: "movie",
    year: 1989
  },
  {
    title: "Kill Bill: Volume 1",
    emojiImgs: "🗡️🙍‍🥋🦶🇯🇵",
    genres: ["action", "drama"],
    type: "movie",
    year: 2003
  },
  {
    title: "Kill Bill: Volume 2",
    emojiImgs: "👰🗡️👧💓💥",
    genres: ["action", "drama"],
    type: "movie",
    year: 2004
  },
  {
    title: "Kung Fu Panda",
    emojiImgs: "🐼🎍🇨🇳🥟🍚",
    genres: ["animation", "action", "adventure"],
    type: "movie",
    year: 2008
  },
  {
    title: "Lady and the Tramp",
    emojiImgs: "💃🐶🍝",
    genres: ["animation", "romance"],
    type: "movie",
    year: 1955,
    itemLink: "https://www.imdb.com/title/tt0048280/"
  },
  {
    title: "La La Land",
    emojiImgs: "💃🙋‍♂️🎹🎶",
    genres: ["romance", "drama", "musical"],
    type: "movie",
    year: 2016,
    itemLink: "https://www.imdb.com/title/tt3783958/"
  },
  {
    title: "Legally Blonde",
    emojiImgs: "👩‍⚖️👠💘🏫🐶",
    genres: ["romance", "comedy"],
    type: "movie",
    year: 2001,
    itemLink: "https://www.imdb.com/title/tt0250494/"
  },
  {
    title: "Leon: The Professional",
    emojiImgs: "🧒🔫🧔🌷‍",
    genres: ["thriller"],
    type: "movie",
    year: 1994,
    itemLink: "https://www.imdb.com/title/tt0110413/"
  },
  {
    title: "Les Misérables",
    emojiImgs: "🇫🇷🥖👮🏻",
    genres: ["drama", "history", "musical"],
    type: "musical",
    year: 1987,
    itemLink:
      "https://www.playbill.com/production/les-miserables-broadway-theatre-vault-0000012257"
  },
  {
    title: "Passaport to Paris",
    emojiImgs: "🎟✈🗼",
    genres: ["comedy", "romance"],
    type: "movie",
    year: 1999,
    itemLink: "https://www.imdb.com/title/tt0202521/"
  },
  {
    title: "The Fox and the Hound",
    emojiImgs: "🦊🔫👨🏼‍🦳🐶",
    genres: ["animation", "adventure", "drama"],
    type: "movie",
    year: 1981,
    itemLink: "https://www.imdb.com/title/tt0082406/"
  },
  {
    title: "The Lion King",
    emojiImgs: "🦁👑🌍",
    genres: ["animation", "adventure", "drama"],
    type: "movie",
    year: 1994
  },
  {
    title: "The Lion King",
    emojiImgs: "😺🦁👑🌍",
    genres: ["action", "adventure"],
    type: "movie",
    year: 2018
  },
  {
    title: "The Little Mermaid",
    emojiImgs: "‍🧜🏽‍🤴🏽🐠🦞🐙",
    genres: ["animation", "family", "fantasy"],
    type: "movie",
    year: 1989,
    itemLink: "https://www.imdb.com/title/tt0097757/"
  },
  {
    title: "Logan",
    emojiImgs: "❌🐺👨‍🦱🖐️",
    genres: ["sci-fi", "action", "adventure"],
    type: "movie",
    year: 2017,
    itemLink: "https://www.imdb.com/title/tt3315342/?ref_=ttls_li_tt"
  },
  {
    title: "The Lizzie McGuire Movie",
    emojiImgs: "🎓✈🇮🇹👯🎤",
    genres: ["adventure", "comedy", "family"],
    type: "movie",
    year: 2003,
    itemLink: "https://www.imdb.com/title/tt0306841/"
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    emojiImgs: "💍🧝⚔️🧙",
    genres: ["adventure", "drama", "fantasy"],
    type: "movie",
    year: 2001
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    emojiImgs: "💍🌋🦅",
    genres: ["adventure", "drama", "fantasy"],
    type: "movie",
    year: 2003,
    itemLink: "https://www.imdb.com/title/tt0167260"
  },
  {
    title: "Lost",
    emojiImgs: "✈️🏝⛺🆘❓",
    genres: ["adventure", "drama", "fantasy"],
    type: "tv",
    year: 2004,
    itemLink: "https://www.imdb.com/title/tt0411008/"
  },
  {
    title: "Love and Other Drugs",
    emojiImgs: "😍🆘💊💔💏",
    genres: ["romance", "drama", "comedy"],
    type: "movie",
    year: 2010,
    itemLink: "https://www.imdb.com/title/tt0758752/"
  },
  {
    title: "M*A*S*H",
    emojiImgs: "😷🎖️😂🇰🇷",
    genres: ["comedy", "drama", "war"],
    type: "tv",
    year: 1972,
    itemlink: "https://www.imdb.com/title/tt0068098/"
  },
  {
    title: "The Mask ",
    emojiImgs: "🐶🤓👺🤪🕺",
    genres: ["comedy", "crime", "fantasy"],
    type: "movie",
    year: 1994,
    itemLink: "https://www.imdb.com/title/tt0110475/?ref_=nv_sr_1?ref_=nv_sr_1"
  },
  {
    title: "Mary Poppins",
    emojiImgs: "✨☂️✨👜✨",
    genres: ["comedy", "family", "fantasy"],
    type: "movie",
    year: 1964,
    itemLinks: "https://www.imdb.com/title/tt00000000058331/"
  },
  {
    title: "Matilda The Musical",
    emojiImgs: "👧📖🧠👩‍🏫🎵",
    genres: ["musical"],
    type: "musical",
    year: 2013,
    itemLink: "http://www.playbill.com/production/matilda-the-musical-shubert-theatre-vault-0000013970"
  },
  {
    title: "Mad Men",
    emojiImgs: "‍😡 👨🏻 👨🏻 ",
    genres: ["drama"],
    type: "tv",
    year: 2007,
    itemLink: "https://www.imdb.com/title/tt0804503/"
  },
  {
    title: "Matrix",
    emojiImgs: "👨‍💻👩‍💻🔫🥋",
    genres: ["action", "sci-fi"],
    type: "movie",
    year: 1999,
    itemLink: "https://www.imdb.com/title/tt0133093/"
  },
  {
    title: "Matrix Revolutions",
    emojiImgs: "📞💻🕶️",
    genres: ["action", "sci-fi"],
    type: "movie",
    year: 2003,
    itemLink: "https://www.imdb.com/title/tt0242653/"
  },
  {
    title: "Men in Black",
    emojiImgs: "👨⤵◾",
    genres: ["action", "adventure", "comedy"],
    itemLink: "https://www.imdb.com/title/tt0119654/",
    type: "movie",
    year: 1997
  },
  {
    title: "Men in Black 3",
    emojiImgs: "👨⤵◾👽",
    genres: ["action", "comedy", "sci-fi"],
    type: "movie",
    year: 2012,
    itemLink: "https://www.imdb.com/title/tt1409024/"
  },
  {
    title: "Merlin",
    emojiImgs: "🧙🤴👑⚔️🐉",
    genres: ["adventure", "drama", "fantasy "],
    itemLink: "https://www.imdb.com/title/tt1199099/",
    type: "tv",
    year: 2008
  },
  {
    title: "Mean Girls",
    emojiImgs: "👚🏫📓🔥😏",
    genres: ["movie", "comedy"],
    type: "movie",
    year: 2004,
    itemLink: "https://www.imdb.com/title/tt0377092/"
  },
  {
    title: "Midsommar",
    emojiImgs: "🌞👩‍👧‍👧🌼🔥💀",
    genres: ["Drama", "Thriller"],
    type: "movie",
    year: 2019,
    itemLink: "https://www.imdb.com/title/tt8772262/"
  },
  {
    title: "Miss Saigon",
    emojiImgs: "🇻🇳💑🚁👶",
    genres: ["drama", "war", "musical"],
    type: "musical",
    year: 1991,
    itemLink: "http://www.playbill.com/production/miss-saigon-broadway-theatre-vault-0000012256"
  },
  {
    title: "Mr.Robot",
    emojiImgs: "👨‍💻🤖⚔️😈",
    genres: ["crime", "drama", "thriller"],
    type: "tv",
    year: 2015,
    itemLink: "https://www.imdb.com/title/tt4158110/"
  },
  {
    title: "Mrs. Doubtfire",
    emojiImgs: "👨➡👵",
    genres: ["comedy", "drama", "family"],
    itemLink: "https://www.imdb.com/title/tt0107614/",
    type: "movie",
    year: 1993
  },
  {
    title: "Moonrise Kingdom",
    emojiImgs: "⛺️🧳🌕👑",
    genres: ["Comedy", "Drama", "Romance"],
    itemLink: "https://www.imdb.com/title/tt1748122/",
    type: "movie",
    year: 2012
  },
  {
    title: "Monty Python and the Holy Grail",
    emojiImgs: "🤵🐍⛪🍷",
    genres: ["comedy"],
    type: "movie",
    year: 1975,
    itemLink: "https://www.imdb.com/title/tt0071853/?ref_=nv_sr_1?ref_=nv_sr_1"
  },
  {
    title: "Moulin Rouge",
    emojiImgs: "💃🇫🇷🎟🎭💋",
    genres: ["drama", "musical", "romance"],
    type: "movie",
    year: 2001,
    itemLink: "https://www.imdb.com/title/tt0203009/"
  },
  {
    title: "Moonrise Kingdom",
    emojiImgs: "⛺️🧳🌕👑",
    genres: ["Comedy", "Drama", "Romance"],
    itemLink: "https://www.imdb.com/title/tt1748122/",
    type: "movie",
    year: 2012
  },
  {
    title: "Monty Python and the Holy Grail",
    emojiImgs: "🤵🐍⛪🍷",
    genres: ["comedy"],
    type: "movie",
    year: 1975,
    itemLink: "https://www.imdb.com/title/tt0071853/"
  },
  {
    title: "Mulan",
    emojiImgs: "👩➡️👨🤺⚔️",
    genres: ["war", "music"],
    type: "movie",
    year: 1998,
    itemLink: "https://www.imdb.com/title/tt0120762/"
  },
  {
    title: "Narcos",
    emojiImgs: "🔫🗡💊💉💰",
    genres: ["crime", "drama"],
    type: "tv",
    year: 2015
  },
  {
    title: "National Treasure",
    emojiImgs: "🇺🇸🗝🏺🧭💰",
    genres: ["action", "adventure", "mystery"],
    type: "movie",
    year: 2004,
    itemLink: "https://www.imdb.com/title/tt0368891/"
  },
  {
    title: "National Treasure: Book of Secrets",
    emojiImgs: "🇱🇷💎📘❓❗",
    genres: ["action", "adventure", "mystery"],
    itemLink: "https://m.imdb.com/title/tt0465234/",
    type: "movie",
    year: 2007
  },
  {
    title: "No Country for Old Men",
    emojiImgs: "⛔️🇺🇸👴💰",
    genres: ["crime", "drama", "thriller"],
    type: "movie",
    year: 2007,
    itemLink: "https://www.imdb.com/title/tt0477348/"
  },
  {
    title: "Nightmare Before Christmas",
    emojiImgs: "💀🎅🎃👻🐕",
    genres: ["animation", "family", "fantasy", "musical"],
    type: "movie",
    year: 1993,
    itemLink: "https://www.imdb.com/title/tt0107688/"
  },
  {
    title: "The Office",
    emojiImgs: "👔🤓📠📎💻",
    genres: ["comedy", "sitcom", "mockumentary"],
    type: "tv",
    year: 2005,
    itemLink: "https://www.imdb.com/title/tt0386676/"
  },
  {
    title: "Office Space",
    emojiImgs: "👔🖨⚒💾💰",
    genres: ["comedy"],
    type: "movie",
    year: 1999,
    itemLink: "https://www.imdb.com/title/tt0151804/"
  },
  {
    title: "Once Upon a Time in Hollywood",
    emojiImgs: "🙍‍♂️🙍‍♂️🙎‍♀️🐕🎬",
    genres: ["drama", "comedy"],
    type: "film",
    year: 2019,
    itemLink: "https://www.imdb.com/title/tt7131622/"
  },
  {
    title: "On the Town",
    emojiImgs: "⚓🚢👯",
    genres: ["comedy"],
    type: "play",
    year: 2014
  },
  {
    title: "Orange is the new Black",
    emojiImgs: "🔶⚫️⛓🙎🏻",
    genres: ["comedy", "crime", "drama"],
    itemLink: "https://www.imdb.com/title/tt2372162/",
    type: "tv",
    year: 2013
  },
  {
    title: "The Other Side of Heaven",
    emojiImgs: "⛪🙏🏝🇹🇴😇",
    genres: ["adventure", "biography", "drama"],
    type: "movie",
    year: 2001,
    itemLink: "https://www.imdb.com/title/tt0250371/"
  },
  {
    title: "Parks and Recreation",
    emojiImgs: "🕳️🏞️🥳👩‍💼",
    genres: ["comedy"],
    itemLink: "https://www.imdb.com/title/tt1266020/",
    type: "tv",
    year: 2009
  },
  {
    title: "Pet Sematary",
    emojiImgs: "🐶🐱☠️⚰️",
    genres: ["horror", "thriller", "mystery"],
    type: "movie",
    year: 2019,
    itemLink: "https://www.imdb.com/title/tt0837563/"
  },
  {
    title: "Pearl Harbor",
    emojiImgs: "🇯🇵🛩💣🇺🇸🏝",
    genres: ["Action", "Drama", "History", "Romance", "War"],
    type: "movie",
    year: 2001,
    itemLink: "https://www.imdb.com/title/tt0213149/"
  },
  {
    title: "Pinocchio",
    emojiImgs: "🤥👴🐋",
    genres: ["animation"],
    type: "movie",
    year: 1940,
    itemLink: "https://www.imdb.com/title/tt0032910/"
  },
  {
    title: "Pippin",
    emojiImgs: "🕰👦🏻🤝⚔💞",
    genres: ["musical", "history", "romance", "war", "drama"],
    itemLink: "http://www.playbill.com/production/pippin-imperial-theatre-vault-0000006044",
    type: "musical",
    year: 1972
  },
  {
    title: "Pirates of the Caribbean",
    emojiImgs: "🍻🏴‍☠️🚢",
    genres: ["action", "comedy"],
    type: "movie",
    year: 2006
  },
  {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    emojiImgs: "🏴‍☠️ 🦜 🔑 🚢",
    genres: ["Action", "Adventure", "Fantasy"],
    itemLink: "https://www.imdb.com/title/tt0325980/",
    type: "movie",
    year: 2003
  },
  {
    title: "Phantom of the Opera",
    emojiImgs: "🎭🌹🕯️🎶",
    genres: ["drama", "romance"],
    type: "musical",
    year: 1988,
    itemLink: "http://www.playbill.com/production/the-phantom-of-the-opera-majestic-theatre-vault-0000007818"
  },
  {
    title: "Pokemon: The First Movie",
    emojiImgs: "👦️🐁️😭️",
    genres: ["animation","action","adventure","family"],
    type: "movie",
    year: 1998,
    itemLink: "https://www.imdb.com/title/tt0190641/"
  },
  {
    title: "Pokemon Detective Pikachu",
    emojiImgs: "🕵️⚡🐭⚡☕",
    genres: ["action", "adventure", "comedy"],
    type: "movie",
    year: 2019,
    itemLink: "https://www.imdb.com/title/tt5884052/"
  },
  {
    title: "Power Rangers",
    emojiImgs: "🎨5️⃣🤖🔫⚖️",
    genres: ["action", "adventure", "family"],
    type: "tv",
    year: 1993,
    itemLink: "https://www.imdb.com/title/tt0106064/"
  },
  {
    title: "The Powerpuff Girls",
    emojiImgs: "💪💨👭",
    genres: ["animation", "action", "comedy"],
    type: "tv",
    year: 1998,
    itemLink: "https://www.imdb.com/title/tt0175058/"
  },
  {
    title: "Princess and the Frog",
    emojiImgs: "👸🏽🐸💋💒🥂",
    genres: ["animation", "adventure", "comedy"],
    type: "movie",
    year: 2009,
    itemLink: "https://www.imdb.com/title/tt0780521/"
  },
  {
    title: "Princess Bride",
    emojiImgs: "🏴‍☠️👸🔥🤺",
    genres: ["adventure", "family"],
    type: "movie",
    year: 1987,
    itemLink: "https://www.imdb.com/title/tt0093779/"
  },
  {
    title: "The Preacher's Wife",
    emojiImgs: "👼🌎⛪👨‍👩‍",
    genres: ["Comedy", "Drama", "Fantasy"],
    type: "movie",
    year: 1996,
    itemLink: "https://www.imdb.com/title/tt0117372/"
  },
  {
    title: "The Princess Diaries",
    emojiImgs: "👩‍🦰✈️🏰👑👸",
    genres: ["comedy", "family", "romance"],
    type: "movie",
    year: 2001,
    itemLink: "https://www.imdb.com/title/tt0247638/"
  },
  {
    title: "Project Runway",
    emojiImgs: "🧵⏱💃🏼👩🏼‍⚖️💰",
    genres: ["reality", "competition"],
    type: "tv",
    year: 2004,
    itemLink: "https://www.imdb.com/title/tt0437741/"
  },
  {
    title: "Pulp Fiction",
    emojiImgs: "🔪🔫🍔🥊💊",
    genres: ["crime", "drama"],
    type: "movie",
    year: 1994,
    itemLink: "https://www.imdb.com/title/tt0110912/"
  },
  {
    title: "Queer Eye",
    emojiImgs: "🏳️‍🌈👁️👬🚶‍👬",
    genres: ["comedy", "reality-tv"],
    type: "tv",
    year: 2003,
    itemLink: "https://www.imdb.com/title/tt0358332/"
  },
  {
    title: "Queer Eye",
    emojiImgs: "🏳️‍🌈👁️👬👬🤸‍",
    genres: ["comedy", "reality-tv"],
    type: "tv",
    year: 2018,
    itemLink: "https://www.imdb.com/title/tt7259746/"
  },
  {
    title: "Ratatouille",
    emojiImgs: "🐀👨‍🍳🔪",
    genres: ["animation", "comedy", "family"],
    type: "movie",
    year: 2007,
    itemLink: "https://www.imdb.com/title/tt0382932/"
  },
  {
    title: "Rocky",
    emojiImgs: "🏃‍♂️🥊🕴️",
    genres: ["drama", "sport"],
    type: "movie",
    year: 1976
  },
  {
    title: "The Room",
    emojiImgs: "🏠💔🏈",
    genres: ["drama"],
    type: "movie",
    year: 2003,
    itemLink: "https://www.imdb.com/title/tt0368226/"
  },
  {
    title: "Ready Player One",
    emojiImgs: "🏁🕹1️⃣",
    genres: ["action", "adventure", "sci-fi"],
    type: "movie",
    year: 2018
  },
  {
    title: "Remember the Titans",
    emojiImgs: "🏉🏫🌍🔥",
    genres: ["Biography", "Drama", "Sport"],
    type: "movie",
    year: 2000,
    itemLink: "https://www.imdb.com/title/tt0210945/"
  },
  {
    title: "Rent",
    emojiImgs: "👨👭💊💉🎶",
    genres: ["drama", "musical", "romance"],
    type: "movie",
    year: 2005
  },
  {
    title: "Reservoir Dogs",
    emojiImgs: "🕴️🕴️🕴️🕴️🕴️",
    genres: ["crime", "thriller"],
    type: "movie",
    year: 1992
  },
  {
    title: "The Revenant",
    emojiImgs: "🐻💥🤕❄️🥶",
    genres: ["action", "adventure", "biography"],
    itemLink: "https://www.imdb.com/title/tt1663202/",
    type: "movie",
    year: 2015
  },
  {
    title: "RocketMan",
    emojiImgs: "🐱🚀📫",
    genres: ["drama", "musical"],
    type: "movie",
    year: 2019
  },
  {
    title: "Rugrats",
    emojiImgs: "👶👧👶🍼🐁",
    genres: ["animation", "comedy"],
    type: "tv",
    year: 1990,
    itemLink: "https://www.imdb.com/title/tt0101188/"
  },
  {
    title: "Saving Private Ryan",
    emojiImgs: "🇫🇷🔍🔫☠🎖️",
    genres: ["drama", "war"],
    itemLink: "https://www.imdb.com/title/tt0120815/",
    type: "movie",
    year: 1998
  },
  {
    title: "Schitt's Creek",
    emojiImgs: "💰💸🏨💅",
    genres: ["comedy", "drama", "romance"],
    itemLink: "https://www.imdb.com/title/tt3526078/",
    type: "tv",
    year: 2015
  },
  {
    title: "School of Rock",
    emojiImgs: "🏫🎸🥁🎹",
    genres: ["comedy", "music"],
    type: "movie",
    year: 2003
  },
  {
    title: "Scream",
    emojiImgs: "📞😱🔪🎭",
    genres: ["horror", "mystery"],
    itemLink: "https://www.imdb.com/title/tt0117571/",
    type: "movie",
    year: 1996
  },
  {
    title: "See No Evil, Hear No Evil",
    emojiImgs: "🙈👹🙉👹",
    genres: ["comedy", "crime"],
    type: "movie",
    year: 1989
  },
  {
    title: "Seinfeld",
    emojiImgs: "🎤👨👨‍🦲👩👨",
    genres: ["comedy"],
    type: "tv",
    year: 1989,
    itemLink: "https://www.imdb.com/title/tt0098904/"
  },
  {
    title: "Seven",
    emojiImgs: "🕵🔪👮‍♂️😈",
    genres: ["drama"],
    type: "movie",
    year: 2007
  },
  {
    title: "Shaun Of The Dead",
    emojiImgs: "🧟🏏🍦🍺",
    genres: ["comedy", "horror"],
    type: "movie",
    year: 2004,
    itemLink: "https://www.imdb.com/title/tt0365748/"
  },
  {
    title: "The Shawshank Redemption",
    emojiImgs: "👮🧑🏾🔒🧑🏻👮",
    genres: ["drama"],
    type: "movie",
    year: 1994,
    itemLink: "https://www.imdb.com/title/tt0111161/"
  },
  {
    title: "Sherlock",
    emojiImgs: "🕵️👨‍⚕️🚔⚔️😈",
    genres: ["crime", "drama", "mystery"],
    type: "tv",
    year: 2010,
    itemLink: "https://www.imdb.com/title/tt1475582/"
  },
  {
    title: "Sherlock Holmes",
    emojiImgs: "🕵️‍♂️ 🕵️‍♂️ 🔍 👁️‍🗨️",
    genres: ["Action", "Adventure", "Crime"],
    itemLink: "https://www.imdb.com/title/tt0988045/",
    type: "movie",
    year: 2009
  },
  {
    title: "Shrek",
    emojiImgs: "🤴🤝🧟‍♂️👉👸",
    genres: ["animation", "adventure", "comedy"],
    type: "movie",
    year: 2001,
    itemLink: "https://m.imdb.com/title/tt0126029/"
  },
  {
    title: "Shrek 2",
    emojiImgs: "🤴👸😨🧟‍♂️🧟‍♀️",
    genres: ["animation", "adventure", "comedy"],
    type: "movie",
    year: 2004,
    itemLink: "https://m.imdb.com/title/tt0298148/"
  },
  {
    title: "Shrek the Third",
    emojiImgs: "🤴☠🧟‍♂️🔎🤴",
    genres: ["animation", "adventure", "comedy"],
    type: "movie",
    year: 2007,
    itemLink: "https://m.imdb.com/title/tt0413267/"
  },
  {
    title: "Shrek Forever After",
    emojiImgs: "🧝‍♂️✍🧟‍♂️🔥🤴",
    genres: ["animation", "adventure", "comedy"],
    type: "movie",
    year: 2010,
    itemLink: "https://www.imdb.com/title/tt0892791/"
  },
  {
    title: "Shrek the Musical",
    emojiImgs: "🗡👸🐴🏰",
    genres: ["comedy", "family", "fantasy"],
    type: "musical",
    year: 2013,
    itemLink: "https://www.imdb.com/title/tt3070936/"
  },
  {
    title: "Silence of the Lambs",
    emojiImgs: "🤐🐑🍷🦋",
    genres: ["crime", "drama", "thriller"],
    type: "movie",
    year: 1991
  },
  {
    title: "Silicon Valley",
    emojiImgs: "💻🤓💰🌐🕸",
    genres: ["comedy"],
    type: "tv",
    year: 2014,
    itemLink: "https://www.imdb.com/title/tt2575988/"
  },
  {
    title: "Sex and the City",
    emojiImgs: "🍸👠👩🏼‍🦱💄🗽",
    genres: ["comedy", "drama", "romance"],
    type: "tv",
    year: 1998
  },
  {
    title: "Short Circuit",
    emojiImgs: "🤖5️⃣🔋⚡",
    genres: ["comedy", "sci-fi"],
    type: "movie",
    year: 1986,
    itemLink: "https://www.imdb.com/title/tt0091949/"
  },
  {
    title: "Sister Act",
    emojiImgs: "👩🏿👠🎶⛪",
    genres: ["comedy", "crime", "family"],
    type: "movie",
    year: 1992,
    itemLink: "https://www.imdb.com/title/tt0105417/?ref_=ttmi_tt"
  },
  {
    title: "Sixth Sense",
    emojiImgs: "👻👦👀",
    genres: ["drama", "mystery", "thriller"],
    type: "movie",
    year: 1999
  },
  {
    title: "Snatch",
    emojiImgs: "🔫💪🏿🔪💰💎",
    genres: ["comedy", "crime"],
    type: "movie",
    year: 2000,
    itemLink: "https://www.imdb.com/title/tt0208092/"
  },
  {
    title: "Snow White",
    emojiImgs: "🍎👸💤🤴💋",
    genres: ["musical", "animated", "romance"],
    type: "movie",
    year: 1944
  },
  {
    title: "So You Think You Can Dance",
    emojiImgs: "🤔💃🕺🎶❓",
    genres: ["reality-tv", "music", "game-show"],
    type: "tv",
    year: 2005,
    itemLink: "https://www.imdb.com/title/tt0472023/"
  },
  {
    title: "The Social Network",
    emojiImgs: "💻😐🌐👤",
    genres: ["biography", "drama"],
    type: "movie",
    year: 2010,
    itemLink: "https://www.imdb.com/title/tt1285016/"
  },
  {
    title: "Spaceballs",
    emojiImgs: "🚀🛸⚽🏀",
    genres: ["adventure", "comedy", "sci-fi"],
    type: "movie",
    year: "1987",
    itemLink: "https://www.imdb.com/title/tt0094012/"
  },
  {
    title: "Space Jam",
    emojiImgs: "🏀🛸🚀",
    genres: ["action", "comedy", "musical"],
    type: "movie",
    year: 1994
  },
  {
    title: "Speed",
    emojiImgs: "🚍⏱💣",
    genres: ["action", "adventure", "Thriller"],
    type: "movie",
    year: 1994,
    itemLink: "https://www.imdb.com/title/tt1517451/?ref_=fn_al_tt_1"
  },
  {
    title: "Spiderman",
    emojiImgs: "🕷️👨‍💪🕸️🕸️",
    genres: ["action", "adventure", "sci-fi"],
    type: "movie",
    year: 2019
  },
  {
    title: "Spirited Away",
    emojiImgs: "👧🏮🐷👵🐉",
    genres: ["animation", "adventure", "family"],
    type: "movie",
    year: 2001,
    itemLink: "https://www.imdb.com/title/tt0245429/"
  },
  {
    title: "SpongeBob SquarePants",
    emojiImgs: "🦀🍔🌊🍍🐿",
    genres: ["family", "animation"],
    type: "tv",
    year: 1999
  },
  {
    title: "Stargate",
    emojiImgs: "🔼🛸⭕️👽",
    genres: ["Action", "Adventure", "Sci-Fi"],
    itemLink: "https://www.imdb.com/title/tt0111282/",
    type: "movie",
    year: 1994
  },
  {
    title: "Star Trek",
    emojiImgs: "🖖👽🛸✨🌌",
    genres: ["action", "adventure", "sci-fi"],
    itemLink: "https://www.imdb.com/title/tt0060028/",
    type: "tv",
    year: 1966
  },
  {
    title: "Steven Universe",
    emojiImgs: "👦🏻💎💎💎🛡️",
    genres: ["comedy"],
    type: "tv",
    year: 2013
  },
  {
    title: "Suits",
    emojiImgs: "👨👦⚖️👔",
    genres: ["drama", "crime"],
    itemLink: "https://www.imdb.com/title/tt1632701/",
    type: "tv",
    year: 2011
  },
  {
    title: "Supernatural",
    emojiImgs: "👻🧂🔫👹😱",
    genres: ["Drama", "Fantasy", "Horror"],
    type: "tv",
    year: 2005,
    itemLink: "https://www.imdb.com/title/tt0460681/"
  },
  {
    title: "Sweeney Todd: The Demon Barber of Fleet Street",
    emojiImgs: "💈🔪☠️🍰",
    genres: ["drama", "horror", "musical"],
    type: "musical",
    year: 1979
  },
  {
    title: "Taxi Driver",
    emojiImgs: "🚕🙎‍♂️👮‍♂️🤬",
    genres: ["crime", "drama"],
    type: "movie",
    year: 1976,
    itemLink: "https://www.imdb.com/title/tt0075314/"
  },
  {
    title: "Teenage Mutant Ninja Turtles",
    emojiImgs: "🐀🐢🎭🥋",
    genres: ["animation", "adventure", "comedy"],
    itemLink: "https://www.imdb.com/title/tt0100758/",
    type: "movie",
    year: 1990
  },
  {
    title: "Teenage Mutant Ninja Turtles II: The Secret of the Ooze",
    emojiImgs: "🐱‍👤🐢🍕👊",
    genres: ["action", "adventure", "comedy"],
    itemLink: "https://www.imdb.com/title/tt0103060/",
    type: "movie",
    year: 1991
  },
  {
    title: "The Following",
    emojiImgs: "📚🏃‍♂️🔫👮",
    genres: ["crime", "drama", "horror"],
    type: "tv",
    year: 2013,
    itemLink: "https://www.imdb.com/title/tt2071645/"
  },
  {
    title: "Their Eyes Were Watching God",
    emojiImgs: "👀👼🎬",
    genres: ["drama", "romance"],
    type: "movie",
    year: 2005
  },
  {
    title: "Titanic",
    emojiImgs: "💑❄🚢⬇️",
    genres: ["drama", "romance"],
    type: "movie",
    year: 1997,
    itemLink: "https://www.imdb.com/title/tt0120338/"
  },
  {
    title: "This Is Us",
    emojiImgs: "👨🏻👩🏻👶🏻👶🏻👶🏿",
    genres: ["drama", "family"],
    itemLink: "https://www.imdb.com/title/tt5555260/",
    type: "tv",
    year: 2016
  },
  {
    title: "Timecrimes",
    emojiImgs: "🕒🤕🧥✂️",
    genres: ["horror", "mystery", "sci-fi"],
    type: "movie",
    year: 2007,
    itemLink: "https://www.imdb.com/title/tt0480669/"
  },
  {
    title: "Top Gun",
    emojiImgs: "🔝🔫🛩️🕶️",
    genres: ["action", "drama"],
    itemLink: "https://www.imdb.com/title/tt0092099/",
    type: "movie",
    year: 1986
  },
  {
    title: "The Wizard of Oz",
    emojiImgs: "🐶🌪️🤖🦁🧙‍",
    genres: ["adventure", "family", "fantasy"],
    itemLink: "https://www.imdb.com/title/tt0032138/",
    type: "movie",
    year: 1939
  },
  {
    title: "Tron: Legacy",
    emojiImgs: "📟🕹🤖🏍️⭕",
    genres: ["action", "adventure", "sci-fi"],
    type: "movie",
    year: 2010,
    itemLink: "https://www.imdb.com/title/tt1104001"
  },
  {
    title: "Tropic Thunder",
    emojiImgs: "🚁🌲🌲🔫⛈️",
    genres: ["action", "adventure", "comedy"],
    type: "movie",
    year: 2008
  },
  {
    title: "Up",
    emojiImgs: "🎈🏠🐶👴🏻",
    genres: ["action", "comedy", "musical"],
    type: "movie",
    year: 1994
  },
  {
    title: "Us",
    emojiImgs: "🎭🔮✂️🏚️🐰",
    genres: ["horror", "thriller"],
    type: "movie",
    year: 2019
  },
  {
    title: "Vinci Da",
    emojiImgs: "👮👨‍🎨⚖️🔪",
    genres: ["crime", "mystery", "thriller"],
    type: "movie",
    year: 2019,
    itemLink: "https://www.imdb.com/title/tt10217550/?ref_=fn_al_tt_1"
  },
  {
    title: "The Walking Dead",
    emojiImgs: "👮🏻🏃🧟‍⚔️🚗",
    genres: ["drama", "suspense", "horror"],
    type: "tv",
    year: 2010,
    itemLink: "https://www.imdb.com/title/tt1520211"
  },
  {
    title: "Wall-E",
    emojiImgs: "📺❤️💻",
    genres: ["animation", "adventure", "family"],
    type: "movie",
    year: 2008
  },
  {
    title: "War for the Planet of the Apes",
    emojiImgs: "⚔🔥🌍🦍",
    genres: ["Action", "Adventure", "Drama", "Sci-Fi", "Thriller"],
    type: "movie",
    year: 2017,
    itemLink: "https://www.imdb.com/title/tt3450958/?ref_=fn_al_tt_1"
  },
  {
    title: "War Horse",
    emojiImgs: "🐎👦⚔️🎖️",
    genres: ["action", "adventure", "drama"],
    type: "movie",
    year: 2011,
    itemLink: "https://www.imdb.com/title/tt1568911/"
  },
  {
    title: "West Side Story",
    emojiImgs: "🗽✈️⚔️🦈💔",
    genres: ["musical", "romance", "drama", "crime"],
    type: "musical",
    year: 1961
  },
  {
    title: "Westworld",
    emojiImgs: "🤠🚂🏜👨‍💻🤖",
    genres: ["drama", "mystery", "sci-fi"],
    itemLink: "https://www.imdb.com/title/tt0475784/",
    type: "tv",
    year: 2016
  },
  {
    title: "The West Wing",
    emojiImgs: "🇺🇸🌎📄",
    genres: ["drama"],
    itemLink: "https://www.imdb.com/title/tt0200276/",
    type: "tv",
    year: 1999
  },
  {
    title: "Where in the World is Carmen Sandiego?",
    emojiImgs: "🤔🌎🕵️‍♀️💄",
    genres: ["game show", "children"],
    type: "tv",
    year: 1991
  },
  {
    title: "Wicked",
    emojiImgs: "💚🧹🧙‍♂️",
    genres: ["fantasy"],
    type: "musical",
    year: 2003
  },
  {
    title: "Willy Wonka & the Chocolate Factory",
    emojiImgs: "🧒🏻🍫🏭🎩️",
    genres: ["family", "fantasy", "musical"],
    type: "movie",
    year: 1971
  },
  {
    title: "Wonder Woman",
    emojiImgs: "🤔🦸🏻‍♀️🗡️",
    genres: ["action", "adventure", "fantasy", "sci-fi"],
    type: "movie",
    year: 2017,
    itemLink: "https://www.imdb.com/title/tt0451279/"
  },
  {
    title: "X-Files",
    emojiImgs: "👽🛸👦🏻👩‍🦰🔦",
    genres: ["sci-fi", "drama", "mystery"],
    type: "tv",
    year: 1993
  },
  {
    title: "X-Men",
    emojiImgs: "❌🧲💭👨‍🦽",
    genres: ["sci-fi", "action", "adventure"],
    type: "movie",
    year: 2000,
    itemLink: "https://www.imdb.com/title/tt0120903/?ref_=ttls_li_tt"
  },
  {
    title: "X-Men: First Class",
    emojiImgs: "❌🥇👨‍🏫",
    genres: ["sci-fi", "action", "adventure"],
    type: "movie",
    year: 2011,
    itemLink: "https://www.imdb.com/title/tt1270798/?ref_=ttls_li_tt"
  },
  {
    title: "X-Men Origins: Wolverine",
    emojiImgs: "❌🖐️⚙️👨‍🦱",
    genres: ["sci-fi", "action", "adventure"],
    type: "movie",
    year: 2009,
    itemLink: "https://www.imdb.com/title/tt0458525/?ref_=ttls_li_tt"
  },
  {
    title: "X-Men: The Last Stand ",
    emojiImgs: "❌🧍‍♂️🧍‍♀️",
    genres: ["sci-fi", "action"],
    type: "movie",
    year: 2006,
    itemLink: "https://www.imdb.com/title/tt0376994/?ref_=ttls_li_tt"
  },
  {
    title: "The Wolverine",
    emojiImgs: "❌🐺👨‍🦱🖐️",
    genres: ["sci-fi", "action", "adventure"],
    type: "movie",
    year: 2013,
    itemLink: "https://www.imdb.com/title/tt1430132/?ref_=ttls_li_tt"
  },
  {
    title: "X-Men: Days of Future Past",
    emojiImgs: "❌📅🔮",
    genres: ["sci-fi", "action", "adventure"],
    type: "movie",
    year: 2014,
    itemLink: "https://www.imdb.com/title/tt1877832/?ref_=ttls_li_tt"
  },
  {
    title: "X-Men: Apocalypse",
    emojiImgs: "❌🌎🔥",
    genres: ["sci-fi", "action", "adventure"],
    type: "movie",
    year: 2016,
    itemLink: "https://www.imdb.com/title/tt3385516/?ref_=ttls_li_tt"
  },
  {
    title: "X2: X-Men United ",
    emojiImgs: "❌✌👨‍👨‍👧‍👧",
    genres: ["sci-fi", "action", "thriller"],
    type: "movie",
    year: 2003,
    itemLink: "https://www.imdb.com/title/tt0290334/?ref_=ttls_li_tt"
  },
  {
    title: "Young Frankenstein",
    emojiImgs: "👶🌭🍺⚡️🧟‍",
    genres: ["comedy"],
    type: "movie",
    year: 1974
  },
  {
    title: "Your Name",
    emojiImgs: "👦⏱️👧🇯🇵⛰️",
    genres: ["animation", "drama", "fantasy"],
    itemLink: "https://www.imdb.com/title/tt5311514/",
    type: "movie",
    year: 2016
  }
];
