const fs = require('fs');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;
const IP_GEO_TOKEN = process.env.IP_GEO_TOKEN;


const targetPath = `./src/environments/environment.prod.ts`;
const envConfigFile = `
export const environment = {
    production: true,
    apiUrl: 'https://newsapi.org/v2/',
    apiKey: '${API_TOKEN}',
    ipUrl: 'https://api.ipgeolocation.io',
    ipKey: '${IP_GEO_TOKEN}'
};`

fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }
});