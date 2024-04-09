// TODO EXERCICE :

// ? Manipulation de chaines de caractères trouvez sur google les fonctions vous permettant d'obtenir le resultat demandé

// * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String

// Créer une variable avec le texte suivant: "Je suis une chaine de caractères "
const text = 'Je suis une chaine de caractères ';
const message = new String('Je suis une chaine de caractères');

// Afficher la longueur de la chaine de caractères en console
console.log(text.length);

// Afficher le premier caractère de la chaine de caractères en console
console.log(text.charAt(0));
console.log(text[0]);
console.log(text.at(0));

// Afficher le dernier caractère de la chaine de caractères en console
console.log(text.charAt(text.length - 2));
console.log(text.at(-1));

// Supprimer les espaces en début et fin de chaine de caractères et l'afficher en console
console.log(text.trim());

// Afficher les 10 premiers caractères de la chaine de caractères en console
console.log(text.slice(0, 10));
console.log(text.substring(0, 10));

// Mettre la chaine de caractères en majuscules et l'afficher en console
console.log(text.toUpperCase());

// Mettre la chaine de caractères en minuscules et l'afficher en console
console.log(text.toLowerCase());

// Remplacer "chaine de caractère" par "string" dans la phrase et l'afficher en console
console.log(text.replace('chaine de caractères', 'string'));

// Afficher la chaine de caractères en console en remplaçant chaque espace par un underscore
console.log(text.replaceAll(' ', '_'));

// Transformer la chaine de caractères en tableau contenant chaque mots et l'afficher en console
console.log(text.split(' '));
// * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String

// Créer une variable avec le texte suivant: "Je suis une chaine de caractères "

// Afficher la longueur de la chaine de caractères en console

// Afficher le premier caractère de la chaine de caractères en console

// Afficher le dernier caractère de la chaine de caractères en console

// Supprimer les espaces en début et fin de chaine de caractères et l'afficher en console

// Afficher les 10 premiers caractères de la chaine de caractères en console

// Mettre la chaine de caractères en majuscules et l'afficher en console

// Mettre la chaine de caractères en minuscules et l'afficher en console

// Remplacer "chaine de caractère" par "string" dans la phrase et l'afficher en console

// Afficher la chaine de caractères en console en remplaçant chaque espace par un underscore

// Transformer la chaine de caractères en tableau contenant chaque mots et l'afficher en console

const pokemons = [
    'Bulbasaur',
    'Charmander',
    'Squirtle',
    'Pikachu',
    'Jigglypuff',
    'Meowth',
    'Psyduck',
    'Snorlax',
    'Magikarp',
    'Eevee',
];

// Afficher en console le dernier élément du tableau pokemons
console.log(pokemons[pokemons.length - 1]);

// Transformer le tableau pokemons en chaine de caractères avec les noms des pokemons séparés par une virgule et un espace et l'afficher en console
console.log(pokemons.join(', '));
console.log(pokemons.toString());

// Inverser les cases du tableau
console.log(pokemons.reverse());

// Nodejs
// kayak

// creer une fonction checkPalindrom qui prend en parametre une chaine de caractere
// Verifier si c'est un palindrome

// si oui ça retourne true
// sinon ca retourne false

function checkPalindrom(string) {
    let ispalindrom = string;
    ispalindrom = ispalindrom.split('');
    ispalindrom.reverse();
    ispalindrom = ispalindrom.join('');

    if (string === ispalindrom) {
        return true;
    } else {
        return false;
    }
}

const response = checkPalindrom('kayak');
console.log(response);

// Transformer le tableau pokemons en chaine de caractères avec les noms des pokemons séparés par une virgule et un espace et l'afficher en console

// Inverser les cases du tableau

// TODO EXERCICE

const newSeries = [
    {
        title: 'The Crown',
        genre: 'Drame historique',
        synopsis:
            'Cette série dramatique suit les rivalités politiques et les intrigues personnelles de la reine Elizabeth II, du roi George VI, et de Winston Churchill.',
        seasons: 4,
        imdbRating: 8.7,
    },
    {
        title: 'The Mandalorian',
        genre: 'Science-Fiction',
        synopsis:
            "Un chasseur de primes solitaire explore les confins de la galaxie, loin de l'autorité de la Nouvelle République.",
        seasons: 2,
        imdbRating: 8.7,
    },
    {
        title: 'The Witcher',
        genre: 'Fantasy',
        synopsis:
            'Geralt de Riv, un chasseur de monstres solitaire, lutte pour trouver sa place dans un monde où les gens se révèlent souvent plus méchants que les bêtes.',
        seasons: 2,
        imdbRating: 8.2,
    },
    {
        title: 'The Boys',
        genre: 'Super-héros / Comédie noire',
        synopsis:
            'Une équipe de justiciers lutte contre des super-héros corrompus qui abusent de leur pouvoir plutôt que de le protéger.',
        seasons: 2,
        imdbRating: 8.7,
    },
    {
        title: 'The Umbrella Academy',
        genre: 'Super-héros / Science-Fiction',
        synopsis:
            'Une famille de super-héros dysfonctionnels se réunit pour résoudre le mystère de la mort de leur père et éviter une apocalypse imminente.',
        seasons: 2,
        imdbRating: 8.0,
    },
];

