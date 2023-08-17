const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Set up routes and middleware here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
