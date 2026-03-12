const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require("cors");


dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: ['https://carrer-bus.vercel.app', 'http://localhost:5173'],
   // allow only your frontend
  
  credentials: true
}));

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("System running");
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/auth", require("./routes/authRoutes")); //done
app.use("/api/courses", require("./routes/dataRoutes"));
app.use("/api/exams", require("./routes/examRoutes"));
app.use("/api/advisors", require("./routes/advisorRoutes")); //done
app.use("/api/data", require("./routes/collegeRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
