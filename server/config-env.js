const fs = require('fs');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;


const targetPath = `./src/environments/environment.prod.ts`;
const envConfigFile = `
export const environment = {
    production: true,
    apiUrl: 'https://newsapi.org/v2/top-headlines',
    apiKey: '${API_TOKEN}'
};`

fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }
});