import app from "./app.js";
import { connectToDB } from "./db/connection.js";


//connections and listenwares
const port  =  process.env.PORT || 5000
connectToDB()
  .then(() => {
    app.listen(port,() =>console.log("server listening and connected DB"))
  })
  .catch((err) => console.log(err))
