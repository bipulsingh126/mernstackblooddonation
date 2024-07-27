import { app } from "./app.js";
import dotenv from 'dotenv';
import { dbConnection } from "./utils/db.js";

dotenv.config();


// PORT 
const PORT = process.env.PORT || 8000;



// server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    dbConnection();
})