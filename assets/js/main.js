//console.log('hi');
const fizz = 'Fizz';
//console.log(fizz);
const buzz = 'Buzz';
//console.log(buzz);
const fizzbuzz = 'FizzBuzz'
//console.log(FizzBuzz);

const ul = document.querySelector('ul.full_list')
console.log(ul);
const li = document.createElement('li');//mi permette semplicemente di aggiungere un li figo
console.log(li);

li.append('hola')
ul.append(li);




for (let i = 1; i <= 100; i++){
    //console.log(i); //just for checking
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log(fizzbuzz); //first milestone
            li.append(fizzbuzz)
            ul.append(li);
        }else{
            console.log(fizz); //first milestone
            li.append(fizz)
            ul.append(li);
        } //end if inside
    }else if(i % 5 == 0){
        console.log(buzz); //first milestone
        li.append(buzz)
        ul.append(li);
    }else{
        console.log(i); //first milestone
        li.append(i)
        ul.append(li);
    }
}