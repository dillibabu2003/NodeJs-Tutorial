const express=require('express')
const app=express();

app.listen(8080);
app.use(express.json());

app.get('/v1/student',(req,res)=>{
     console.log("get successfull");
     console.log(req.query.id);
     res.end('{msg:\'hello get\'}')
})

app.put('/v1/student',(req,res)=>{
    console.log("put successfull");
    console.log(req.query.name)
    res.end('{msg:\'hello put\'}')
})

app.post('/v1/student',(req,res)=>{
    console.log("post successfull");
    console.log(req.body.first_name);
    console.log(req.body.last_name);
    console.log(req.body.address);
    console.log(req.body.profile);
    res.end('{msg:\'hello put\'}')
})

app.route('/v1/student')
    .post((req,res)=>{
       res.end('{msg:\'hello\'')
    })

