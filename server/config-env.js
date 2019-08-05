const fs = require('fs');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;
const IP_STACK_TOKEN = process.env.IP_STACK_TOKEN;


const targetPath = `./src/environments/environment.prod.ts`;
const envConfigFile = `
export const environment = {
    production: true,
    apiUrl: 'https://newsapi.org/v2/',
    apiKey: '${API_TOKEN}',
    ipUrl: 'http://api.ipstack.com/',
    ipKey: '${IP_STACK_TOKEN}'
};`

fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }
});