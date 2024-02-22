//console.log('hi');
const fizz = 'Fizz';
//console.log(fizz);
const buzz = 'Buzz';
//console.log(buzz);
const fizzbuzz = 'FizzBuzz'
//console.log(FizzBuzz);

const ul = document.querySelector('ul.full_list')
console.log(ul);
//posso usarlo per dargli una classe così da poterlo far diventare un quadrato tramite css



for (let i = 1; i <= 100; i++){
const li = document.createElement('li');//mi permette semplicemente di aggiungere un li figo

    li.classList.add("square");//ho aggiunto una classe ai list item creati in questo modo

    //console.log(i); //just for checking
    if (i % 3 == 0) {
        if (i % 5 == 0) {
//FIZZBUZZ
            console.log(fizzbuzz); //first milestone
        //elementAdd.innerHTML +=`<li>${fizzbuzz}</li> ` //not required
            li.append(fizzbuzz); //questo è quello che si vedrà dentro il mio list item
            //devo far sì che per ogni fizzbuzz che ho aggiungo un li

            li.classList.add("fizzbuzz");//ho aggiunto una classe ai list item creati in questo modo
        }else{
//FIZZ        
            console.log(fizz); //first milestone
        //elementAdd.innerHTML +=`<li>${fizz}</li> `  //not required
            li.append(fizz);

            li.classList.add("fizz");//ho aggiunto una classe ai list item creati in questo modo

            
        } //end if inside
    }else if(i % 5 == 0){
//BUZZ
        console.log(buzz); //first milestone
        //elementAdd.innerHTML +=`<li>${buzz}</li> `  //not required
        li.append(buzz);

        li.classList.add("buzz");//ho aggiunto una classe ai list item creati in questo modo

        
    }else{
//NUMBER
        console.log(i); //first milestone
        //elementAdd.innerHTML +=`<li>${i}</li> `  //not required
        li.append(i);
        
        li.classList.add("number");//ho aggiunto una classe ai list item creati in questo modo

    }
    ul.append(li);//ne metto uno che viene letto a fine ciclo

}