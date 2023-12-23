const express=require('express')
const app=express();

app.listen(8080);
app.use(express.json());  // to convert body to json

app.get('/v1/student',(req,res)=>{
     console.log("get successfull");
     console.log(req.query.id);
     res.end('{msg:\'hello get\'}')
})

app.put('/v1/student',(req,res,next)=>{
    res.write('hello world');
    next()
    res.end()
  },(req,res)=>{
    console.log('Hello world put')
    console.log(req.body);
    res.end('{msg:\'hello\'}')
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
/*
        API's for
    1. Profile get
    2. Profile update
    3. Getting attendance
    4. Posting attendance
    5. Getting fee details
*/


app.get('/v1/profile',(req,res)=>{
    console.log("getting profile");
    console.log(req.param.name);
    res.end('profile completed');
})

app.put('/v1/profile',(req,res)=>{

})

app.get('/v1/attendance',(req,res)=>{

})  

app.post('/v1/attendance',(req,res)=>{

})



