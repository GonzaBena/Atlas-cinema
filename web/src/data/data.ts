export class Movie {
    id: number;
    title: string;
    genre: string[];
    duration: string;
    rating: string;
    score: number;
    image: string;
    description: string;
    trailer: string;

    constructor(id: number, title: string, genre: string[], duration: string, rating: string, score: number, image: string, description: string, trailer: string = "") {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.duration = duration;
        this.rating = rating;
        this.score = score;
        this.image = image;
        this.description = description;
        this.trailer = trailer;
    }
}

export const featuredMovies = [
    new Movie(
        1,
        "Sueño de fuga",
        ["Drama", "Crimen"],
        "142 min",
        "R",
        9.3,
        "/placeholder.svg",
        "Dos reclusos forjan una inquebrantable amistad mientras cumplen condena y desarrollan un plan de fuga.",
        "https://www.youtube.com/watch?v=V75dMMIW2B4"
    ),
    new Movie(
        2,
        "El Padrino",
        ["Crimen", "Drama"],
        "175 min",
        "R",
        9.2,
        "/placeholder.svg",
        "La historia de la" +
        " familia Corleone y su imperio criminal en la América de posguerra."
    ),
    new Movie(
        3,
        "El Padrino: Parte II",
        ["Crimen", "Drama"],
        "202 min",
        "R",
        9.0,
        "/placeholder.svg",
        "Se alternan las historias de Vito Corleone en sus inicios y Michael Corleone consolidando el imperio familiar."
    ),
    new Movie(
        4,
        "El caballero oscuro",
        ["Acción", "Crimen", "Drama"],
        "152 min",
        "PG-13",
        9.0,
        "/placeholder.svg",
        "Batman debe enfrentarse al Joker, un criminal anárquico que siembra el caos en Gotham."
    ),
    new Movie(
        5,
        "12 hombres sin piedad",
        ["Drama"],
        "96 min",
        "Not Rated",
        9.0,
        "/placeholder.svg",
        "Un jurado debe deliberar sobre la culpabilidad de un joven acusado de asesinato, poniendo a prueba sus prejuicios."
    ),
    new Movie(
        6,
        "La lista de Schindler",
        ["Biografía", "Drama", "Historia"],
        "195 min",
        "R",
        8.9,
        "/placeholder.svg",
        "Oskar Schindler salva a cientos de judíos durante el Holocausto empleándolos en su fábrica."
    ),
    new Movie(
        7,
        "El señor de los anillos: La comunidad del anillo",
        ["Fantasía", "Aventura"],
        "178 min",
        "PG-13",
        8.8,
        "/placeholder.svg",
        "Un joven hobbit emprende el peligroso viaje de destruir un anillo con un poder inmenso."
    ),
    new Movie(
        8,
        "Pulp Fiction",
        ["Crimen", "Drama"],
        "154 min",
        "R",
        8.9,
        "/placeholder.svg",
        "Historias entrelazadas de criminales, boxeadores y la cultura pop en Los Ángeles."
    ),
    new Movie(
        9,
        "El bueno, el feo y el malo",
        ["Western"],
        "178 min",
        "PG-13",
        8.8,
        "/placeholder.svg",
        "Tres pistoleros buscan un tesoro enterrado durante la Guerra Civil estadounidense."
    ),
    new Movie(
        10,
        "Forrest Gump",
        ["Drama", "Romance"],
        "142 min",
        "PG-13",
        8.8,
        "/placeholder.svg",
        "La extraordinaria vida de un hombre con inteligencia limitada que presencia momentos históricos de EE.UU."
    ),
    new Movie(
        11,
        "Origen",
        ["Acción", "Aventura", "Ciencia ficción"],
        "148 min",
        "PG-13",
        8.8,
        "/placeholder.svg",
        "Un ladrón que roba secretos mediante la tecnología de sueños recibe la misión de implantar una idea."
    ),
    new Movie(
        12,
        "Matrix",
        ["Acción", "Ciencia ficción"],
        "136 min",
        "R",
        8.7,
        "/placeholder.svg",
        "Un hacker descubre que la realidad es una simulación creada por máquinas dominantes."
    ),
    new Movie(
        13,
        "Interestelar",
        ["Aventura", "Drama", "Ciencia ficción"],
        "169 min",
        "PG-13",
        8.6,
        "/placeholder.svg",
        "Exploradores viajan a través de un agujero de gusano en busca de un nuevo hogar para la humanidad."
    ),
    new Movie(
        14,
        "El silencio de los inocentes",
        ["Crimen", "Drama", "Terror"],
        "118 min",
        "R",
        8.6,
        "/placeholder.svg",
        "Una agente del FBI busca la ayuda de un brillante asesino en serie para capturar a otro criminal."
    ),
    new Movie(
        15,
        "La vida es bella",
        ["Comedia", "Drama", "Guerra"],
        "116 min",
        "PG-13",
        8.6,
        "/placeholder.svg",
        "Un padre usa el humor para proteger a su hijo de las atrocidades de un campo de concentración."
    ),
    new Movie(
        16,
        "Gladiador",
        ["Acción", "Aventura", "Drama"],
        "155 min",
        "R",
        8.5,
        "/placeholder.svg",
        "Un general romano traicionado se convierte en gladiador buscando venganza contra el emperador."
    ),
    new Movie(
        17,
        "Parque Jurásico",
        ["Aventura", "Ciencia ficción", "Thriller"],
        "127 min",
        "PG-13",
        8.1,
        "/placeholder.svg",
        "En un parque temático con dinosaurios clonados, sobreviven caos y terror cuando las criaturas escapan."
    ),
    new Movie(
        18,
        "Avatar",
        ["Acción", "Aventura", "Fantasía"],
        "162 min",
        "PG-13",
        7.8,
        "/placeholder.svg",
        "Un exmarine se une a un programa en Pandora y se debate entre dos mundos en guerra."
    ),
    new Movie(
        19,
        "Titanic",
        ["Drama", "Romance"],
        "195 min",
        "PG-13",
        7.8,
        "/placeholder.svg",
        "Una joven aristócrata y un artista de clase baja se enamoran en el fatídico viaje del Titanic."
    ),
    new Movie(
        20,
        "Whiplash: Música y obsesión",
        ["Drama", "Música"],
        "106 min",
        "R",
        8.5,
        "/placeholder.svg",
        "Un joven baterista busca la excelencia bajo la tutela de un exigente instructor."
    ),
    new Movie(
        21,
        "El renacido",
        ["Aventura", "Drama"],
        "156 min",
        "R",
        8.0,
        "/placeholder.svg",
        "Un explorador sobrevive a una traición y lucha por regresar a casa en la naturaleza salvaje."
    ),
    new Movie(
        22,
        "Mad Max: Furia en la carretera",
        ["Acción", "Aventura", "Ciencia ficción"],
        "120 min",
        "R",
        8.1,
        "/placeholder.svg",
        "En un mundo postapocalíptico, Mad Max ayuda a una mujer y su grupo a huir de un tirano."
    ),
    new Movie(
        23,
        "La La Land",
        ["Comedia", "Drama", "Música"],
        "128 min",
        "PG-13",
        8.0,
        "/placeholder.svg",
        "Un pianista de jazz y una aspirante a actriz se enamoran mientras persiguen sus sueños en Los Ángeles."
    ),
    new Movie(
        24,
        "Coco",
        ["Animación", "Aventura", "Familia"],
        "105 min",
        "PG",
        8.4,
        "/placeholder.svg",
        "Un niño viaja al Mundo de los Muertos para descubrir la historia de su familia y su pasión por la música."
    ),
    new Movie(
        25,
        "Toy Story",
        ["Animación", "Aventura", "Comedia"],
        "81 min",
        "G",
        8.3,
        "/placeholder.svg",
        "Los juguetes de un niño cobran vida cuando no hay nadie presente y viven grandes aventuras."
    ),
    new Movie(
        26,
        "Up",
        ["Animación", "Aventura", "Comedia"],
        "96 min",
        "PG",
        8.2,
        "/placeholder.svg",
        "Un anciano y un niño explorador viajan en una casa flotante impulsada por globos hasta Sudamérica."
    ),
    new Movie(
        27,
        "Wall-E",
        ["Animación", "Aventura", "Familia"],
        "98 min",
        "G",
        8.4,
        "/placeholder.svg",
        "Un robot compactador de basura descubre un nuevo propósito al enamorarse de una robot avanzada."
    ),
    new Movie(
        28,
        "Los cazafantasmas",
        ["Comedia", "Fantasía"],
        "105 min",
        "PG",
        7.8,
        "/placeholder.svg",
        "Un grupo de científicos se dedica a capturar fantasmas en la ciudad de Nueva York."
    ),
    new Movie(
        29,
        "Regreso al futuro",
        ["Aventura", "Comedia", "Ciencia ficción"],
        "116 min",
        "PG",
        8.5,
        "/placeholder.svg",
        "Un adolescente viaja al pasado en un DeLorean y debe asegurarse de que sus padres se conozcan."
    ),
    new Movie(
        30,
        "Alien: el octavo pasajero",
        ["Terror", "Ciencia ficción"],
        "117 min",
        "R",
        8.4,
        "/placeholder.svg",
        "La tripulación de una nave espacial descubre una forma de vida alienígena letal."
    )
]


