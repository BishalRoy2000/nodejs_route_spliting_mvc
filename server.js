// ai file a sudhu server create , server listen, ar database connection thakbe........sob midle ware app.js ai thakbe.......
import {app} from "./app.js";
import {connectDB} from "./data/database.js";

connectDB();

app.listen(process.env.PORT,()=>console.log("server is working")); // akhaner port env file a ache.....
