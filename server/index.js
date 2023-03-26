import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import helmet from "helmet"
import multer from "multer"
import morgan from "morgan"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { fileURLToPath } from "url"
import path from "path"

const app = express()

/*  INITIAL CONFIGURATION FOR MIDDLEWARES */
const corsOptions = {
  origin: [process.env.ORIGIN],
  credentials: true
}
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images")
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname}`);
  }
})
const upload = multer({ storage })

/* CONFIGURATION OF MIDDLEWARES */
dotenv.config()
app.use(express.json)
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(morgan("common"))
app.use(cors(corsOptions));
app.use("/images", express.static(path.join(__dirname, "public/images")))
app.use(upload.single("image"))

/* RUN SERVER */
const PORT = process.env.PORT || 5001
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DB_NAME
}).then(() => {
  app.listen( PORT, () => { console.log(`Server running on port ${PORT}`) })
}
)
.catch((error) => console.log(error))