// Afficher en console le titre de chaque série dans le tableau newSeries

newSeries.forEach((serie) => {
    console.log(serie.title);
});

// Afficher en console le titre des series avec une note IMDb supérieure à 8.5
newSeries.forEach((serie) => {
    if (serie.imdbRating > 8.5) {
        console.log(serie.title);
    }
});

// Afficher en console le titre des séries qui ont moins de 3 saisons et une note IMDb supérieure à 8.5
newSeries.forEach((serie) => {
    if (serie.imdbRating > 8.5 && serie.seasons < 3) {
        console.log(serie.title);
    }
});

// Afficher en console le titre et les 60 premiers caractères du synopsis
newSeries.forEach((serie) => {
    console.log(`${serie.title} synopsys : ${serie.synopsis.slice(0, 60)}...`);
});


// Afficher en console le titre des series avec une note IMDb supérieure à 8.5

// Afficher en console le titre des séries qui ont moins de 3 saisons et une note IMDb supérieure à 8.5

// Afficher en console le titre et les 60 premiers caractères du synopsis

// Créer une fonction createSerieCard() qui prend un objet série en paramètre et retourne une card HTML avec les informations de la série
// La card sera une div avec une classe 'card' et contiendra les informations de la série
// La carte doit contenir un titre h3, un paragraphe pour le genre, un paragraphe pour le synopsis, un paragraphe pour le nombre de saisons et un paragraphe pour la note IMDb

function createSerieCard(obj) {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.textContent = obj.title;

    const genre = document.createElement('p');
    genre.textContent = obj.genre;

    const synopsis = document.createElement('p');
    synopsis.textContent = obj.synopsis;

    const seasons = document.createElement('p');
    seasons.textContent = `Saisons: ${obj.seasons}`;

    const imdbRating = document.createElement('p');
    imdbRating.textContent = `Note IMDb: ${obj.imdbRating}`;

    card.append(title, genre, synopsis, seasons, imdbRating);

    return card;
}

// Pour chaque série dans le tableau newSeries, créer une carte et l'ajouter à la section #new-series
newSeries.forEach((serie) => {
    const card = createSerieCard(serie);

    const newSeriesContainer = document.querySelector('#new-series');
    newSeriesContainer.append(card);
    // ajouter dans le DOM
});

// Pour chaque série dans le tableau newSeries, créer une carte et l'ajouter à la section #new-series

// TODO EXERCICE

const popularSeries = [
    {
        title: 'Game of Thrones',
        genre: 'Fantasy / Drama',
        synopsis:
            'Une lutte impitoyable pour le pouvoir se déroule dans les Sept Royaumes de Westeros, tandis que des forces sinistres se lèvent au-delà du Mur pour menacer tout le royaume.',
        seasons: 8,
        imdbRating: 9.3,
    },
    {
        title: 'Breaking Bad',
        genre: 'Drama / Thriller',
        synopsis:
            "Un professeur de chimie atteint de cancer se lance dans la fabrication de méthamphétamine pour assurer l'avenir financier de sa famille, entraînant une descente dans le monde dangereux du crime.",
        seasons: 5,
        imdbRating: 9.5,
    },
    {
        title: 'Stranger Things',
        genre: 'Science-Fiction / Horror',
        synopsis:
            "À Hawkins, en Indiana, dans les années 1980, un jeune garçon disparaît mystérieusement. Pendant ce temps, une jeune fille aux pouvoirs télékinésiques s'échappe d'un laboratoire sinistre et découvre un monde étrange et effrayant.",
        seasons: 4,
        imdbRating: 8.7,
    },
    {
        title: 'The Big Bang Theory',
        genre: 'Comedy',
        synopsis:
            "Une sitcom qui suit les aventures de quatre scientifiques et de leurs voisins alors qu'ils naviguent dans la vie et l'amitié.",
        seasons: 12,
        imdbRating: 8.1,
    },
    {
        title: 'Stranger Things',
        genre: 'Science-Fiction / Horror',
        synopsis:
            "À Hawkins, en Indiana, dans les années 1980, un jeune garçon disparaît mystérieusement. Pendant ce temps, une jeune fille aux pouvoirs télékinésiques s'échappe d'un laboratoire sinistre et découvre un monde étrange et effrayant.",
        seasons: 4,
        imdbRating: 8.7,
    },
];