export const showtimes = [
    {"movie": "Sueño de fuga", "times": ["11:00", "14:30", "18:15", "21:00"]},
    {"movie": "El Padrino", "times": ["10:45", "13:30", "17:00", "20:30"]},
    {"movie": "El Padrino: Parte II", "times": ["12:15", "16:00", "19:45", "22:30"]},
    {"movie": "El caballero oscuro", "times": ["10:15", "13:00", "16:45", "20:00"]},
    {"movie": "12 hombres sin piedad", "times": ["11:30", "15:15", "18:45", "22:15"]},
    {"movie": "La lista de Schindler", "times": ["11:00", "14:30", "18:15", "21:00"]},
    {"movie": "El señor de los anillos: La comunidad del anillo", "times": ["10:45", "13:30", "17:00", "20:30"]},
    {"movie": "Pulp Fiction", "times": ["12:15", "16:00", "19:45", "22:30"]},
    {"movie": "El bueno, el feo y el malo", "times": ["10:15", "13:00", "16:45", "20:00"]},
    {"movie": "Forrest Gump", "times": ["11:30", "15:15", "18:45", "22:15"]},
    {"movie": "Origen", "times": ["11:00", "14:30", "18:15", "21:00"]},
    {"movie": "Matrix", "times": ["10:45", "13:30", "17:00", "20:30"]},
    {"movie": "Interestelar", "times": ["12:15", "16:00", "19:45", "22:30"]},
    {"movie": "El silencio de los inocentes", "times": ["10:15", "13:00", "16:45", "20:00"]},
    {"movie": "La vida es bella", "times": ["11:30", "15:15", "18:45", "22:15"]},
    {"movie": "Gladiador", "times": ["11:00", "14:30", "18:15", "21:00"]},
    {"movie": "Parque Jurásico", "times": ["10:45", "13:30", "17:00", "20:30"]},
    {"movie": "Avatar", "times": ["12:15", "16:00", "19:45", "22:30"]},
    {"movie": "Titanic", "times": ["10:15", "13:00", "16:45", "20:00"]},
    {"movie": "Whiplash: Música y obsesión", "times": ["11:30", "15:15", "18:45", "22:15"]},
    {"movie": "El renacido", "times": ["11:00", "14:30", "18:15", "21:00"]},
    {"movie": "Mad Max: Furia en la carretera", "times": ["10:45", "13:30", "17:00", "20:30"]},
    {"movie": "La La Land", "times": ["12:15", "16:00", "19:45", "22:30"]},
    {"movie": "Coco", "times": ["10:15", "13:00", "16:45", "20:00"]},
    {"movie": "Toy Story", "times": ["11:30", "15:15", "18:45", "22:15"]},
    {"movie": "Up", "times": ["11:00", "14:30", "18:15", "21:00"]},
    {"movie": "Wall-E", "times": ["10:45", "13:30", "17:00", "20:30"]},
    {"movie": "Los cazafantasmas", "times": ["12:15", "16:00", "19:45", "22:30"]},
    {"movie": "Regreso al futuro", "times": ["10:15", "13:00", "16:45", "20:00"]},
    {"movie": "Alien: el octavo pasajero", "times": ["11:30", "15:15", "18:45", "22:15"]}
]
