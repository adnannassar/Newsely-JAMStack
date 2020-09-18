
var today = new Date();
let weekday = ['Sonntag', 'Montag', 'Dienstag', 'Mittwich', 'Donerstag', 'Freitag', 'Samstag'][new Date().getDay()]
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today =  weekday +' ' + dd + '.' + mm + '.' + yyyy;
module.exports =  today;
