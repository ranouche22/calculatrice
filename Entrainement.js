
//  const age= prompt('quel est votre age')
//  const age2=parseInt(age)

   // if (!isNaN(age)){

   //    if(age > 0 && age <100){

   //       if(age < 18){
   //          console.log("desoler vs etes un mineur.pauvre con");
   //       }else if(age >= 18 && age <=40){
   //          console.log("monsieu vs etes un jeune adulte");
   //       }else{
   //          console.log("deszole mon gars vs etes un pourie viellard .vs aller mourir.")
   //       }

   //    }else{
   //       console.log("Entrer un nombre entre 0 a 100 svp");
   //    }
     
   // }
   // else{
   //    console.log ('vous devez entrer un nombre pour contiuner loperation')
   // }
    

  
   // const num1=prompt ('entrer le premier nombres')
   // const operation=prompt('entrer un operateur')
   // const num2= prompt ('entrer le second numero')
     
   //  let resultat;
   // if(isNaN(num1)||isNaN(num2)){
   //    resultat="veuillez entrer des nombres"
   // }else{
   //    switch(operation){
   //       case "+" :
   //          resultat =parseInt(num1)+parseInt(num2)
   //       break
   //       case "-":
   //          resultat=num1-num2
   //       break
   //       case "*":
   //        resultat = num1*num2
   //       break
   //       case "/":
   //          resultat = num2 != 0 ? num1 / num2 : "Erreur : Math!";
   //       break

   //       default:
   //          resultat="operation invalide"
   //    } 
   //    console.log(resultat)
   // }
//        2eme exo
//    const prenom="ranine"
//    const age=20
//   console.log(`je mappelle ${prenom} et jai ${age}ans`)

// 3eme exo


// let amis=["alice","bob","alice",]
// for (let i = 0; i < amis.length; i++) {
//    console.log(amis[i]);
// }



// const nb= prompt("veuillez entrer un nombre")

// if(isNaN(nb)){
// console.log("veuillez saisir un nombre")
//   }
// else{
   
//    const a=parseInt(nb)
//    if(a %2===0){
//       console.log("le nombre est pair")
//    }else{
//       console.log("le nombre est impair")
//    }
// }



// let mots=prompt("veuillez enter un mots")
// let motsinverse= mots.split("").reverse().join(""); // Inverse le mot
// console.log(motsinverse)
// let prenom = prompt("entrer un nom")
// mot = mot.toLowerCase();
// let motInverse = mot.split("").reverse().join(""); 

// if (mot === motInverse) {
//     console.log("C'est un palindrome !");
// } else {
//     console.log("Ce n'est pas un palindrome.");
// }




// let prenom =["RANINE","WALID","MOHAMED","BEN","MOHAMED"]
// for(i=0;i<prenom.length;i++){
//     console.log(prenom[i])
// }

// let nb=[10,20,5,7,60,75,4,8,]
// let npair=[]
// for(i=0;i<nb.length;i++){
//     if(nb[i]/2==0){
//         npair=nb[i]
//         console.log(npair[i])
//     }
   
// }
// let note =[12, 15, 8, 18, 10]
// let note2= note.filter(num => num>10);
// let double = note.map(num => num * 2);
// let trie=note.sort()
// console.log(trie)
// console.log(double);
// console.log(note2);



// let tabs =[
//    {nom:`stylo`,prix:50},
//    {nom:`cahier`,prix:180},
//    {nom:`sac`,prix:3000}
// ]
// tabs.push ({nom:`regle`,prix:50})
// let produit= tabs.map(tab=>
//    tab.prix*0.1
// )
// console.log("Avant :",tabs,"Apres :",produit)


// function direBonjour() {
//     console.log("Bonjour !");
// }

// direBonjour();
// direBonjour()




// let  x = 10;

// function creerFonction1() {
//   x=20
// return console.log(x)
//   // ce x fait référence à la variable globale x
// }
// creerFonction1()



// function calculatrice(a,b){

//  const plus = parseInt(a)+parseInt(b);
//  const moins= a-b;
//  const produit= a*b;
//  const division= a/b;

//  return console.log(`${a}+${b}=`+plus+`\n${a}-${b}=`+moins+`\n${a}*${b}=`+produit+`\n${a}/${b}=`+division)
// }


// calculatrice(180,70); // cette fonction dois afficher tous les resultats des  operateurs suivants (+/*-) ,


// function DynamicCalculatrice(a,b){
  
//    const num1=prompt ('entrer le premier nombres')
//    const operation=prompt('entrer un operateur')
//    const num2= prompt ('entrer le second numero')
//     let resultat;
//    if(isNaN(num1)||isNaN(num2)){
//       resultat="veuillez entrer des nombres"
//    }else{
//       switch(operation){
//          case "+" :
//             resultat =parseInt(num1)+parseInt(num2)
//          break
//          case "-":
//             resultat=num1-num2
//          break
//          case "*":
//           resultat = num1*num2
//          break
//          case "/":
//             resultat = num2 != 0 ? num1 / num2 : "Erreur : Math!";
//          break

//          default:
//             resultat="operation invalide"
//       } 
     
//    }

//   return console.log(resultat)
// }

// DynamicCalculatrice(180,70);



// function tabledemultiplication(){
//   let n=2
//   let i=0
//   let resultat
// while (i<=10){
//   resultat =n*i
//   console.log(resultat)
//   i++
 
//   }
  
// }

// tabledemultiplication()


// function candrive( age,pays ){

// if(
// (age>=18 && pays==='fr')||
// (age>=16 && pays==='us')

// ){
//     return true
// }return false
// }
// console.log(candrive(19,'fr'))




// function estpair(){
//   let n=prompt ('entrer le premier nombres')
//   const n2=parseInt(n)
// console.log(n2)
//   if(n2 % 2===0){
//     console.log(`le nombre est paires`)
//   }else{
//     console.log(`le nombre nest pas pair`)
//   }

// }
// estpair()


function plusgrand(){
let tab=[12,4,50,20,8,0,180]

for (let i = 1; i < tab.length; i++) {
  let valeur = tab[i]; 
  let j = i - 1;
  while (j >= 0 && tab[j] > valeur) {
      tab[j + 1] = tab[j];
      j--;
  }
  tab[j + 1] = valeur; 
}
return tab;
}
console.log(plusgrand([5, 3, 8, 4, 2]));
plusgrand()
