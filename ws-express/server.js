const express=require("express")
const app =express()
app.listen(5000,()=>console.log("app is running on port 5000"))
// app.get("/",function(req,res){
//     res.send("hello world")
// })
// const path=require("path")
// app.get("/home",(req,res)=>{
//     res.sendFile(path.join(__dirname,"Home.html"))
// })
// app.get("/style.css",(req,res)=>{
//     res.sendFile(path.join(__dirname,"style.css"))
// })
// app.get("/contact",(req,res)=>{
// res.sendFile(path.join(__dirname,"Contact.html"))
// })

// app.get("/Contact.css",(req,res)=>{
//     res.sendFile(path.join(__dirname,"contact.css"))  
// })
const students=[
    {
        id:0,
        name:"issam",
        age:"32"
    },
    {
        id:1,
        name:"nesrine",
        age:35
    },
    {
        id:2,
        name:"ala",
        age:28
    },
    {
        id:3,
        name:"hamza",
        age:"15"
    },
    {
        id:4,
        name:"imen",
        age:20
    }
]
const hour= new Date().getHours();
console.log(hour)
const day= new Date().getDay();
console.log(day)
// res.send({msg:"list of students",students})
app.get("/home",(req,res)=>{
    if((day>=1&&day<=6) && (hour>=9&&hour<=20)){
        res.sendFile(path.join(__dirname,"Home.html"))
    }
    else {
        res.send("app closed")
    }
})

app.post("/add",(req,res)=>{
    const newstudents=[...students,req.body]
    res.send({msg:"user added",newstudents})
})

app.delete("/:id",(req,res)=>{
    const deleted=students.filter((el)=>el.id != req.params.id)
    res.send({msg:"user deleted",deleted})
})

app.put("/edit/:id",(req,res)=>{
    const edited=students.map((el)=>el.id==req.params.id?{...el,...req.body}:el)
    res.send({msg:"user updated",edited})
})