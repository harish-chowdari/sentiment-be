const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()

const cors = require("cors")
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
require("./db")

const AuthRoutes = require("./Routes/AuthRoutes") 
app.use("/api", AuthRoutes)
 
const OtpRouter = require("./Routes/OtpRoutes")
app.use("/api", OtpRouter)

const ReviewsRouter = require("./Routes/reviewRoutes")
app.use("/api/reviews", ReviewsRouter)

const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

