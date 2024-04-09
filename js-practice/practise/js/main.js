// TODO EXERCICE :

// ? Manipulation de chaines de caractères trouvez sur google les fonctions vous permettant d'obtenir le resultat demandé
// * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String

// Créer une variable avec le texte suivant: 
const text = "Je suis une chaine de caractères"

// Afficher la longueur de la chaine de caractères en console
console.log(text.length)
// Afficher le premier caractère de la chaine de caractères en console
console.log(text[0])
// Afficher le dernier caractère de la chaine de caractères en console
console.log(text[31])

// Supprimer les espaces en début et fin de chaine de caractères et l'afficher en console
const noSpaces = text.trim()
console.log(noSpaces);
// Afficher les 10 premiers caractères de la chaine de caractères en console
console.log(text.substring(0, 10))
// Mettre la chaine de caractères en majuscules et l'afficher en console
console.log(text.toUpperCase());
// Mettre la chaine de caractères en minuscules et l'afficher en console
console.log(text.toLowerCase());
// Remplacer "chaine de caractère" par "string" dans la phrase et l'afficher en console
console.log(typeof text)
// Afficher la chaine de caractères en console en remplaçant chaque espace par un underscore
let texte = text.replaceAll(" ", "_")
console.log(texte);
// Transformer la chaine de caractères en tableau contenant chaque mots et l'afficher en console
const transformTable = text.split(' ')
console.log(transformTable);



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
const lastElement = pokemons[pokemons.length - 1]
console.log(lastElement);

// Transformer le tableau pokemons en chaine de caractères avec les noms des pokemons séparés par une virgule et un espace et l'afficher en console 
const transform = pokemons.join(', ')
console.log(transform);

// inverser le cases du tableau
console.log(pokemons.reverse());

// créer un fonction  checkPalindrom qui prend en parametre une chaine de caractere


    // verifier si c'est un palindrome

    // si oui ça retourne trur 
    // sinon ça retourne false
    
function checkPalindrome(string){
    let ispalindrome = string;
    ispalindrome = ispalindrome.split('')
    ispalindrome.reverse();
    ispalindrome = ispalindrome.join('')

    if (string === ispalindrome){
        return true
    } else {
        return false
    }
}

const x = checkPalindrome('kayak')
console.log(x)