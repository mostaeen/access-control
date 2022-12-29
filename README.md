# Role Based Authentication - REST API

#### Secure REST API server with Nodejs, Express, mongoose & JsonWebToken

## Installing on local machine

#### Please make sure you have node.js installed on your machine

If you don't have, [click here...](https://nodejs.org/)

### 1. check if you have it installed or not,

    npm -v

and,

    node -v

you should see some version info in return.

### 2. Clone repository

Go to the directory where you want to place the project files using git bash (terminal for mac)

run the command

    git clone URL

Please note that you need to authenticate to clone this private repository.

### 3. Install dependencies

now navigate to the project directory with cmd (terminal for mac)
run the command

    npm install

wait for it to be completed. It usually takes a minute or less to complete.
It will download all the dependencies.

### 4. Now run the command

    npm start

or,

    node app.js

It will serve the project on default port (7867).

## Developer Hint

### Please change your editor configuration like below before you start development

#### Indent character: "\t" (tab)

#### Indent size: 2

#### Line endings: LF (unix)

It's good to remember that, **./app.js** is the entry point to the app.

### Install the global packages

run the command on any directory

    npm install -g nodemon apidoc eslint

wait for it to be completed. It usually takes a minute or less to complete.
You might need to mention `sudo` in few cases.

### Watch files while editing source

run the command

    npm run dev

It will serve the project. On any file saved, the app will be restarted and linted.

### Build apidoc

run the command

    npm run apidoc

It will build the apidoc in the directory **./apidoc**.

### Lint source

run the command

    npm run eslint

It will show warnings and errors if there is any formatting issue. In case of no formatting issue, it will show nothing.

## Versioning Guide

This project follows the [Schemantic Versioning](https://semver.org/) rules where the version numbers must be integers. For example, we will use 1.2.3 as version in the commands below.

- Make sure your branch is up to date,

      git fetch origin
      git pull origin develop

- **Replace** old version (lets say 1.2.2) with 1.2.3 in the following files using **Find and Replace** and **commit** the changes,

      /apidoc.json
      /routes/admin.js
      /routes/public.js
      /routes/token.js
      /routes/user.js

- Run the following command and **commit** the changes

      npm run apidoc

- Finally run this,

      npm version 1.2.3 && git push


📦mongo-1
 ┣ 📂controller
 ┃ ┣ 📂generic
 ┃ ┃ ┗ 📜crud.js
 ┃ ┣ 📜genre.js
 ┃ ┣ 📜movie.js
 ┃ ┗ 📜user.js
 ┣ 📂middleware
 ┃ ┗ 📜auth.js
 ┣ 📂models
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜user.js
 ┃ ┣ 📜genreSchema.js
 ┃ ┗ 📜movieSchema.js
 ┣ 📂routes
 ┃ ┣ 📜birds.js
 ┃ ┣ 📜genre.js
 ┃ ┣ 📜movie.js
 ┃ ┗ 📜user.js
 ┣ 📂tests
 ┃ ┣ 📜lib.js
 ┃ ┗ 📜lib.test.js
 ┣ 📜.env
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜apidoc.json
 ┣ 📜globals.js
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜regex.js
 