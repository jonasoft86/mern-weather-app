require("dotenv").config({ path: "./config.env" });
const express = require("express");
const path = require('path');
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

app.use("/api/weather", weatherRoutes);

/*
Configuracion en produccion
*/

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname));
    })
}
else{
    app.get('/', (req,res) => {
        res.send("Api running");
    })
}

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));