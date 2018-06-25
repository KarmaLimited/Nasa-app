# Nasa viewer web-app with login 
## User-authentication and lots of fun stuff
<img alt="Nasa-logo" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" style="margin: 0 auto;"/>
<img alt="Mern-stack-log" src="http://www.codeimmersives.com/images/logos/MERN/MERN-Logo-4-pack.jpg" />
#### Built with the MERN stack
MERN = [**MongoDB**](https://www.mongodb.com/), [**Express**](https://expressjs.com/), [**React**](https://reactjs.org/), [**Nodejs**](https://nodejs.org/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


How to setup:

#### Requirement:
node.js installed on the computer, a local instance of mongoDB or an mlabs-cluster
<br/>
1) `git clone "this git repo"`<br/>
2) cd into root of project and in the root run `npm install`
3) Create an .env file in the project <br/>
`MONGOLAB_URI=mongodb://<user>:<password>a-mongo-uri`<br/>
`SECRET=something very secret`<br/> for the the user authentication<br/>

When this is done open terminal cd into (root) project and run:<br/>
`npm start` <br/> <br/> 
this will compile the project<br/><br/>
If the build was it was successful you will have no client or server errors the text <br/>`db connection succesful` and the url will be shown in the terminal, open your browser to:<br/>
`http://localhost:3000` or the port number you specified in your .env file
<br/>

<b>Then your are up and running with the Nasa-app:</b><br/>
Create a user, login and get goin. <br/>Look at them pretty pictures and stuff.


#### npm Scripts
##### All cmds are run from terminal in project root
```
    npm start = starts the build and serves project
    npm run server = runs nodemon on server only
    npm run client = run the react client only
    npm run build = create the client production build with webpack
    npm run reboot = delete latest production build and rebuild all from scratch (for this you need to clear browser cache)
```

and of course cred should go were cred is do:
Daniel Cardoso, Wes bos, Daniel Deutch, @djamware, Amber Wilkie and some other good folks who wrote pretty sweet stuff on the topics i needed to learn or brusch up on.
