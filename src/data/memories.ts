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
    photo: "/public/memory-1.png",
    title: "Nosso primeiro encontro",
    song_name: "Deixa",
    artist: "Lagum",
    romantic_phrase: "Naquele momento, eu soube que era você.",
    description: "O dia em que nos encontramos pela primeira vez. O nervosismo, os sorrisos tímidos, e aquela sensação de que algo mágico estava começando. Caminhamos pela praia enquanto o sol se punta, e o mundo inteiro pareceu parar só para nós dois.",
    date: "2023-10-29",
    spotify_link: "https://www.youtube.com/watch?v=9_egsWu-B7M&list=RD9_egsWu-B7M&start_radio=1",
  },
  {
    id: "2",
    photo: "/public/memory-2.png",
    title: "Nosso primeiro beijo",
    song_name: "Será que eu tô gostando dela?",
    artist: "Tuca Oliveira",
    romantic_phrase: "Cada parte de mim ama cada parte de você.",
    description: "Entre flores e risos, aconteceu nosso primeiro beijo. O tempo parou, o vento soprou suavemente, e naquele instante soubemos que estávamos exatamente onde deveríamos estar.",
    date: "2023-11-04",
    spotify_link: "https://www.youtube.com/watch?v=_OAXNKMmq5I&list=RD_OAXNKMmq5I&start_radio=1",
  },
  {
    id: "3",
    photo: "/public/memory-3.png",
    title: "Noite sob as estrelas",
    song_name: "Vida Vazia",
    artist: "Desejo de Menina",
    romantic_phrase: "Com você, até o silêncio é música.",
    description: "Sentamos na calçada e contamos estrelas juntos. Cada constelação tinha um nome que inventamos, cada estrela cadente era um desejo compartilhado. Naquela noite, o universo era só nosso.",
    date: "2023-11-10",
    spotify_link: "https://www.youtube.com/watch?v=ld17lOdQ6OU&list=RDld17lOdQ6OU&start_radio=1",
  },
  {
    id: "4",
    photo: "/public/memory-4.png",
    title: "Minha parceira de todas as horas",
    song_name: "FORRÓ E DESMANTELO",
    artist: "Manim Vaqueiro",
    romantic_phrase: "Não posso evitar me apaixonar por você.",
    description: "Está comigo em todos os momentos, sejam eles de alegria ou de desafio. Com você, aprendi o verdadeiro significado de parceria e amor incondicional. Juntos, somos mais fortes e mais felizes.",
    date: "2026-01-25",
    spotify_link: "https://www.youtube.com/watch?v=g2o3CZaVVCo&list=RDg2o3CZaVVCo&start_radio=1",
  },
];

export const timelineEvents = [
  { date: "2023-10-29", title: "Primeiro encontro", icon: "💕" },
  { date: "2023-11-04", title: "Primeiro beijo", icon: "💋" },
  { date: "2023-11-10", title: "Noite sob as estrelas", icon: "⭐" },
  { date: "2026-01-25", title: "Minha parceira de todas as horas", icon: "💑" },
];

export const coupleStartDate = new Date("2023-10-29");
