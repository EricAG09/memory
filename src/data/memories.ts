export interface Memory {
  id: string;
  photo: string;
  title: string;
  song_name: string;
  artist: string;
  romantic_phrase: string;
  description: string;
  date: string;
  spotify_link: string;
}

export const defaultMemories: Memory[] = [
  {
    id: "1",
    photo: "/src/assets/memory-1.jpg",
    title: "Nosso primeiro encontro",
    song_name: "Perfect",
    artist: "Ed Sheeran",
    romantic_phrase: "Naquele momento, eu soube que era você.",
    description: "O dia em que nos encontramos pela primeira vez. O nervosismo, os sorrisos tímidos, e aquela sensação de que algo mágico estava começando. Caminhamos pela praia enquanto o sol se punha, e o mundo inteiro pareceu parar só para nós dois.",
    date: "2024-02-14",
    spotify_link: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
  },
  {
    id: "2",
    photo: "/src/assets/memory-2.jpg",
    title: "Nosso primeiro beijo",
    song_name: "All of Me",
    artist: "John Legend",
    romantic_phrase: "Cada parte de mim ama cada parte de você.",
    description: "Entre flores e risos, aconteceu nosso primeiro beijo. O tempo parou, o vento soprou suavemente, e naquele instante soubemos que estávamos exatamente onde deveríamos estar.",
    date: "2024-03-10",
    spotify_link: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a",
  },
  {
    id: "3",
    photo: "/src/assets/memory-3.jpg",
    title: "Noite sob as estrelas",
    song_name: "Thinking Out Loud",
    artist: "Ed Sheeran",
    romantic_phrase: "Com você, até o silêncio é música.",
    description: "Deitamos no gramado e contamos estrelas juntos. Cada constelação tinha um nome que inventamos, cada estrela cadente era um desejo compartilhado. Naquela noite, o universo era só nosso.",
    date: "2024-06-20",
    spotify_link: "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f",
  },
  {
    id: "4",
    photo: "/src/assets/memory-4.jpg",
    title: "Dançando na chuva",
    song_name: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    romantic_phrase: "Não posso evitar me apaixonar por você.",
    description: "A chuva nos pegou de surpresa, mas ao invés de correr, decidimos dançar. As luzes da cidade refletiam nas poças d'água, e naquele momento, éramos os únicos no mundo.",
    date: "2024-09-15",
    spotify_link: "https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC",
  },
];

export const timelineEvents = [
  { date: "2024-02-14", title: "Primeiro encontro", icon: "💕" },
  { date: "2024-03-10", title: "Primeiro beijo", icon: "💋" },
  { date: "2024-06-20", title: "Noite sob as estrelas", icon: "⭐" },
  { date: "2024-09-15", title: "Dançando na chuva", icon: "🌧️" },
];

export const coupleStartDate = new Date("2024-02-14");
