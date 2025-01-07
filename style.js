// else if 15 example 
// 1 . Grading System example start
let result = parseInt(prompt("Enter Your result"));
if(result>100 || result<0){
    document.write("invailed number");
}
else if (result>=80 && result<=100) {
    document.write("grat: A+ and GPA:5.0");
} 
else if( result>=70 && result<=79){
    document.write("grat: A and CGPA:4");
}
else if( result>=60 && result<=69){
    document.write("grat: A- and CGPA:3.5");
}
else if( result>=50 && result<=59){
    document.write("grat: b and CGPA:3");
}
else if( result>=40 && result<=49){
    document.write("grat: c and CGPA:2");
}
else if( result>=33 && result<=39){
    document.write("grat: d and CGPA:1");
}

else if( result>0 && result<=32){
    document.write("grat: F and CGPA:0");
}
else{
    document.write("Please Integer Number input");
}
// 1 . Grading System example end