// document.getElementById('log').addEventListener('click',function(){
//    root.innerHTML=''
//    root.innerHTML= `

//     <div class="login">
//             <img src="" alt="">
//             <h1>Sign Up Now</h1>
//             <input type="text" placeholder="enter your e-mail"> <br>
//             <input type="text" placeholder="enter your passwprd"> <br>
//             <input type="checkbox" >
//             <label for=""> Agree with terms and condition</label>
//             <br>
//             <br>
//             <button>SINGN UP</button>
//             <br>
//             <br>
//            <br>
//            <hr>
//            <h1 class="or">OR</h1>
//            <br>
//            <button>SINGNUP with google</button>

//            <br>
//            <h2>Do you have an account ? <a href="">sign in</a></h2>
//         </div>

//    `

// })

var root = document.getElementById("root");
var users=[];
var loggin = false;



products = [
  { tittle: "addidas", describtion: "cooton shirt", sallary: 300 , id : "1"},
  { tittle: "addidas1", describtion: "cooton shirt1", sallary: 400 , id : "2"},
  { tittle: "addidas2", describtion: "cooton shirt2", sallary: 500, id : '3' },
  { tittle: "addidas3", describtion: "cooton shirt3", sallary: 600, id : '4' },
  { tittle: "addidas4", describtion: "cooton shirt4", sallary: 700 , id : '5'},
  { tittle: "addidas6", describtion: "cooton shirt6", sallary: 800 , id : '6' },
  { tittle: "addidas7", describtion: "mona", sallary: 900 , id : '7' },
];

const render_product = (data) => {
  root.innerHTML = "";
  for ( var i=0; i< products.length; i++) {
    root.innerHTML += `
    
          <div class="pro" onclick="details('${products[i].id}') "      >
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
    ;
  }
};

  

const render_signup = ()=>{
   root.innerHTML=''
   root.innerHTML=`
   
    <div class="login">
             <img src="" alt="">
             <h1>Sign Up Now</h1>
            <input type="text" placeholder="enter your e-mail" id='email'> <br>
            <input type="text" placeholder="enter your passwprd" id='pass'> <br>
            <input type="checkbox" >
           <label for=""> Agree with terms and condition</label>
            <br>
            <br>
             <button onclick='signup()'>SINGN UP</button>
             <br>
             <br>
           <br>
           <hr>
           <h1 class="or">OR</h1>
            <br>
            <button onclick=''>SINGNUP with google</button>

           <br>
           <h2>Do you have an account ? <a href="#" id='a' onclick='render_login()'>login</a> </h2>
         </div>
   `
};

const render_login = () =>{
root.innerHTML=''
root.innerHTML=`

<div class="login">
<h1>login</h1>
<input type="email" placeholder="e-mail" id='e-mail'><br>
<input type="pasword" placeholder="password" id='password'> <br>

<br>
<input type="checkbox">
<label for="">ramamber me</label>
<br> <br>
<button onclick ='login()'>login</button>
</div>

`


} ;


const signup = () =>{
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;

   var user = {email , pass}
   users.push(user)
   render_product(products);
   console.log(users)




};

const login =() =>{

var email = document.getElementById('e-mail').value;
var password = document.getElementById('password').value;

if ( users[0].email == email && users[0].pass == password){
  loggin = true;
  render_product(products);
  console.log(users)
  console.log(loggin)
}else{
  render_signup()
 }

};

const render_add = () =>{
 if(loggin == true){
  root.innerHTML=` 
  
   <div class="add">
      <input type="text" placeholder="tittle" id='title'>
      <input type="text" placeholder="descroption" id='desc'>
      <input type="text" placeholder="price" id='price'>
      <button onclick='add()'>ADD</button>
    </div>
       
  `
 }
 else{
 render_signup()
 }


};

const add = () =>{
  var tittle =  document.getElementById('title').value;
  var describtion = document.getElementById('desc').value;
  var sallary = document.getElementById('price').value;
   
  var product = {tittle, describtion,sallary};
 
 console.log(product);
 products.push(product)
 render_product(products)


}


const search_pro =() =>{
  console.log('search')

var inputt = document.getElementById('inputt').value;

for( var i = 0 ; i<products.length;i++){

  if( (products.describtion[i].include(inputt) || products.tittle[i].include(inputt)) && inputt!=''){

root.innerHTML=''
root.innerHTML+=`

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
}


};

const logout = () =>{
  loggin = false;

};


fetch('http://localhost:8000/products')
.then ( (responce) =>{
  return responce.json()

}).then ( (data)=>{
  
  render_product(data)
} )

const details = (id) =>{

  fetch ( `http://localhost:8000/products?id=${id}`)
.then( (responce)=>{
  return responce.json()

})
.then( (data) =>{
  console.log(data)

  root.innerHTML += `
    
          <div class="pro" onclick="details('${data[0].id}') "      >
                      <img src="./f1.jpg" alt="">
                      <div class="des">
                         <span>${data[0].tittle}</span>
                        <h5>${data[0].describtion}</h5>
                         <div class="star">
                          <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>                          <i class="fas fa-star"></i>
      
                        </div>
                       <h4>${data[0].sallary}</h4>
                        
                      </div>
                      <a href=""  class="cart"><i class="fa-solid fa-cart-shopping "></i></a>
                 
      
                 
             </div>
    `

} )
}

