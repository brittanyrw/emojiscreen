const emojiItems = [
    {
        title: "The 25th Annual Putnum County Spelling Bee",
        emojiImgs: "🔤🐝😂",
        genres: ["musical", "comedy"],
        type: "musical",
        year: 2005
    },
    {
        title: "300 ",
        emojiImgs: " 💪🤕👊🏻⚔️ 🛡",
        genres: ["action", "drama", "fantasy"],
        type: "movie",
        year: 2007
    },
    {
        title: "A Star is Born",
        emojiImgs: "🎤👩👨🎸⭐",
        genres: ["drama", "music", "romance"],
        type: "movie",
        year: 2018
    },
    {
        title: "Aladdin",
        emojiImgs: "🧞‍♂️💞👸👳🏰",
        genres: ["adventure", "family", "comedy"],
        type: "movie",
        year: 2019
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
        year: 1979
    },
    {
        title: "Beauty and the Beast",
        emojiImgs: "🏰🥀🎶📚🕰️",
        genres: ["animation", "family", "fantasy"],
        type: "movie",
        year: 1991
    },
    {
        title: "Black Panther",
        emojiImgs: "😺🌍🏴💪🏿🦸🏿",
        genres: ["action", "adventure", "sci-fi"],
        type: "movie",
        year: 2018
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
        genres: ["action", "Horror", "sci-fi"],
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
        title: "The Color Purple",
        emojiImgs: "💜🏃🏾‍♀️🧘🏾‍♀️",
        genres: ["drama"],
        type: "movie",
        year: 1986
    },
    {
        title: "The Curious Case of Benjamin Button",
        emojiImgs: "👴🏻➡️🧔🏻➡️👶🏻",
        genres: ["Drama", "Fantasy", "Romance"],
        type: "movie",
        year: 2008
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
        title: "E.T. the Extra-Terrestrial",
        emojiImgs: "🌙🚲👉🏻👈🏻👽",
        genres: ["Family", "Sci-Fi"],
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
        genres: ["Action", "Crime", "Thriller"],
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
        genres: ["Horror", "sci-fi"],
        type: "movie",
        year: 2018
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
        title: "Grease",
        emojiImgs: "🌅👸💞👨‍🎤🚘",
        genres: ["musical", "romance"],
        type: "musical",
        year: 1978
    },
    {
        title: "Hamilton: The Musical",
        emojiImgs: "💵🖋️⚖️🎵📜",
        genres: ["drama", "comedy", "musical"],
        type: "musical",
        year: 2015
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
        title: "Jackie Brown",
        emojiImgs: "🙎🏿‍♀️🛫💼💰",
        genres: ["crime", "film-noir"],
        type: "movie",
        year: 1997
    },
    {
        title: "John Wick",
        emojiImgs: "🔪🐶🚗🔫🤵🏻",
        genres: ["Action", "Crime", "Thriller"],
        type: "movie",
        year: 2014
    },
    {
        title: "Jurassic Park",
        emojiImgs: "🔬🦖🏝",
        genres: ["Action", "Adventure", "Sci-Fi"],
        type: "movie",
        year: 1993
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
        title: "Legally Blonde",
        emojiImgs: "👩‍⚖️👠💘🏫🐶",
        genres: ["romance", "comedy"],
        type: "movie",
        year: 2001
    },
    {
        title: "Les Misérables",
        emojiImgs: "🇫🇷🥖👮🏻",
        genres: ["drama", "history", "musical"],
        type: "musical",
        year: 1987
    },
    {
        title: "Lilo & Stitch",
        emojiImgs: "🏄‍♀️👽👧🏽🌸",
        genres: ["animation", "comedy", "adventure"],
        type: "movie",
        year: 2002
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
        title: "Matrix",
        emojiImgs: "👨‍💻👩‍💻🔫🥋",
        genres: ["action", "sci-fi"],
        type: "movie",
        year: 1999
    },
    {
        title: "Miss Saigon",
        emojiImgs: "🇻🇳💑🚁👶",
        genres: ["drama", "war", "musical"],
        type: "musical",
        year: 1991
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
        title: "Sixth Sense",
        emojiImgs: "👻👦👀",
        genres: ["drama", "mystery", "thriller"],
        type: "movie",
        year: 1999
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
        title: "Sweeney Todd: The Demon Barber of Fleet Street",
        emojiImgs: "💈🔪☠️🍰",
        genres: ["drama", "horror", "musical"],
        type: "musical",
        year: 1979
    },
    {
        title: "Tropic Thunder",
        emojiImgs: "😼😽🙀😿😾",
        genres: ["Action", "Adventure", "Comedy"],
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
