const axios = require('axios');

axios.get('https://vk.com')
    .then(response => console.log('Успех:', response))
    .catch(error => console.error('Ошибка:', error.message));

axios.get('https://json.geoiplookup.io/')
    .then(response => console.log('Успех:', response.data))
    .catch(error => console.error('Ошибка:', error.message));