const express = require("express")
const { json } = require("body-parser")
const cors = require("cors")
const session = require("express-session")

//2.  declare app. App should be ABOVE any terms using the word app, like the massiveConnection request below
const app = express()

//this will allow you to get rid of the proxy server. It'll reference the server directly.

app.use(express.static(`${__dirname}/../build`))


//3.
const port = 3001

//4. add middlewares
//this is the bodyparser json. Allows us to convert stuff to req.body. This json is only a method on the body-parser json.
app.use(json())
app.use(cors())



const path = require("path")
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"))
})





app.listen(port, () => {
  console.log(`Listening on dat port: ${port}`)
})