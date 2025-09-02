const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/data", require("./routes/dataRoutes"));
app.use("/api/exams", require("./routes/examRoutes"));
app.use("/api/advisors", require("./routes/advisorRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
