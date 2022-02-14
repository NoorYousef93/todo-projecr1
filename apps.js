'use strict' ;

var yourname=prompt("your name is ");
var gender=prompt("male or female ");
var age=prompt ( "your age is " ) ;

if ( age <= 0 ) {
    alert ( "age is not allowed " )
}  

var welcome= confirm("do you want to skip welcome " ) 
if (welcome == false);
{
    if ( gender == "male" ) {
        alert( 'hello mr '+ yourname )
    
    }
    else if (gender == "female" ) {
        alert ('hello ms' + yourname)
    }
    else {
        confirm ( "welcome " )
    }


}