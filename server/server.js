// requires
const express = require( 'express' );
const app = express();
// uses (this is the folder into which we will put our static files like HTML)
app.use( express.static( 'server/public' ) );

// global variables
let port = 5000;
let counter = 0;

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
}) // end spin up server

// basic route
app.get( '/thingy', ( req, res )=>{
    console.log( '/thingy get hit' );
    counter++;
    res.send( { count: counter } );
}) // end basic route