// Import stylesheets
import './style.css';
import './utils';
import { LogTests } from './utils';

/***********************************************************************************************************************
 * Fonction qui map un tableau de nombre
 * en un tableau de string représentant ces nombres.
 * Utilisez la méthode map sur L.
 */
function map2string(...L: number[]): string[] {
  const tab: string[] = L.map( x => ""+x );
    return tab;
}
LogTests<Parameters<typeof map2string>, ReturnType<typeof map2string>>(
  "Fonction qui map un tableau de nombre en un tableau de string", map2string, "map2string", [
    {args: [17, 27], expectedResult: ["17", "27"]},
    {args: [], expectedResult: []},
    {args: [5, 4, 3, 2, 1], expectedResult: ["5", "4", "3", "2", "1"]},
]);

/***********************************************************************************************************************
 * Fonction qui map un tableau de string
 * en un tableau d'objets de type {index: number, value: string}, où :
 *   index est l'index dans le tableau
 *   value est la string à cet index
 */
function map2obj(...L: string[]): {index: number, value: string}[] {
  
const tab: {index: number, value: string}[] = L.map( (value, index) =>({index, value} )); 
  return tab;
}
LogTests<Parameters<typeof map2obj>, ReturnType<typeof map2obj>>(
  "Fonction qui map un tableau de string en un tableau d'objets", map2obj, "map2obj", [
    {args: ["a", "b"], expectedResult: [
      {index: 0, value: "a"},
      {index: 1, value: "b"}
    ]},
    {args: [], expectedResult: []},
    {args: ["encore", "un", "test"], expectedResult: [
      {index: 0, value: "encore"},
      {index: 1, value: "un"},
      {index: 2, value: "test"},
    ]},
]);
