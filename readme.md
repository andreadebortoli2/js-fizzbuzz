#Instructions

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

#Steps
-write the loop for numbers from 1 to 100
    -show on console
-find numbers divisible by 3
    -add 'f' string to the numbers
    -show on console
-find numbers divisble by 5
    -add 'b' string to the numbers
    -show on console
-check on console if:
    -numbers divisble by 3 have 'f'
    -numbers divisble by 5 have 'b'
    -numbers divisble by 3 and 5 have 'f' and 'b'
-add 'Fizz' and 'Buzz' instead of 'f' , 'b' and numbers
    -set variables for 'fizz' and 'buzz'
    -edit the code with the variables
    -show on console

-BONUS 1
    -create an <ul> in index.html
    -add <li> with js (different methods)
    -set the i or strings inside the <li>

-BONUS 2

#Tools
-const/let
-FOR loop
-% modulus
-.innerHTML / insertAdjacentHTML / append()
-&& / ||