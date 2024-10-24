// Conditions Sheet
// Lvl1:
//      1.Write an algorithm to input two numbers and print the bigger number.
  var inp = Number( prompt('enter number'))
  var inp2 = Number( prompt('enter number 2'))
  if ( inp > inp2){
    console.log(inp)
  }else{
    console.log(inp2)

  }

//      2.Write an algorithm to check whether a number is negative, positive or zero.

if ( inp > 0 ){
    console.log('number is positive')
}
else if ( inp < 0){
    console.log('number is negative')
}
else {
    console.log('number is zero')
}
