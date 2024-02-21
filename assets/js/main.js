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
//posso usarlo per dargli una classe così da poterlo far diventare un quadrato tramite css
console.log(li);

const elementAdd = document.querySelector('.full_list')



for (let i = 1; i <= 100; i++){
    //console.log(i); //just for checking
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log(fizzbuzz); //first milestone
        elementAdd.innerHTML +=`<li>${fizzbuzz}</li> ` 

            
        }else{
            console.log(fizz); //first milestone
        elementAdd.innerHTML +=`<li>${fizz}</li> ` 

            
        } //end if inside
    }else if(i % 5 == 0){
        console.log(buzz); //first milestone
        elementAdd.innerHTML +=`<li>${buzz}</li> ` 

        
    }else{
        console.log(i); //first milestone
        elementAdd.innerHTML +=`<li>${i}</li> ` 
    }
}