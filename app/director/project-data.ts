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
    festivals?: Array<{ festival: string, highlight?: string, country?: string }>;
    mainImage: string;
    mainImageDesktop?: string;
    mainImageMobile?: string;
    poster?: string;
    stills?: string[];
    linkToTrailer?: string;
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
            { role: "Writer/Director", name: "Irene Mercadal" },
            { role: "Producer", name: "Fran Zayas, José Manuel Vélez" },

        ],
        cast: [
            { role: "Kiki", name: "Glenna Brucken"},
            { role: "Gabriel", name: "Attilio Rigotti"}
        ],
        festivals: [
            {festival: "MiFestival International Film Festival", country: "USA"}, 
            {festival: "TuFestival International Film Festival", highlight: "World Premiere", country: "Chile"},
        ],
        mainImage: "/Fondo_WAQB.jpg",
        poster: "",
        stills: ["/534_Babysteps.png", "/533_Babysteps.png"],
        linkToTrailer: "",
    },    
    {
        id: 2,
        title: "Fervor",
        slug: "fervor",
        category: "Short Film",
        year: 2025,
        duration: 12,
        country: "US",
        language: "español",
        logline: "A quirky 35-year old unemployed artist living in NYC, is determined to become a mother while trying to make ends meet.",
        crew: [            
            { role: "Writer/Director", name: "Irene Mercadal" },
            { role: "Producer", name: "Fran Zayas, José Manuel Vélez" },

        ],
        cast: [
            { role: "Kiki", name: "Glenna Brucken"},
            { role: "Gabriel", name: "Attilio Rigotti"}
        ],
        festivals: [
            {festival: "MiFestival International Film Festival", highlight: "Premio al Mejor Corto", country: "USA"}, 
            {festival: "TuFestival International Film Festival", highlight: "World Premiere", country: "Chile"},
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
            { role: "Writer/Director", name: "Irene Mercadal" },
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
            { role: "Writer/Director", name: "Irene Mercadal" },
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