const { app } = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config()
const PORT = process.env.PORT;


function main() {
  
  mongoose.connect(`${process.env.DB_URL}`)
  mongoose.connection.on("error", err => {
    console.log("err", err)
  })
  mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
  })

  app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
  });

}

main();
