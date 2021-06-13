## Deploy status: [![Netlify Status](https://api.netlify.com/api/v1/badges/5b7e7b86-0128-4235-9b5e-ab30035cfe40/deploy-status)](https://app.netlify.com/sites/iu-dormitory/deploys)

# Using <img src="https://img.shields.io/badge/-Docker-007396?logo=docker" width="110" height="auto" />

  1. Clone the [back-end](https://github.com/katyperrycbt/dorm-management-back-end) app of this application too, it can be found in my GitHub.
  2. Rename this front-end to client, the back-end (step 1) to server.
  3. Download the Docker Compose file [here](https://github.com/katyperrycbt/Docker-Compose-Files/blob/main/docker-compose.yml).
  4. The directory structure should be like this:
        - client
        - server
            + docker-compose.yml
  5. In root directory, run this 
```console 
docker-compose.exe up --force-recreate --build 
```
# Without Docker, things to do after cloning

Require: Git, NodeJS (and NPM) pre-installed
- After cloning the project to your pc, please run `npm install`(`npm i`) in the terminal to install important addition to run the program.
- And make sure your computer has the recent version (don't be too outdated) of NodeJS and NPM software available on your computer (you can update the NodeJS/NPM version by using `nvm`)

# About

The project is called 'IU's Dormitory', is the front-end part of a full-stack application of the same name.

## Details

A full CRUD React application of the MVC model:

- Create-react-app
- Material-ui
- NPM packages
- External APIs
- Redux
- Deploy

## About me: please visit [my Facebook account](https://www.facebook.com/thuc.katy/), or mail to me via [my Gmail](mailto:katyperrycbt@gmail.com)
