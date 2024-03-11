// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.


// The current database to use.
use('basecitas');


// Create a new document in the collection.
db.getCollection('basecitas').insertOne({


});




db.basecitas.insertMany([
    {
        nombre: 'Juan Atehortua',
        correo: 'juan@gmail.com',
        edad: 25
    },{
        nombre: 'Felipe Forero',
        correo: 'pipe@gmail.com',
        edad: 30
    },{
        nombre: 'luisa perez',
        correo: 'lu@gmail.com'
    },{
        nombre: 'Jhon Noreña',
        correo: 'John@outlook.com',
        edad: 25
    },{
        nombre: 'Thomas',
        correo: 'tom@live.com',
    },{
        nombre: 'deiby Cardona',
        correo: 'monito@gmail.com',
        edad: 20
    },{
        nombre: 'Andres Lpez',
        correo: 'andres@hotmail.com'
    },
    {
        nombre: 'Sebastian Parra',
        correo: 'parra@gmail.com',
    },
    {
        nombre: 'Esteban Gomez',
        correo: 'willi@gmail.com',
        edad: 20
    },
    {
        nombre: 'Robinson ',
        correo: 'trainer@hotmail.com',
        edad: 20
    },
]);



