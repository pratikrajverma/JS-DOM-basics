// .................1. Accessing and Selecting DOM Elements.....................................

// const headText = document.getElementById('headText');
// headText.remove()

// const divHead = document.querySelector('#divHead');

// const lastPara = document.querySelector('#lastPara');

// divHead.removeChild(lastPara)

// console.log(lastPara.textContent)

// const paraClass = document.getElementsByClassName('paraClass');
// console.log(paraClass[2])

// const headText = document.getElementById('headText');

// console.log(headText.textContent)

// const paraClass = document.getElementsByClassName('paraClass');
// // console.log(paraClass.textContent);
// for(let i=0;i<paraClass.length;i++){
//     console.log(paraClass[i].textContent)
// }

// const tagName = document.getElementsByTagName('p')

// for(let i=0;i<tagName.length;i++){
//         console.log(tagName[i].textContent)
//     }

// const  headText = document.querySelector('#headText')
// // console.log(headText.textContent)
// // console.log(headText.innerHTML)s

// headText.innerHTML = '<h1>this is new head</h1>'

// const paraClass = document.querySelectorAll('p');

// for(let i=0;i<paraClass.length;i++){
//     console.log(paraClass[i].textContent)
// }

// const headText = document.querySelector('#headText');

// headText.textContent = 'this is head 2'

// const divHead = document.getElementsByClassName('divHead');

// console.log(divHead)
//  divHead[0].innerHTML = '<h1>This is new heading</h1>'

// const paraClass = document.querySelectorAll('.paraClass')

// paraClass[2].textContent = '<h1>This is child heading</h1>'
// paraClass[2].innerHTML= '<h1>This is child heading</h1>'

// const headText  = document.querySelector('#headText')

// // headText.textContent = '<h1>This is new head</h1>'
// headText.innerHTML = '<h1>This is new head</h1>'

// const divHead = document.querySelectorAll('.divHead')

// const paraClass = document.querySelectorAll('.paraClass')





// // divHead[0].removeChild(paraClass[0])

// paraClass[2].remove()
// paraClass[1].remove()



//   const para4 = document.createElement('p')

//   para4.textContent = 'This is new para 4'

// //   console.log(para4)

// const divHead = document.querySelector('#divHead')

//  divHead.appendChild(para4)

// divHead.insertAdjacentElement('beforebegin',para4)
// divHead.insertAdjacentElement('afterbegin',para4)
// divHead.insertAdjacentElement('afterend',para4)
// divHead.insertAdjacentElement('beforeend',para4)

//  const divHead = document.querySelector('#divHead')


//.............4. Adding Style to HTML content by DOM...................


// divHead.style.backgroundColor='aqua';
// divHead.style.color='blue';
// divHead.style.height='100px';
// divHead.style.width='100px';
// divHead.style.borderRadius = '50px';
// // divHead.style.paddingTop= '20px';
// divHead.style.boxSizing= 'border-Box';
// // divHead.style.textAlign= 'center';
// divHead.style.display= 'flex';
// divHead.style.justifyContent= 'center';
// divHead.style.alignItems= 'center';

// divHead.style.border = '2px solid white';
// divHead.style.boxShadow = '2px 2px 10px red';

// divHead.style.cssText = 'background-color:red; color:white; height:200px; width:100px;'

//  const divHead = document.querySelector('#divHead')

// const divHead = document.querySelector('#divHead');

// divHead.style.backgroundColor = 'red';
// divHead.style.height = '100px';
// divHead.style.width = '100px';
// divHead.style.color = 'white';
// divHead.style.border = '2px solid lime';
// divHead.style.borderRadius = '50px';
// divHead.style.textAlign = 'center';
// divHead.style.fontSize = '10px';

// divHead.style.cssText = 'background-color:red; height:100px; width:100px; border:2px solid yellow;'





//..................... Adding Class to html element.............................

// const divHead = document.querySelector('#divHead')
// divHead.classList.add('active');

// function clickDiv(){

//     const divHead = document.querySelector('#divHead')
//     divHead.classList.toggle('active');

// }

// const BtnClick = document.querySelector("#BtnClick");


//............................. Event Basics:................................

// BtnClick.addEventListener("click", () => {
//   const divHead = document.querySelector("#divHead");
//   //   divHead.classList.toggle('active');

//   if (divHead.classList.contains("active")) {
//     divHead.classList.remove("active");
//   } else {
//     divHead.classList.add("active");
//   }
// });



//.................. pop project.............................

const banner = document.querySelector("#banner");

const car = document.createElement("div");
const para = document.createElement("p");
const cross = document.createElement("button");

function createbanner() {
    cross.textContent = "x";

  para.textContent = "Book a test Drive";
  car.style.cssText = 'border: 2px solid; background-color:lime; display:flex; justify-content:space-between; align-items:start';

  car.appendChild(para);
  car.appendChild(cross);

  banner.appendChild(car);

  cross.addEventListener("click", () => {
    banner.removeChild(car);
  });
}



  setInterval(() => {
    createbanner()
  }, 2000);
