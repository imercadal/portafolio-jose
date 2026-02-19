export interface Project {
    id?: number;
    title: string;
    slug: string;
    category?: string;
    year: number;
    duration?: number;
    country: string;
    language: string;
    logline: string;
    crew: Array<{ role: string, name: string }>;
    cast: Array<{ role: string, name: string }>;
    festivals?: Array<{ festival: string, highlight: string}>;
    mainImage: string;
    poster?: string;
    stills?: string[];
    linkToTrailer?: string;
    embedLinkTrailer?: string;
}

export const projects : Project[] = [
{
        id: 1,
        title: "Within A Quiet Body",
        slug: "within",
        category: "Short Film",
        year: 2025,
        duration: 12,
        country: "US",
        language: "español",
        logline: "A quirky 35-year old unemployed artist living in NYC, is determined to become a mother while trying to make ends meet.",
        crew: [            
            { role: "Writer/Director", name: "José Manuel Vélez" },
            { role: "Producer", name: "Fran Zayas, José Manuel Vélez" },

        ],
        cast: [
            { role: "Alex", name: "Charlie Brucken"},
            { role: "Zakk", name: "Rob Rigotti"}
        ],
        festivals: [
            {festival: "NewFest, USA", highlight: "Grand Jury Prize"},
            {festival: "SANFIC 17, Chile", highlight: "Special Mention of the Jury"},
            {festival: "NYU First Run Festival, USA", highlight: "Wasserman King Award for Best Directing"},
            {festival: "OutFest LA, USA", highlight: ""},
            {festival: "Melbourne Queer Film Festival, Australia", highlight: ""},
        ],
        mainImage: "/Fervor/Fervor_Main.webp",
        stills: ["/Fervor/Fervor_01.webp", "/Fervor/Fervor_02.webp", "/Fervor/Fervor_03.webp", "/Fervor/Fervor_04.webp", "/Fervor/Fervor_05.webp", "/Fervor/Fervor_06.webp",],
        linkToTrailer: "https://vimeo.com/571768772",
		embedLinkTrailer: "https://player.vimeo.com/video/571768772?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",

    },    
    {
        id: 2,
        title: "Fervor",
        slug: "fervor",
        category: "Short Film",
        year: 2021,
        duration: 14,
        country: "Chile-USA",
        language: "Spanish",
        logline: "A quirky 35-year old unemployed artist living in NYC, is determined to become a mother while trying to make ends meet.",
        crew: [
            { role: "Written & Directed by", name: "José Manuel Vélez" },
            { role: "Produced by", name: "Luis Cifuentes, Miguel Ángel Rodríguez & José Manuel Vélez" },
            { role: "Cinematography by", name: "Felipe Vara de Rey, AEC" },
            { role: "Edited by", name: "José Manuel Vélez" },
            { role: "Music by", name: "Ignacio Redard, Entrópica, Sofía Oportot, Fakuta & Paco Miranda" },
        ],
        cast: [
            { role: "as Tomás", name: "Rodrigo Calderón"},
            { role: "as Benjamín", name: "Domingo Jeame"},
            { role: "as Alberto", name: "Daniel Candia"}
        ],
        festivals: [
            {festival: "Palm Springs International ShortFest, USA", highlight: "World Premiere"},
            {festival: "NewFest, USA", highlight: "Grand Jury Prize"},
            {festival: "SANFIC 17, Chile", highlight: "Special Mention of the Jury"},
            {festival: "NYU First Run Festival, USA", highlight: "Wasserman King Award for Best Directing"},
            {festival: "OutFest LA, USA", highlight: ""},
            {festival: "Melbourne Queer Film Festival, Australia", highlight: ""},
            {festival: "BFI Flare, England", highlight: ""},
            {festival: "La Fête du Slip, Switzerland", highlight: ""},
            {festival: "Kashish Mumbai International Queer Film Festival, India", highlight: ""},
            {festival: "Coronado Island Film Festival, USA", highlight: ""},
            {festival: "Twisted Arts Film Festival, USA", highlight: ""},
            {festival: "Geelong Pride Film Festival, Australia", highlight: ""},
            {festival: "DeadCenter Film Festival, USA", highlight: ""},
            {festival: "OutFilm Connecticut LGBTQ Film Festival, USA", highlight: ""},
            {festival: "Festival Amor, Chile International LGBTQ Film Festival, Chile", highlight: ""}
        ],
        mainImage: "",
        poster: "",
        stills: ["/534_Babysteps.png", "/533_Babysteps.png"],
        linkToTrailer: "",
    },    
        {
        id: 3,
        title: "Mountain Fever",
        slug: "mountain-fever",
        category: "Short Film",
        year: 2025,
        duration: 12,
        country: "US",
        language: "español",
        logline: "A quirky 35-year old unemployed artist living in NYC, is determined to become a mother while trying to make ends meet.",
        crew: [            
            { role: "Writer/Director", name: "José Manuel Vélez" },
            { role: "Producer", name: "Fran Zayas, José Manuel Vélez" },

        ],
        cast: [
            { role: "Kiki", name: "Glenna Brucken"},
            { role: "Gabriel", name: "Attilio Rigotti"}
        ],
        festivals: ["MiFestival International Film Festival", "Otro Film Festival"],
        mainImage: "",
        poster: "",
        stills: ["/534_Babysteps.png", "/533_Babysteps.png"],
        linkToTrailer: "",
    },    
        {
        id: 4,
        title: "About Lucas",
        slug: "about-lucas",
        category: "Short Film",
        year: 2025,
        duration: 12,
        country: "US",
        language: "español",
        logline: "A quirky 35-year old unemployed artist living in NYC, is determined to become a mother while trying to make ends meet.",
        crew: [            
            { role: "Writer/Director", name: "José Manuel Vélez" },
            { role: "Producer", name: "Fran Zayas, José Manuel Vélez" },

        ],
        cast: [
            { role: "Kiki", name: "Glenna Brucken"},
            { role: "Gabriel", name: "Attilio Rigotti"}
        ],
        festivals: ["MiFestival International Film Festival", "Otro Film Festival"],
        mainImage: "",
        poster: "",
        stills: ["/534_Babysteps.png", "/533_Babysteps.png"],
        linkToTrailer: "",
    },    

]