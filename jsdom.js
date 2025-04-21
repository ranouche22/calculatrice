// cette code est pour afficher le div cache
// 


// cette code est pour joue un jeu a 'interieur de div afficher
// const curseur = document.getElementById("curseur");
// const jeu = document.querySelector(".jeu");

// jeu.addEventListener("mousemove", function (event) {
//     const rect = jeu.getBoundingClientRect();

//     let x = event.clientX - rect.left;
//     let y = event.clientY - rect.top;

//     // Obtenir les dimensions du curseur
//     const curseurWidth = curseur.offsetWidth;
//     const curseurHeight = curseur.offsetHeight;

//     // Limiter X et Y pour ne pas que le curseur sorte
//     x = Math.max(0, Math.min(x, rect.width - curseurWidth));
//     y = Math.max(0, Math.min(y, rect.height - curseurHeight));




//     curseur.style.left = `${x}px`;
//     curseur.style.top = `${y}px`;
// });



//  notre jeu ameliore 
// const curseur = document.getElementById("curseur");
// const jeu = document.querySelector(".jeu");
// const trails = document.querySelectorAll(".trail");

// jeu.addEventListener("mousemove", function (event) {
//     const rect = jeu.getBoundingClientRect();
//     let x = event.clientX - rect.left;
//     let y = event.clientY - rect.top;

//     const curseurWidth = curseur.offsetWidth;
//     const curseurHeight = curseur.offsetHeight;

//     x = Math.max(0, Math.min(x, rect.width - curseurWidth));
//     y = Math.max(0, Math.min(y, rect.height - curseurHeight));




//     // Curseur principal
//     curseur.style.left = `${x}px`;
//     curseur.style.top = `${y}px`;

//     // Traînée animée : chaque point suit le précédent avec délai
//     let delay = 1;
//     trails.forEach((trail, index) => {
//         setTimeout(() => {
//             trail.style.left = `${x}px`;
//             trail.style.top = `${y}px`;
//         }, 50 * (index + 1));
//     });
// });







// let score = 0;
// const box = document.getElementById("box");
// const scoreDisplay = document.getElementById("score");

// box.addEventListener("click", function () {
//     score++;
//     scoreDisplay.textContent = score;

//     // Déplacer la boîte à une position aléatoire
//     let newX = Math.random() * window.innerWidth - 50;
//     let newY = Math.random() * window.innerHeight - 50;

//     box.style.left = `${Math.max(0, newX)}px`;
//     box.style.top = `${Math.max(0, newY)}px`;
// });

// let h1 = document.querySelector('.test .h1');
// let btn = document.getElementById("btn1");
// let p1 = document.getElementById("p1");




// function clikeMe() {
//     h1.textContent = "vs m'avez clique"
//     h1.classList.add('red');
//     h1.classList.remove('h1');
// }



// p1.addEventListener('mouseover', () => {
//     p1.classList.add('h1');
// })
// p1.addEventListener('mouseout', () => {
//     p1.classList.remove('h1');
// })

// btn.addEventListener("dblclick", clikeMe)



// code d'Aujourdhui 



// document.addEventListener("mousemove", function (event) {
//     document.getElementById("posX").textContent = event.clientX;
//     document.getElementById("posY").textContent = event.clientY;
// });


// // 2éme code 
// const  bouton= document.getElementById("btn");

// bouton.addEventListener("mouseenter", function () {
//     btn.style.backgroundColor = "green";
// });

// bouton.addEventListener("mouseleave", function () {
//     btn.style.backgroundColor = "red";
// });


// // 2éme code
// const image = document.getElementById("image");
// const curseur = document.getElementById("curseur");

// image.addEventListener("mouseenter", () => {
//   curseur.style.display = "block";
// });

// image.addEventListener("mouseleave", () => {
//   curseur.style.display = "none";
// });

// image.addEventListener("mousemove", (event) => {
//   const rect = image.getBoundingClientRect();
//   const x = event.clientX - rect.left;
//   const y = event.clientY - rect.top;

//   // Limiter à l'intérieur de l'image
//   const maxX = rect.width;
//   const maxY = rect.height;

//   curseur.style.left = `${Math.min(Math.max(0, x), maxX)}px`;
//   curseur.style.top = `${Math.min(Math.max(0, y), maxY)}px`;
// });


// 3ème code

// const btn1=document.getElementById("btn1")
// const btn2=document.getElementById("btn2")
// const btn3=document.getElementById("btn3")
// const ecran=document.querySelector(".ecran")

// btn1.addEventListener("click",(event) => {
//   ecran.textContent="250"
//  })


// PROJET   
const resultat = document.getElementById('resultat');
const bouton=document.querySelectorAll('.bouton button');
let currentInput = '';
let resultShown = false;

    bouton.forEach(button => {
        button.addEventListener('click', () => {
          const value = button.textContent;
  
          if (value === 'C') {
            currentInput = '';
            resultat.textContent = '0';
            resultShown = false;
          } else if (value === 'X') {
            currentInput = currentInput.slice(0, -1); 
            resultat.textContent = currentInput || '0'; 
          }
          
          else if (value === '=') {
            try {
              const formattedInput = currentInput
                .replace(/×/g, '*')
                .replace(/÷/g, '/');
  
              const result = eval(formattedInput);
              resultat.textContent = result;
              currentInput = result;
              resultShown = true;
            } catch (error) {
              resultat.textContent = 'Erreur';
            }
          } else {
            if (resultShown && !isNaN(value)) {

              currentInput = value;
              resultShown = false;
            } 
            
        
               else {
              currentInput += value;
            }
            resultat.textContent = currentInput;
          }
        });

      });


