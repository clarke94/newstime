[![Netlify Status](https://api.netlify.com/api/v1/badges/e17311d7-574e-44f7-bfc8-f8f477904c3f/deploy-status)](https://app.netlify.com/sites/newstime/deploys)  [![Maintainability](https://api.codeclimate.com/v1/badges/9a6e7e26a1523a180eb3/maintainability)](https://codeclimate.com/github/clarke94/newstime/maintainability)

# NewsTime

A news web app used for portfolio puposes.

## Description

Get breaking news headlines, and search for articles from over 30,000 news sources and blogs. This app automatically detects the users current location to ensure the news is relevant to them, supporting 54 different countries.

## Quick links

+ [NewsTime site](https://newstime.netlify.com/)

## Prerequisites

This project requires [Nodejs](https://nodejs.org/en/) to be installed and is built using Angular 8

## Installation

Open the root folder of the repository in a workspace and install the dependencies with npm

```
npm install
```

## Running the app

The app can be run locally in two different environments, one using the APIs and one using stub data in json-server

For the json server two commands shouild be run concurrently

```
ng serve
npm run json-server
```

For the local API environment, secret keys are required. This project uses [dotenv](https://www.npmjs.com/package/dotenv) to store the keys and a nodejs file to build them into Angular

```
npm run env:staging
```

## Building the app

The app can be built with the following command

```
npm run env:prod
```

This is will build the production artifacts and get the necessary environment variables. Netlify CI currently builds this project on any updates merged into master.

## Running tests

There are three parts of the app that can be tested.

+ e2e
+ Unit tests
+ linting

To run end to end tests via Protractor

```
ng e2e
```

To run unit tests via Karma

```
ng test
```

To run linting 

```
ng lint
```

## Deployment

The site is deployed through Netlify continuos Integration when any commit is merged into master.

## Built with

+ [News API](https://newsapi.org/) - To get the news headlines from articles
+ [IPGeolocation](https://ipgeolocation.io/) - To get the users country for targetting local news
+ [Angular](https://angular.io/) - The platform that the app is built on

## Author

+ [Liam Clarke](https://www.linkedin.com/in/liamclarke94/)
