# Anteater

A fully functional piece of bug tracking software written in Javascript and using Node, Angular and MongoDB. 
Node and Express come together to make an API back end that interacts with the MongoDB Database. This leaves Angular
to steal the show in the front end.

tl;dr - Node gives us the API. Angular gives us the frontend and accesses the API. MongoDB eats like a fat kid.


## Requirements

- [Node and npm](http://nodejs.org)

## Installation

1. Run git clone `git:://github.com/Grantlyk/Anteater.git` 
2. Install the application `npm install`
3. Create a config folder `mkdir config`
4. Navigate into that older `cd config`
5. Now create a database.js file `touch database.js`
6. You need to create a [Modulus](https://modulus.io/) account to use the MongoDB enviroment.
7. Open the database.js file in your favourite text editor and add the details you got when you created a Modulus Database information: 

``module.exports = {

  // the database url to connect
  url : 'mongodb://YourUsername:YourPassword@proximus.modulusmongo.net:YourID'
}``

8. Start up the server `node server.js`
9. View in your browser at `http://localhost:8080`

## Contributors

Grantlyk

## More coming soon