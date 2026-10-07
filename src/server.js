
//load the express library and store it in an variable named express
const express= require("express");

//create the Express application object
const app = express();

//tell Express to serve static website files from src/public directory
app.use(express.static("src/public"));

//start the server application and listen for requests on port 3000
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000"); //printed for confirmation that server is running
})