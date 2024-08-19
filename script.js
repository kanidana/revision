// ------------------------MAP

// let tableNumber = [4, 3, 2, 5, 8, 16, 18, 10]

// function newTable() {
//   return tableNumber.map( number => number*2 )
  
// }

// console.log(tableNumber);
// console.log(newTable());


// ------------------------FILTER

// function filtre (){
//   let elmFiltrer = tableNumber.filter(a => a%2 == 0)
//   return elmFiltrer
// }

// console.log(tableNumber)
// console.log(filtre())


//-----------------------REDUCE

// function reducer (){
//   let result = tableNumber.reduce((elm, elmSuivant) => {
//     return elm + elmSuivant
//   })
//   return result
// }
// console.log(reducer());


// ------------------------TERNAIRE

// let ternaireOp = (a) => {
//   return (a == 0) ? "zero" : (a > 0) ? "positif" : "negatif" ;
// }

// console.log(ternaireOp(2))


// -------------------------- MAP and TERNAIRE

// function mapReduce(){
//   let pairImpair = tableNumber.map( a => {
//     return (a%2 == 0) ? "pair" : "impair" ;
//   })
//   return pairImpair
// }

// console.log(tableNumber)
// console.log(mapReduce())


// -------------------------FIND

// const personCaraterist = ['Ali', 'Rene', 'Bile']

// function findAli(name){
//  return  personCaraterist.find( hoe =>  hoe == name )
// }
// console.log(findAli('Ali'));


// 1. Utilise map pour créer un tableau contenant les carrés de chaque nombre dans [1, 2, 3, 4, 5].

// let tableNbr = [1, 2, 3, 4, 5]

// function square(){
//   let nbrSquare = tableNbr.map(a => a**2) 
//   return nbrSquare
// }

// console.log(tableNbr);
// console.log(square())

// 2. Utilise filter pour créer un tableau contenant uniquement les nombres pairs de [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

// let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function retlif (){
//   return table.filter( a => a%2 == 0)
// }
// console.log(retlif());

// 3. Utilise find pour trouver le premier nombre supérieur à 10 dans [4, 5, 11, 8, 13].
// let table = [4, 5, 11, 8, 13]
// function found (){
//   return table.find (a => a>10)
// }
// console.log(found())

// 4. Utilise forEach pour afficher chaque élément de [1, 2, 3, 4, 5] dans la console.

// let tableNbr = [1, 2, 3, 4, 5]

// function pourEach(){
//   tableNbr.forEach(elm =>console.log(elm))
// }
// pourEach();


// 5. Utilise map pour créer un tableau contenant les longueurs de chaque mot dans ['apple', 'banana', 'cherry'].


// let fruit =  ['apple', 'banana', 'cherry']
// function tiurf (){
//   let wordLength = fruit.map(a =>a.length)
//   return wordLength
// }

// console.log(fruit)
// console.log(tiurf())

// 6. Utilise filter pour créer un tableau contenant uniquement les mots de plus de 5 lettres dans ['apple', 'banana', 'cherry', 'date'].

// let fruit = ['apple', 'banana', 'cherry', 'date']

// function frtLenght(){
//   let fruitLengthSupFiveLetter = fruit.filter(b => b.length+1 > 5)
//   return fruitLengthSupFiveLetter
// }

// console.log(fruit);
// console.log(frtLenght());

// 7. Utilise find pour trouver le premier mot qui commence par 'b' dans ['apple', 'banana', 'cherry', 'date'].

// let fruit = ['apple', 'banana', 'cherry', 'date']

// function findB(){
//   return fruit.find(mot => mot[0] == 'b')
// }
// console.log(findB());

// 8. Utilise forEach pour ajouter 1 à chaque élément de [1, 2, 3, 4, 5] et afficher le résultat.

// let tableNbr = [1, 2, 3, 4, 5]

// function pourEach (){
//  return tableNbr.forEach(a => console.log(a+1));
// }
// pourEach();

// 9. Utilise map pour convertir tous les éléments de ['1', '2', '3', '4'] en nombres.

// let tableWord = ['1', '2', '3', '4']

// function convert (){
//   return tableWord.map(a => parseInt(a))
// }
// console.log(convert())

//---- 10. Utilise filter pour créer un tableau contenant uniquement les nombres négatifs de [-1, 2, -3, 4, -5]

// let table = [-1, 2, -3, 4, -5]

// function moinplus (){
//   return table.filter(a => a<0)
// }

// console.log(moinplus());

//---- 11. Utilise l'opérateur ternaire pour vérifier si un nombre est pair ou impair.

// let user = prompt("entrez un nombre")

// let result = (user%2 == 0) ? "pair" : "impair"
// console.log(`ce nombre est ${result}`)


//----- 12. Utilise l'opérateur ternaire pour vérifier si une chaîne de caractères est vide ou non.

// let votremot = prompt('veuillez entrer un mot')
// function vide(){
//   return (votremot.length == 0) ? "vide" : "pas vide"
// }

// console.log(vide())


// -----13. Utilise l'opérateur ternaire pour assigner la valeur 'adulte' ou 'mineur' en fonction de l'âge.
// let user = prompt("entrez votre age")

// let age = (user < 18) ? "mineur" : "majeur"
// console.log(`vous etes ${age}`)

