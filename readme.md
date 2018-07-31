Polaris Node/Express Intro
===

[Lecture Video](https://vimeo.com/282546652)

Walkthrough for setting up new Node/Express basic project:

basic server setup with express
---

- create folder for project
- 'npm init' in folder to initialize npm
- 'npm install express --save' to install Express
- create "server/server/js" in folder
- require express and create express app in server.js

```
const express = require( 'express' );
const app = express();
```

- create a port and spin up server

```
let port = 5000;

app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})
```

- spin up server in terminal with 'node server/server.js'
- stop server with "ctrl+c"

Serving a static html file
---

- create a "public" folder within your "server" folder
- reate an index.html inside of the "public" folder
- tell the app to use "express.static" on this folder

```
app.use( express.static( 'server/public' ) );
```

- restart your server
- check in browser (localhost:5000)

creating a basic GET route
---

-- create a new route as follows:

```
app.get( '/thingy', ( req, res )=>{
    console.log( '/thingy get hit' );
    res.send( 'meow' );
}) // end basic route
```

- restart your server
- goto "localhost:5000/thingy" in your browser
- you should see "meow" in the browser window
- you should see "/thingy get hit" in the terminal

Note: I didn't do this in the lecture, but you should add "node-modules" to your .gitignore file. 