const express=require("express");
const cors = require('cors');
const enterprise=require("./MOCK_DATA.json");
const app=express();
const PORT=8000;
app.use(cors());
//ROUTES
app.get("/",(req, res)=> {
    return res.json(enterprise)
});

app.listen(PORT,()=>console.log(`Server Started at PORT:${PORT}`));