// Créer un élément ul avec la class 'popular-list'
// Ajouter un élément li pour le titre de chaque série dans le tableau popularSeries
// Ajouter la liste à la section #popular


const listSeriespopular = document.createElement('ul');
listSeriespopular.classList.add('popular-list');
listSeriespopular.id = 'popular-list';

popularSeries.forEach((serie) => {
    const listItem = document.createElement('li');
    listItem.textContent = serie.title;
    listSeriespopular.append(listItem);
});

const seriesPopularContainer = document.querySelector('#popular');
seriesPopularContainer.append(listSeriespopular);


// TODO EXERCICE

const mustWatchSeries = [
    {
        title: 'Les Soprano',
        genre: 'Drame / Crime',
        synopsis:
            'Un patron de la mafia du New Jersey jongle avec les défis de sa vie professionnelle et les complexités de sa vie familiale.',
        seasons: 6,
        imdbRating: 9.2,
    },
    {
        title: 'The Wire',
        genre: 'Drame / Crime',
        synopsis:
            'Cette série explore la vie dans les quartiers pauvres de Baltimore à travers les yeux de la police et des trafiquants de drogue.',
        seasons: 5,
        imdbRating: 9.3,
    },
    {
        title: 'Breaking Bad',
        genre: 'Drame / Thriller',
        synopsis:
            "Un professeur de chimie atteint de cancer se lance dans la fabrication de méthamphétamine pour assurer l'avenir financier de sa famille, entraînant une descente dans le monde dangereux du crime.",
        seasons: 5,
        imdbRating: 9.5,
    },
    {
        title: 'Friends',
        genre: 'Comédie',
        synopsis:
            "Un groupe d'amis inséparables navigue à travers les hauts et les bas de la vie à New York, partageant des rires, des larmes et des moments inoubliables.",
        seasons: 10,
        imdbRating: 8.9,
    },
    {
        title: 'The Office (US)',
        genre: 'Comédie',
        synopsis:
            'Une équipe dysfonctionnelle travaille dans un bureau de vente de papier, où les blagues, les drames de bureau et les moments hilarants se produisent quotidiennement.',
        seasons: 9,
        imdbRating: 8.9,
    },
];

// Créer un élément select avec la class 'select-series'
// Avec un element option avec le titre de chaque série dans le tableau mustWatchSeries
// Ajouter le select à la section #must-watch
const selectSeriesMustWatch = document.querySelector('#select-series')

// selectSeriesMustWatch.addEventListener('change', function(e){
//     const cardSelected = document.querySelector('#selected')
//     if(cardSelected){
//         cardSelected.remove()
//     }
//     mustWatchSeries.forEach((serie)=>{
//         if(serie.title === e.target.value){
//             const card = createSerieCard(serie)
//             card.id = 'selected'
            // sectionMustWatch.append(card)
//         }
//     })
// })

// TODO EXERCICE
// Ajouter un écouteur d'événements 'change' sur le select
// Lorsque l'utilisateur sélectionne une série, afficher une card avec la fonction déjà créé pour cette série dans la section #must-watch
// Si une carte est déjà affichée, la remplacer par la nouvelle série sélectionnée

// créez un tableau de 5 fruits
const fruits = ['pomme', 'banane' , 'orange' , 'fraise' , 'kiwi']
console.log(fruits[0], fruits[4]);

const [x , y , , , t] = fruits
console.log(t)

// Créez un tableau de noms de pays et vous extractez dans une variable le derniere element du tableau
const pays = ['Allemagne', 'France', 'Italie', 'Espagne', 'Italie']
const [a , b ,c , d, e] = pays
console.log(e)

// créez un objet  avenger

const avenger = {
    name : 'tony stark',
    alias : 'Iron Man',
    age : 40,
    isAlive : true,
    powers : [
        'Powred Armor',
        'wealth' ,
        'Genius Level Intellect'
    ],
}

 function displayAvenger(obj){
    if(obj.isAlive == true){
        return `Je suis ${obj.alias} expert en ${obj.powers}`

    }
 }

console.log( displayAvenger(avenger));
