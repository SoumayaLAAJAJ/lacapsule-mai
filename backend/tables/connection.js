const { Pool } = require("pg");

const pool = new Pool({
    user: "mthpdbvg",
    host: "horton.db.elephantsql.com",
    database: "BikeShop",
    password: "3lQqS_whnR2O6IxlxpCNJcTKh7ZyUiJQ",
    port: 3000
    });
    console.log("Database connected");

    
module.exports = pool;