// ------------14. Utilise l'opérateur ternaire pour vérifier si un nombre est positif, négatif ou zéro.

// let user = prompt("entrez un nombre")

// let result = (user == 0) ? "zero" : (user > 0) ? "positif" : "negatif"
// console.log(`ce nombre est ${result}`)

// -----15. Utilise l'opérateur ternaire pour afficher 'Bonjour' si l'heure est avant midi et 'Bonsoir' sinon.

// let heure = prompt("quelle heure est il?")

// let result = (heure < 12 ) ? "bonjour" : "bonsoir"
// console.log(result)

// ------16. Utilise l'opérateur ternaire pour vérifier si un mot contient plus de 5 lettres.
 
// let user = prompt("entrez un mot")

// let result = (user.length+1 > 5) ? "oui" : "non"
// console.log(` ${result} ce mot contient/ne contient pas plus de 5 lettres`)

// ----17. Utilise l'opérateur ternaire pour assigner la valeur 'passé' ou 'échec' en fonction d'une note.

// let note = prompt("entrez votre note")

// let result = (note >= 10) ? "passe" : "echec"
// console.log(result)

// -------18. Utilise l'opérateur ternaire pour vérifier si un tableau est vide ou non.
// let tableWord = [1,2,3,4,5,6,7,8]
// function vide(){
//   return (tableWord.length == 0) ? "vide" : "pas vide"
// }

// console.log(vide())


// -----19. Utilise l'opérateur ternaire pour assigner la valeur 'valide' ou 'invalide' en fonction de la longueur d'un mot de passe.
// let mot2passe = prompt("entrez le mot de passw")

// let result = (mot2passe.length < 8 ) ? "invalide" : "valide"
// console.log(` ce mot de passe est  ${result}`)


// ---------20. Utilise l'opérateur ternaire pour vérifier si un nombre est divisible par 3.

// let user = prompt("entrez un nombre")

// let result = (user%3 == 0) ? "divisible par 3" : "pas divisible par 3"
// console.log(`ce nombre est ${result}`)


 

// -----21. Utilise map et l'opérateur ternaire pour créer un tableau contenant 'pair' ou 'impair' pour chaque nombre dans [1, 2, 3, 4, 5].

// const table = [1, 2, 3, 4, 5]

// function pair () {
//   let result = table.map(a => (a%2 == 0) ?  "pair" : "impair") 
//   return result
// }
// console.log(pair())


// 22. Utilise filter et l'opérateur ternaire pour créer un tableau contenant uniquement les mots qui commencent par une voyelle dans ['apple', 'banana', 'cherry', 'date', 'egg'].
// const table = ['apple', 'banana', 'cherry', 'date', 'egg']

// function voyelle(){
//   const voyelTab = ['a', 'o', 'u', 'i', 'y' ,'e']
//  const result = table.filter(a => (voyelTab.includes(a[0]))? true : false ) 
//  return result
// }
// console.log(voyelle());



// 23. Utilise find et l'opérateur ternaire pour trouver le premier nombre supérieur à 10 et vérifier s'il est pair dans [4, 5, 11, 8, 13].

// const table = [4, 5, 11, 8, 13]
// function fistNumber (){
//   const numb = table.find(a => a>10)
//   const result =   (numb%2==0)? "pair" : "impair"
//   return result
// }
// console.log(fistNumber());


// 24. Utilise forEach et l'opérateur ternaire pour afficher 'positif' ou 'négatif' pour chaque élément dans [-1, 2, -3, 4, -5].

// const table = [-1, 2, -3, 4, -5]
// function negPos (){
//   return table.forEach( a => console.log( (a>0)? "positif" : "negatif") )
// }
// console.log(negPos());



// 25. Utilise map et l'opérateur ternaire pour créer un tableau contenant 'long' ou 'court' pour chaque mot dans ['apple', 'banana', 'cherry', 'date'].
// const tableFruit =  ['apple', 'banana', 'cherry', 'date']

// function shortLong (){
//   return tableFruit.map(a => (a.length>5)? "long" : "court")
// }
// console.log(shortLong())


// 26. Utilise filter et l'opérateur ternaire pour créer un tableau contenant uniquement les nombres pairs et positifs de [-1, 2, -3, 4, -5, 6].
// const table = [-1, 2, -3, 4, -5, 6]
// function pairePositif(){
//   const paire = table.filter(a=> (a%2 == 0)? true : false)
//   return paire
// }
// console.log(pairePositif())
// 27. Utilise find et l'opérateur ternaire pour trouver le premier mot de plus de 5 lettres et vérifier s'il commence par 'c' dans ['apple', 'banana', 'cherry', 'date'].
// const table = ['apple', 'banana', 'cherry', 'date']
// function letterLong (){
//   const plusdecinqlettre = table.find(a => a.length>5)
//   const commenceparc = (plusdecinqlettre[0]=='c') ? true : false
//   return commenceparc
// }
// console.log(letterLong());

// 28. Utilise forEach et l'opérateur ternaire pour afficher 'adulte' ou 'mineur' pour chaque âge dans [12, 18, 20, 15].

// const table = [12,18,20,15]
// function adulteMineur(){
//   table.forEach(a => console.log( (a>=18)? "adulte" : "mineur") ) 
// }
// adulteMineur()


 




