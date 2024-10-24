products = [
  { tittle: "addidas", describtion: "cooton shirt", sallary: 300 },
  { tittle: "addidas1", describtion: "cooton shirt1", sallary: 400 },
  { tittle: "addidas2", describtion: "cooton shirt2", sallary: 500 },
  { tittle: "addidas3", describtion: "cooton shirt3", sallary: 600 },
  { tittle: "addidas4", describtion: "cooton shirt4", sallary: 700 },
  { tittle: "addidas6", describtion: "cooton shirt6", sallary: 800 },
  { tittle: "addidas7", describtion: "mona", sallary: 900 },
];

var root = document.getElementById('product');

document.getElementById('get').addEventListener('click', function(){

    for ( var i=0; i<products.length; i++){

      root.innerHTML+= `
        <div class="pro">
                      <img src="./f1.jpg" alt="">
                      <div class="des">
                         <span>${products[i].tittle}</span>
                        <h5>${products[i].describtion}</h5>
                         <div class="star">
                          <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>                          <i class="fas fa-star"></i>
      
                        </div>
                       <h4>${products[i].sallary}</h4>
                        
                      </div>
                      <a href=""  class="cart"><i class="fa-solid fa-cart-shopping "></i></a>
                 
      
                 
             </div>
      
      
      `

    }


})


// document.getElementById('search').addEventListener('click',function(){


//     var input = document.getElementById('inp').value ;
//     for ( var i=0; i<products.length;i++){

//       if( products[i].tittle.includes(input)  || products[i].describtion.includes(input)){
//     root.innerHTML=''
//     root.innerHTML+= `
//     <div class="pro">
//                       <img src="./f1.jpg" alt="">
//                       <div class="des">
//                          <span>${products[i].tittle}</span>
//                         <h5>${products[i].describtion}</h5>
//                          <div class="star">
//                           <i class="fas fa-star"></i>
//                          <i class="fas fa-star"></i>
//                          <i class="fas fa-star"></i>
//                           <i class="fas fa-star"></i>                          <i class="fas fa-star"></i>
      
//                         </div>
//                        <h4>${products[i].sallary}</h4>
                        
//                       </div>
//                       <a href=""  class="cart"><i class="fa-solid fa-cart-shopping "></i></a>
                 
      
                 
//              </div>

//     `
//   }

//     }




// })

// var root = document.getElementById("product");



// document.getElementById("get").addEventListener("click", function () {
  
//   for (var i = 0; i < products.length; i++) {
//     root.innerHTML += `
        
//                   <div class="pro">
//                       <img src="./f1.jpg" alt="">
//                       <div class="des">
//                          <span>${products[i].tittle}</span>
//                          <h5>${products[i].describtion}</h5>
//                          <div class="star">
//                           <i class="fas fa-star"></i>
//                           <i class="fas fa-star"></i>
//                           <i class="fas fa-star"></i>
//                           <i class="fas fa-star"></i>
//                           <i class="fas fa-star"></i>
      
//                          </div>
//                          <h4>${products[i].sallary}</h4>
                        
//                       </div>
//                       <a href=""  class="cart"><i class="fa-solid fa-cart-shopping "></i></a>
                 
      
                 
//               </div>
//         `;
//   }
// });



document.getElementById('search').addEventListener('click', function(){

 var input = document.getElementById('inp').value

bool = false;
 root.innerHTML=''

 for( var i=0; i<products.length;i++){

  if( (products[i].tittle.includes(input) || products[i].describtion.includes(input)) && input != '' ){
   
   bool= true;

root.innerHTML += `
        
                  <div class="pro">
                      <img src="./f1.jpg" alt="">
                      <div class="des">
                         <span>${products[i].tittle}</span>
                         <h5>${products[i].describtion}</h5>
                         <div class="star">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
      
                         </div>
                         <h4>${products[i].sallary}</h4>
                        
                      </div>
                      <a href="#"  class="cart"><i class="fa-solid fa-cart-shopping "></i></a>
                 
      
                 
              </div>
        `
    }
        ;
  }

 

 if(bool==false){
    root.innerHTML='oopss'
 }
})




