const getCharacters = require('./characters');

getCharacters((error, data) => {
    if(error){
        return console.log(error);
    } else {
        console.log(data);
    }
})
