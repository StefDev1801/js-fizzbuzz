//console.log('hi');
const fizz = 'Fizz';
//console.log(fizz);
const buzz = 'Buzz';
//console.log(buzz);
const fizzbuzz = 'FizzBuzz'
for (let i = 1; i <= 100; i++){
    //console.log(i);
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log(fizzbuzz);            
        }else{
            console.log(fizz);
        } //end if inside
    }else if(i % 5 == 0){
        console.log(buzz);
    }else{
        console.log(i);
    }
}