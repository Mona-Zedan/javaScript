// Loops

// Lvl1:
// 1.Write an algorithm to print all natural numbers from 1 to n. 

var n = Number(prompt('enter a number'));
for ( var i= 0; i<= n ; i++){
    console.log(i)
}

// 2.Write an algorithm to print all natural numbers in reverse (from n to 

for ( var i = n ; i>= 0; i--){
    console.log(i)
}
// 3.Write an algorithm to print all the even numbers between 1 to 100. 

for (var i=0 ; i<=100;i++){
    if( i %2==0){
        console.log(i)
    }
}

// 4.Write an algorithm to print all odd numbers between 1 to 100. 
for (var i =0 ; i<=100;i++){
    if(i%2==1){
        console.log(i)
    }
}
