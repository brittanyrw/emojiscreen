const emojiMovies = [
  {
    title: "500 Days of Summer",
    emojiImgs: "👦💔👱‍♀️☀️",
    genres: ["Comedy", "Romance", "Drama"],
    itemLink: "https://www.imdb.com/title/tt1022603/",
    type: "movie",
    year: 2009
  },
  {
    title: "2001: A Space Odyssey",
    emojiImgs: "🐵🌖👨‍🚀🤖👴",
    genres: ["adventure, sci-fi"],
    type: "movie",
    year: 1968,
    itemLink: "https://www.imdb.com/title/tt0062622/"
  },
  {
    title: "300",
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
    title: "A Quiet Place",
    emojiImgs: "🤫🤐👂🛀👶",
    genres: ["drama", "horror", "sci-fi"],
    itemLink: "https://www.imdb.com/title/tt6644200/",
    type: "movie",
    year: 2018
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
  }, {
    title: "Anastasia",
    emojiImgs: "🏰👸🧙🇷🇺💗",
    genres: ["animation", "adventure", "drama"],
    itemLink: "https://www.imdb.com/title/tt0118617/",
    type: "movie",
    year: 1997
  },
  {
    title: "Ant-Man and the Wasp",
    emojiImgs: "🐜🙍‍♂️🐝🙎‍♀️👻",
    genres: ["action", "adventure", "comedy"],
    type: "movie",
    year: 2018,
    itemLink: "https://www.imdb.com/title/tt5095030/"
  },
  {
    title: "Batman Begins",
    emojiImgs: "🦇👨🏙️🚰🤢",
    genres: ["action", "adventure"],
    itemLink: "https://www.imdb.com/title/tt0372784/",
    type: "movie",
    year: 2005
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
    title: "Beetlejuice",
    emojiImgs: "⚰️🧟‍👰📙",
    genres: ["comedy", "fantasy"],
    type: "movie",
    year: 1988,
    itemLink: "https://www.imdb.com/title/tt0094721/"
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
    title: "The Breakfast Club",
    emojiImgs: "🏫🧠🤾👸",
    genres: ["comedy", "drama"],
    type: "movie",
    year: 1985,
    itemLink: "https://www.imdb.com/title/tt0088847/"
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
    title: "Boyhood",
    emojiImgs: "👶⚾🧑📷💔",
    genres: ["drama"],
    type: "movie",
    year: 2014,
    itemLink: "https://www.imdb.com/title/tt1065073/"
  },
  {
    title: "Brave",
    emojiImgs: "🏹🎯🛡️🐻",
    genres: ["animation", "adventure", "comedy"],
    type: "movie",
    year: 2012,
    itemLink: "https://www.imdb.com/title/tt1217209/"
  }, {
    title: "Bring It On",
    emojiImgs: "💃🤸‍♀️💗🤷‍♀️🧖‍♀️",
    genres: ["comedy", "romance", "sport"],
    type: "movie",
    year: 2000,
    itemLink: "https://www.imdb.com/title/tt0204946/"
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
    title: "Cars",
    emojiImgs: "🚗🍃🏁⛽️",
    genres: ["animation", "comedy", "family"],
    type: "movie",
    year: 2006,
    itemLink: "https://www.imdb.com/title/tt0317219/"
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
    title: "The Cheetah Girls",
    emojiImgs: "🐆👭🐆👭🎵",
    genres: ["comedy", "drama", "musical"],
    itemLink: "https://www.imdb.com/title/tt0338852/",
    type: "movie",
    year: 2003
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
  }, {
    title: "Cinderella",
    emojiImgs: "🤴👸👠🐭🧚‍♀️",
    genres: ["animation", "family", "fantasy"],
    type: "movie",
    year: 1950,
    itemLink: "https://www.imdb.com/title/tt0042332/"
  },
  {
    title: "Citizen Kane",
    emojiImgs: "🌹🛷📰🗞️",
    genres: ["drama", "mystery", "classic"],
    type: "movie",
    year: 1941,
    itemLink: "https://www.imdb.com/title/tt0033467/"
  },
  {
    title: "Cloudy with a Chance of Meatballs",
    emojiImgs: "☁️🥩⚽☂️",
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
    title: "Coco",
    emojiImgs: "🇲🇽🎸💀🔔👨‍👩‍👧‍👦",
    genres: ["animation", "adventure", "family"],
    itemLink: "https://www.imdb.com/title/tt2380307/",
    type: "movie",
    year: 2017
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
    title: "The Curious Case of Benjamin Button",
    emojiImgs: "👴🏻➡️🧔🏻➡️👶🏻",
    genres: ["drama", "fantasy", "romance"],
    type: "movie",
    year: 2008,
    itemLink: "https://www.imdb.com/title/tt0421715/"
  }, {
    title: "The Dark Knight",
    emojiImgs: "🦇🕶️🏇⚔️",
    genres: ["action", "crime", "drama"],
    itemLink: "https://www.imdb.com/title/tt0468569/",
    type: "movie",
    year: 2008
  },
  {
    title: "The Day the Earth Stood Still",
    emojiImgs: "☀️🌎⌛🛑",
    genres: ["drama", "sci-fi"],
    type: "movie",
    year: 1951,
    itemLink: "https://www.imdb.com/title/tt0043456/"
  },
  {
    title: "Devil Wears Prada",
    emojiImgs: "😈💄👠🧣👓",
    genres: ["comedy", "drama"],
    type: "movie",
    year: 2006
  },
  {
    title: "Dirty Dancing",
    emojiImgs: "🍉💃🕶🕺👶",
    genres: ["drama", "music", "romance"],
    type: "movie",
    year: 1987
  },
  {
    title: "Dude, Where's My Car?",
    emojiImgs: "👨❓🚗",
    genres: ["comedy", "sci-fi"],
    type: "movie",
    year: 2000,
    itemLink: "https://www.imdb.com/title/tt0242423/"
  },
  {
    title: "Dunkirk",
    emojiImgs: "🇫🇷💥🚢🌊🚂",
    genres: ["action", "adventure", "drama"],
    type: "movie",
    year: 2017,
    itemLink: "https://www.imdb.com/title/tt5013056/"
  },
  {
    title: "Edward Sicssorhands",
    emojiImgs: "👦✂🙌",
    genres: ["drama", "fantasy", "romance"],
    itemLink: "https://www.imdb.com/title/tt0099487/",
    type: "movie",
    year: 1990
  }, {
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
  },{
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
  }, {
    title: "Fight Club",
    emojiImgs: "🥊🧼🤐",
    genres: ["drama"],
    type: "movie",
    year: 1999
  },
  {
    title: "Five Feet Apart",
    emojiImgs: "🏣🧒5⃣👧💞",
    genres: ["Drama", "Romance", "Comedy"],
    type: "movie",
    year: 2019
  },
  {
    title: "Fried Green Tomatoes",
    emojiImgs: "🍅👯👒🍴☕️",
    genres: ["feel-good", "drama"],
    itemLink: "https://www.imdb.com/title/tt0101921/",
    type: "movie",
    year: 1991
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
    title: "Four Weddings and a Funeral",
    emojiImgs: "4️⃣💒💑⚰️",
    genres: ["Comedy", "Drama", "Romance"],
    type: "movie",
    year: 1994,
    itemLink: "https://www.imdb.com/title/tt0109831/"
  }, {
    title: "Get Out",
    emojiImgs: "😮😱💪🏿🦸🏿",
    genres: ["horror", "sci-fi"],
    type: "movie",
    year: 2018,
    itemLink: "https://www.imdb.com/title/tt5052448/"
  },{
    title: "Ghostbusters",
    emojiImgs: "👻🔫👨‍🚒️",
    genres: ["comedy", "action", "fantasy"],
    type: "movie",
    year: 1984,
    itemLink: "https://www.imdb.com/title/tt1289401/"
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
    title: "The Godfather",
    emojiImgs: "🇮🇹🤵🐴🔫💵",
    genres: ["crime", "drama"],
    type: "movie",
    year: 1972,
    itemLink: "https://www.imdb.com/title/tt0068646/"
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
    title: "The Greatest Showman",
    emojiImgs: "🎩🕺🎪🔥🎶",
    genres: ["biography", "drama", "musical"],
    type: "movie",
    year: 2017,
    itemLink: "https://www.imdb.com/title/tt1485796/"
  }, {
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
  }, {
    title: "Hackers",
    emojiImgs: "👩🏻‍💻👨🏻‍💻📡🕵",
    genres: ["action-adventure", "mystery", "fiction-fantasy"],
    type: "movie",
    year: 1995,
    itemLink: "https://www.imdb.com/title/tt0113243/"
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
    title: "Hereditary",
    emojiImgs: "😱👑🚗👨‍👩‍👧‍👧🏡",
    genres: ["drama", "horror", "mystery"],
    type: "movie",
    year: 2018,
    itemLink: "https://www.imdb.com/title/tt7784604/"
  }
];