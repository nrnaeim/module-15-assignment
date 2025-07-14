/*
 * Title: Entry point
 * Description:
 * Author: Niemur Rahman
 * Email: nrnaeim@gmail.com
 * Date: 14-07-2025
 */
//Dependencies
//Core Dependencies
//const  =require();

//External Dependencies
require("dotenv").config();

//Local Dependencies
const { app } = require("./src/app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
