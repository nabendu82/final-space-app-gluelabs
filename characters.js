const request = require('postman-request');

const getCharacters = callback => {
    const url = 'https://finalspaceapi.com/api/v0/character';

    request({ url, json: true }, (error, response) => {
        if (error || response.body.error) {
            callback('Unable to connect to the server');
        } else {
            callback(response.body);
        }
    })
}

module.exports = getCharacters;