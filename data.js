const emojiItems = [
    {
        title: "The 25th Annual Putnum County Spelling Bee",
        emojiImgs: "🔤🐝😂",
        genres: ["musical", "comedy"],
        type: "musical",
        year: 2005,
        itemLink: "http://www.playbill.com/production/the-25th-annual-putnam-county-spelling-bee-circle-in-the-square-theatre-vault-0000003219"
    },
    {
        title: "300 ",
        emojiImgs: " 💪🤕👊🏻⚔️ 🛡",
        genres: ["action", "drama", "fantasy"],
        type: "movie",
        year: 2007,
        itemLink: "https://www.imdb.com/title/tt0416449/?ref_=nv_sr_1?ref_=nv_sr_1"
    },
    {
        title: "A Star is Born",
        emojiImgs: "🎤👩👨🎸⭐",
        genres: ["drama", "music", "romance"],
        type: "movie",
        year: 2018,
        itemLink: "https://www.imdb.com/title/tt1517451/?ref_=fn_al_tt_1"
    },
    {
        title: "Aladdin",
        emojiImgs: "🧞‍♂️💞👸👳🏰",
        genres: ["adventure", "family", "comedy"],
        type: "movie",
        year: 2019,
        itemLink: "https://www.imdb.com/title/tt6139732/?ref_=fn_al_tt_1"
    },
    {
        title: "Alf",
        emojiImgs: "🚀👽🍴🐈️",
        genres: ["comedy", "family", "sci-fi"],
        type: "tv",
        year: 1986
    },
    {
        title: "Alien",
        emojiImgs: "🚀👾🔫👨‍🚀",
        genres: ["suspense", "horror"],
        type: "movie",
        year: 1979,
        itemLink: "https://www.imdb.com/title/tt0090390/?ref_=fn_al_tt_1"
    },
    {
        title: "Avatar",
        emojiImgs: "👱‍♂️🔵👱‍♂️👩‍🦰🔵",
        genres: ["action", "fantasy"],
        type: "movie",
        year: 2009,
        itemLink: "https://www.imdb.com/title/tt0499549/?ref_=nv_sr_2?ref_=nv_sr_2"
    },
    {
        title: "Avatar: The Last Airbender",
        emojiImgs: "🥋🌏🔥💧💨",
        genres: ["animation", "action", "adventure"],
        type: "tv",
        year: 2005
    },
    {
        title: "Beauty and the Beast",
        emojiImgs: "🏰🥀🎶📚🕰️",
        genres: ["animation", "family", "fantasy"],
        type: "movie",
        year: 1991,
        itemLink: "https://www.imdb.com/title/tt2771200/?ref_=fn_al_tt_1"
    },
    {
        title: "The Big Bang Theory",
        emojiImgs: "🌍💻⚗🔭",
        genres: ["comedy","romance"],
        type: "tv",
        year: 2007
    },
    {
        title: "Black Panther",
        emojiImgs: "😺🌍🏴💪🏿🦸🏿",
        genres: ["action", "adventure", "sci-fi"],
        type: "movie",
        year: 2018,
        itemLink: "https://www.imdb.com/title/tt1825683/?ref_=fn_al_tt_1"
    },
    {
        title: "Black Swan",
        emojiImgs: "🩰👯‍♀️🦢🎭🔪",
        genres: ["drama", "thriller"],
        type: "movie",
        year: 2010,
        itemLink: "https://www.imdb.com/title/tt0947798/?ref_=fn_al_tt_1"
    },
    {
        title: "Bad Santa",
        emojiImgs: "😁😂🥰🌺🌼",
        genres: ["comedy", "crime", "drama"],
        type: "movie",
        year: 2003
    },
    {
        title: "Blazing Saddles",
        emojiImgs: "🔥🤠🐴🏇🏜️",
        genres: ["western", "comedy"],
        type: "movie",
        year: 1974
    },
    {
        title: "The Book of Mormon",
        emojiImgs: "👋🔔👨📖✝️",
        genres: ["comedy", "satire", "musical"],
        type: "musical",
        year: 2011
    },
    {
        title: "Breaking Bad",
        emojiImgs: "🌵🤓🧪💊💰",
        genres: ["crime", "drama", "thriller"],
        type: "tv",
        year: 2008
    },
    {
        title: "Brooklyn Nine-Nine",
        emojiImgs: "🗽👮🏻‍♂️👮🏿‍👮🏻‍♀️👮🏾",
        genres: ["comedy", "crime"],
        type: "tv",
        year: 2013
    },
    {
        title: "Buffy the Vampire Slayer",
        emojiImgs: "🅾️🎃🧛‍",
        genres: ["drama", "fantasy", "romance", "action"],
        type: "tv",
        year: 1997
    },
    {
        title: "Bungou Stray Dogs: Dead Apple",
        emojiImgs: "🍎🗡🐶🇯🇵",
        genres: ["animation"],
        type: "movie",
        year: 2018
    },
    {
        title: "Cast Away",
        emojiImgs: "🏐🥥🏝️",
        genres: ["action", "comedy", "musical"],
        type: "movie",
        year: 2000
    },
    {
        title: "The Cheetah Girls",
        emojiImgs: "🐆🐆🐆🐆🎶",
        genres: ["comedy", "drama", "musical"],
        type: "movie",
        year: 2003
    },
    {
        title: "Chernobyl",
        emojiImgs: "💥☢️🇺🇦",
        genres: ["drama", "history"],
        type: "tv",
        year: 2019
    },
    {
        title: "Chicago",
        emojiImgs: "🎷👯🔫👠🕺",
        genres: ["musical", "drama", "comedy"],
        type: "movie",
        year: 2002
    },
    {
        title: "Child's Play",
        emojiImgs: "👶😰😫☠",
        genres: ["action", "horror", "sci-fi"],
        type: "movie",
        year: 2019
    },
    {
        title: "Cloudy with a Chance of Meatballs",
        emojiImgs: " ☁️🥩⚽☂️",
        genres: ["animation", "adventure", "comedy"],
        type: "movie",
        year: 2009
    },
    {
        title: "Clueless",
        emojiImgs: "🛍️💅💞💋🗽",
        genres: ["comedy", "romance"],
        type: "movie",
        year: 1995
    },
    {
        title: "The Color Purple",
        emojiImgs: "💜🏃🏾‍♀️🧘🏾‍♀️",
        genres: ["drama"],
        type: "movie",
        year: 1986
    },
    {
        title: "Come From Away",
        emojiImgs: "🗽✈️🇨🇦🛄💞",
        genres: ["drama", "history"],
        type: "musical",
        year: 2015
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
        title: "Dirty Dancing",
        emojiImgs: "🍉💃🕶🕺👶",
        genres: ["drama", "music", "romance"],
        type: "movie",
        year: 1987
    },
    {
        title: "Dora and the Lost City of Gold",
        emojiImgs: "👧🐒🏕️🏰💰",
        genres: ["fantasy", "adventure", "comedy"],
        type: "movie",
        year: 2019
    },
    {
        title: "E.T. the Extra-Terrestrial",
        emojiImgs: "🌙🚲👉🏻👈🏻👽",
        genres: ["family", "sci-fi"],
        type: "movie",
        year: 1982
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
        title: "Flight of the Conchords",
        emojiImgs: "🎵🦏🦛🥝🇳🇿",
        genres: ["comedy", "musical", "adventure"],
        type: "tv",
        year: 2007,
        itemLink: "https://www.imdb.com/title/tt0863046/"
    },
    {
        title: "Frozen",
        emojiImgs: "👭☃️❄️",
        genres: ["animation", "adventure", "comedy"],
        type: "movie",
        year: 2013
    },
    {
        title: "Game of Thrones",
        emojiImgs: "🐉👑🗡️📚🧟",
        genres: ["action", "adventure", "drama"],
        type: "tv",
        year: 2011
    },
    {
        title: "Get Out",
        emojiImgs: "😮😱💪🏿🦸🏿",
        genres: ["horror", "sci-fi"],
        type: "movie",
        year: 2018
    },
    {
        title: "Ghostbusters",
        emojiImgs: "👻🔫👨‍🚒️",
        genres: ["comedy", "action", "fantasy"],
        type: "movie",
        year: 1984
    },
    {
        title: "Gilmore Girls",
        emojiImgs: "👩‍👧☕🧢👩‍⚖️👨‍⚖️",
        genres: ["comedy", "drama"],
        type: "tv",
        year: 2000
    },
    {
        title: "Gladiator",
        emojiImgs: "🤺⚔️🛡️",
        genres: ["action", "adventure", "drama"],
        type: "movie",
        year: 2000
    },
    {
        title: "Goonies",
        emojiImgs: "🚴🚴‍♀️😲💍👨‍👩‍👧‍👦",
        genres: ["adventure", "comedy", "family"],
        type: "movie",
        year: 1985
    },
    {
        title: "Grease",
        emojiImgs: "🌅👸💞👨‍🎤🚘",
        genres: ["musical", "romance"],
        type: "musical",
        year: 1978
    },
    {
        title: "Grey's Anatomy",
        emojiImgs: "💊💉🧪⚕🍷",
        genres: ["drama", "romance"],
        type: "tv",
        year: 2005
    },
    {
        title: "Hachi: A Dog's Tale",
        emojiImgs: "👨‍🏫💔🚉🐕🌭",
        genres: ["family", "drama"],
        type: "movie",
        year: 2009
    },
    {
        title: "Hamilton: The Musical",
        emojiImgs: "💵🖋️⚖️🎵📜",
        genres: ["drama", "comedy", "musical"],
        type: "musical",
        year: 2015
    },
    {
        title: "Hairspray: The Musical",
        emojiImgs: "💋💃👠👨🏽‍🦱👨🏻",
        genres: ["comedy", "drama", "musical"],
        type: "musical",
        year: 2002
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
        title: "Hidden Figures",
        emojiImgs: "🚀👩🏽‍💻🧮👨🏻‍🦳👨🏻‍🚀",
        genres: ["biography", "drama", "history"],
        type: "movie",
        year: 2016
    },
    {
        title: "Home Alone",
        emojiImgs: "🏠🙈🎄",
        genres: ["comedy", "family"],
        type: "movie",
        year: 1990
    },
    {
        title: "Inglorious Basterds",
        emojiImgs: "💀🔪🎖️📽️🔥",
        genres: ["war", "history"],
        type: "movie",
        year: 2009
    },
    {
        title: "Interestelar",
        emojiImgs: "🌍👨‍🚀🚀⏱️❤️",
        genres: ["adventure", "drama", "sci-fi"],
        type: "movie",
        year: 2014,
        itemLink: "https://www.imdb.com/title/tt0816692/"
    },
    {
        title: "Into the Woods",
        emojiImgs: "🔥🎄🎶👩‍🎤",
        genres: ["drama", "musical"],
        type: "musical",
        year: 1987
    },
    {
        title: "It",
        emojiImgs: "🎈🤡☔🚲",
        genres: ["horror", "thriller"],
        type: "movie",
        year: 2017
    },
    {
        title: "It Chapter Two",
        emojiImgs: "🤡🎈🤡🎈🤡",
        genres: ["horror", "thriller"],
        type: "movie",
        year: 2019
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
        year: 1955
    }, {
        title: "La La Land",
        emojiImgs: "👩👮💓",
        genres: ["romance", "drama", "musical"],
        type: "movie",
        year: 2016
    },
    {
        title: "Legally Blonde",
        emojiImgs: "👩‍⚖️👠💘🏫🐶",
        genres: ["romance", "comedy"],
        type: "movie",
        year: 2001
    },
    {
        title: "Leon: The Professional",
        emojiImgs: "🧒🔫🧔🌷‍",
        genres: ["thriller"],
        type: "movie",
        year: 1994
    },
    {
        title: "Les Misérables",
        emojiImgs: "🇫🇷🥖👮🏻",
        genres: ["drama", "history", "musical"],
        type: "musical",
        year: 1987
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
        genres: ["animation","family","fantasy"],
        type: "movie",
        year: 1989,
        itemLink: "https://www.imdb.com/title/tt0097757/"
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        emojiImgs: "💍🧝⚔️🧙",
        genres: ["adventure", "drama", "fantasy"],
        type: "movie",
        year: 2001
    },
    {
        title: "Lost",
        emojiImgs: "✈️🏝⛺🆘❓",
        genres: ["adventure", "drama", "fantasy"],
        type: "tv",
        year: 2004
    },
    {
        title: "Love and Other Drugs",
        emojiImgs: "😍🆘💊💔💏",
        genres: ["romance", "drama", "comedy"],
        type: "movie",
        year: 2010
    },
    {
        title: "Mary Poppins",
        emojiImgs: "✨☂️✨👜✨",
        genres: ["comedy", "family", "fantasy"],
        type: "movie",
        year: 1964
    },
    {
        title: "Matrix",
        emojiImgs: "👨‍💻👩‍💻🔫🥋",
        genres: ["action", "sci-fi"],
        type: "movie",
        year: 1999
    },
    {
        title: "Matrix Revolutions",
        emojiImgs: "📞💻🕶️",
        genres: ["action", "sci-fi"],
        type: "movie",
        year: 2003
    },
    {
        title: "Miss Saigon",
        emojiImgs: "🇻🇳💑🚁👶",
        genres: ["drama", "war", "musical"],
        type: "musical",
        year: 1991
    },
    {
        title: "Mulan",
        emojiImgs: "🔫⚔️🎶🥁",
        genres: ["war", "music"],
        type: "movie",
        year: 1998
    },{
        title: "Narcos",
        emojiImgs: "🔫🗡💊💉💰",
        genres: ["crime", "drama"],
        type: "tv",
        year: 2015
    },
    {
        title: "The Office",
        emojiImgs: "👔🤓📠📎💻",
        genres: ["comedy", "sitcom", "mockumentary"],
        type: "tv",
        year: 2005
    },
    {
        title: "Office Space",
        emojiImgs: "👔🖨⚒💾💰",
        genres: ["comedy"],
        type: "movie",
        year: 1999
    },
    {
        title: "Once Upon a Time in Hollywood",
        emojiImgs: "🙍‍♂️🙍‍♂️🙎‍♀️🐕🎬",
        genres: ["drama", "comedy"],
        type: "film",
        year: 2019
    },
    {
        title: "On the Town",
        emojiImgs: "⚓🚢",
        genres: ["comedy"],
        type: "play",
        year: 2014
    },
    {
        title: "The Other Side of Heaven",
        emojiImgs: "⛪🙏🏝🇹🇴😇",
        genres: ["adventure", "biography", "drama"],
        type: "movie",
        year: 2001
    },
    {
        title: "Pet Sematary",
        emojiImgs: "🐶🐱☠️⚰️",
        genres: ["horror", "thriller", "mystery"],
        type: "movie",
        year: 2019
    },
    {
        title: "Pinocchio",
        emojiImgs: "🤥👴🐋",
        genres: ["animation"],
        type: "movie",
        year: 1940
    },
    {
        title: "Pirates of the Caribbean",
        emojiImgs: "🍻🏴‍☠️🚢",
        genres: ["action", "comedy", "musical"],
        type: "movie",
        year: 1994
    },
    {
        title: "Pokemon: The First Movie",
        emojiImgs: "👦️🐁️😭️",
        genres: ["animation"],
        type: "movie",
        year: 1998
    },
    {
        title: "Princess and the Frog",
        emojiImgs: "👸🏽🐸💋💒🥂",
        genres: ["animation", "adventure", "comedy"],
        type: "movie",
        year: 2009
    },
    {
        title: "Princess Bride",
        emojiImgs: "🏴‍☠️👸🔥🤺",
        genres: ["adventure", "family"],
        type: "movie",
        year: 1987
    },
    {
        title: "Pulp Fiction",
        emojiImgs: "🔪🔫🍔🥊💊",
        genres: ["crime", "drama"],
        type: "movie",
        year: 1994
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
        title: "Ratatouille",
        emojiImgs: "🐀👨‍🍳🔪",
        genres: ["animation"],
        type: "movie",
        year: 2007
    },
    {
        title: "Rocky",
        emojiImgs: "🏃‍♂️🥊🕴️",
        genres: ["drama", "sport"],
        type: "movie",
        year: 1976
    },
    {
        title: "Ready Player One",
        emojiImgs: "🏁🕹1️⃣",
        genres: ["action", "adventure", "sci-fi"],
        type: "movie",
        year: 2018
    },
    {
        title: "Rent",
        emojiImgs: "🍃🍂🍁♥️",
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
        title: "RocketMan",
        emojiImgs: "🐱 📫",
        genres: ["drama", "musical"],
        type: "movie",
        year: 2019
    },
    {
        title: "School of Rock",
        emojiImgs: "🏫🎸🥁🎹",
        genres: ["comedy", "music"],
        type: "movie",
        year: 2003
    },
    {
        title: "See No Evil, Hear No Evil",
        emojiImgs: "🙈👹🙉👹",
        genres: ["comedy", "crime"],
        type: "movie",
        year: 1989
    },
    {
        title: "Seven",
        emojiImgs: "🕵🔪👮‍♂️😈",
        genres: ["drama"],
        type: "movie",
        year: 2007
    },
    {
        title: "Silence of the Lambs",
        emojiImgs: "🤐🐑🍷🦋",
        genres: ["crime", "drama", "thriller"],
        type: "movie",
        year: 1991
    },
    {
        title: "Sex and the City",
        emojiImgs: "🍸👠👩🏼‍🦱💄🗽",
        genres: ["comedy", "drama", "romance"],
        type: "tv",
        year: 1998
    },
    {
        title: "Sixth Sense",
        emojiImgs: "👻👦👀",
        genres: ["drama", "mystery", "thriller"],
        type: "movie",
        year: 1999
    },
    {
        title: "Snow White",
        emojiImgs: "🍎👸💤🤴💋",
        genres: ["musical", "animated", "romance"],
        type: "movie",
        year: 1944
    },
    {
        title: "Space Jam",
        emojiImgs: "🏀🛸🚀",
        genres: ["action", "comedy", "musical"],
        type: "movie",
        year: 1994
    },
    {
        title: "Spiderman",
        emojiImgs: "😎🕷💪😍",
        genres: ["action", "adventure", "sci-fi"],
        type: "movie",
        year: 2019
    },
    {
        title: "SpongeBob SquarePants",
        emojiImgs: "🦀🍔🌊🍍🐿",
        genres: ["family", "animation"],
        type: "tv",
        year: 1999
    },
    {
        title: "Steven Universe",
        emojiImgs: "👦🏻💎💎💎🛡️",
        genres: ["comedy"],
        type: "tv",
        year: 2013
    },
    {
        title: "Sweeney Todd: The Demon Barber of Fleet Street",
        emojiImgs: "💈🔪☠️🍰",
        genres: ["drama", "horror", "musical"],
        type: "musical",
        year: 1979
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
        title: "Their Eyes Were Watching God",
        emojiImgs: "👀👼🎬",
        genres: ["drama", "romance"],
        type: "movie",
        year: 2005
    },
    {
        title: "Tropic Thunder",
        emojiImgs: "😼😽🙀😿😾",
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
        title: "Wall-E",
        emojiImgs: "📺❤️💻",
        genres: ["animation", "adventure", "family"],
        type: "movie",
        year: 2008
    },
    {
        title: "West Side Story",
        emojiImgs: "🗽✈️⚔️🦈💔",
        genres: ["musical", "romance", "drama", "crime"],
        type: "musical",
        year: 1961
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
        title: "X-Files",
        emojiImgs: "👽🛸👦🏻👩‍🦰🔦",
        genres: ["sci-fi", "drama", "mystery"],
        type: "tv",
        year: 1993
    },
    {
        title: "Young Frankenstein",
        emojiImgs: "👶🌭🍺⚡️🧟‍",
        genres: ["comedy"],
        type: "movie",
        year: 1974
    }
]
