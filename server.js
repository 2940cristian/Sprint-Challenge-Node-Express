//Modules
const express = require("express");

//DataBases
const actionRouter = require("./ActionModel/ActionModel")
const projectRouter = require("./ProjectModel/ProjectModel")



//Middleware
const server = express();
server.use(express.json())


//Route handlers
server.use("/api/actions", actionRouter)
server.use("/api/projects", projectRouter)



server.listen(5000, () => console.log("Listening on port 5000"))