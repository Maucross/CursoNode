

//const frutas = ['platano', 'manzana','platano']
//para el ejemplo 2 lo de arriba se pone ren comentario porque la idea es 
//se pueda correr este programa haciendo el llamado de ejmeplo2.js
//exportando la informacion de ella.
//asi que se va a llamar al archivo con la data asi:

const { frutero, dinero }  =require('./ejemplo2')

//frutas.forEach(item => {
frutero.forEach(item => {
    console.count(item)
})

console.log(dinero)
