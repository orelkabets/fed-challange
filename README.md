# fed-challange
ReactJs+Typescript+Gulp sample project.

This project simulate simple login screen which saves the logged-in user details inside the localStorage.
Also got some input validation on the login input fields.

after successful login , React renders the Dashboard component which includes: user welocme message,logout button,
and some draggable items, such as the user name and the user image.

the Dashboard component uses [react-draggable](https://github.com/mzabriskie/react-draggable) package.
the draggable elements positions also saved inside the localStorage and when the user logged in again they'll apear at thier last
position.


# Installation:
 ## first run "npm install"
 ## then run "npm run dev" 
 this will trigger the express server to listen on port 3000
 
 browse to http://localhost:3000/
 
 # unit tests : 
  ## just run : "npm test"
  
  Happy coding!!
