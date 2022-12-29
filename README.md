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

    git clone https://github.com/mostaeen/access-control

Please note that you need to authenticate to clone this private repository.

### 3. Install dependencies

now navigate to the project directory with cmd
run the command
    cd access-control
    npm install

wait for it to be completed. It usually takes a minute or less to complete.
It will download all the dependencies.

### 4. Now run the command

    npm start

or,

    node index.js

It will serve the project on default port (3000).



### Install the global packages

run the command on any directory

    npm install -g nodemon apidoc eslint

wait for it to be completed. It usually takes a minute or less to complete.
You might need to mention `sudo` in few cases.

### Watch files while editing source

run the command

    npm start

It will serve the project.

### Build apidoc

run the command

    npm run apidoc

It will build the apidoc in the directory **./apidoc**.

- Run the following command and **commit** the changes

      npm run apidoc



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
