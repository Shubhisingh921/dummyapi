const express=require("express");
const enterprise=require("./MOCK_DATA.json");
const app=express();
const PORT=8000;
//ROUTES
app.get("/",(req, res)=> {
    return res.json(enterprise)
});

app.get("/enterprise",(req, res)=>{
    const html=`
    <ul>
    ${enterprise.map((enterprise)=>`<li>${enterprise.enterprise_name}</li>`
    )}
    </ul>`;
    res.send(html);
});
app.listen(PORT,()=>console.log(`Server Started at PORT:${PORT}`));