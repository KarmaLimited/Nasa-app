# Nasa viewer web-app with login 
## User-authentication and lots of fun stuff

<img alt="Nasa-logo" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" style=" position:absolute; z-index:1"/>
<img alt="Mern-stack-log" src="https://res.cloudinary.com/teepublic/image/private/s--jnJZtIkV--/c_crop,x_10,y_10/c_fit,w_1134/c_crop,g_north_west,h_945,w_1260,x_-63,y_-238/co_rgb:343434,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_945,w_1260/fl_layer_apply,g_north_west,x_-63,y_-238/bo_0px_solid_white/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1500169073/production/designs/1741229_1.jpg" /> <br/>


#### Built with the MERN stack
MERN = [**MongoDB**](https://www.mongodb.com/), [**Express**](https://expressjs.com/), [**React**](https://reactjs.org/), [**Nodejs**](https://nodejs.org/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


How to setup:

#### Requirement:
node.js installed on the computer, a local instance of mongoDB or an mlabs-cluster
<br/>
1) `git clone https://github.com/2lach/Nasa-app.git`<br/>
2) cd into root of project and in the root run `npm install`
3) Create an .env file in the project <br/>
`MONGOLAB_URI=mongodb://<user>:<password>a-mongo-uri`<br/>
`SECRET=something very secret`<br/> for the the user authentication<br/>PORT
`PORT=3000`

When this is done open terminal cd into (root) project and run:<br/>
`npm run build` <br/> 
`npm start` <br/>
this will compile the project<br/><br/>
If the build was it was successful you will have no client or server errors the text <br/>`db connection succesful` and the url will be shown in the terminal, open your browser to:<br/>
`http://localhost:3000` or the port number you specified in your .env file
<br/>

<b>Then your are up and running with the Nasa-app:</b><br/>
Create a user, login and get goin. <br/>Look at them pretty pictures and stuff.


#### npm Scripts
##### All cmds are run from terminal in project root
```
    npm start = starts boot and debugging scripts and serves the project
    npm run server = runs nodemon on server only
    npm run client = run the react client only
    npm run build = create the client production build with webpack
    npm run reboot = delete latest production build and rebuild all from scratch (for this you need to clear browser cache)
```

and of course cred should go were cred is do:
Daniel Cardoso, Wes bos, Daniel Deutch, @djamware, Amber Wilkie and some other good folks who wrote pretty sweet stuff on the topics i needed to learn or brusch up on.
