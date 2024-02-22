# Instructions
Consegna:
- Scrivi un programma che stampi in console i numeri da 1 a 100, ma che  per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


- Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
:lampadina:Si, lo abbiamo intravisto mentre facevamo la lezione sulle stringhe e i numeri (Cerco un operatore che fa al caso mio)
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
:insetto: Ricordate di usare il console.log() sia in fase di preparazione e verifica dei dati che ovviamente durante il degugging per scovare potenziali errori!

### BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

### BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


## Steps
- STEPS CONSEGNA
- creo un ciclo for in cui vedo tutti i numeri da 1 a 100
  SE il numero è muliplo di 3
    SE il numero è multplo di 5
        scrivo FizzBuzz
    ALLORA 
        scrivo Fizz
  ALLORA SE il numero è multiplo di 5 
    <!--pensandoci bene non serve... SE il numero è multiplo di 3 
        scrivo FizzBuzz
    ALLORA-->
        scrivo Buzz
 ALLORA
    scrivo il numero al quale sono arrivato

- STEPS FIRST BONUS
    quando creo un li voglio crearne uno sotto pari al numero di variabili che vengono create per farlo
    - creo una variabile per fare più li? 
    
### Tools
- const
- if()
- display.log