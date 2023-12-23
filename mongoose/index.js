const mongoose =require('mongoose')
const express=require('express')
const app=express()

mongoUrl='mongodb+srv://dillibabu_R:dillibabu2003@cluster0.xjysbg6.mongodb.net/';

mongoose.connection.on('connected',()=>console.log('Connected'))    //emitters is used here

mongoose.connect(mongoUrl);
app.listen(8080)
app.use(express.json());


const studentSchema=mongoose.Schema({
    "first_name":String,
    "last_name":String,
    "age":Number,
})

const studentModel=mongoose.model('student',studentSchema);

// GET ONE DATA
// app.get('/student',(req,res)=>{
//     return studentModel.findOne({})
//     .then(result=>{
//         res.send(result.toObject())
//     })
// })

// FIND ALL
// app.get('/student',(req,res)=>{
//     return studentModel.find({})
//     .then(result=>{
//         res.send(JSON.stringify(result.toObject()))
//     })
// })


// FIND BY ID
// app.get('/student',(req,res)=>{
//     return studentModel.find({"_id":new mongoose.Types.ObjectId(req.query.id)})
//     .then(result=>{
//         res.send(JSON.stringify(result))
//     })
// })


// FIND BY NAME
// app.get('/student',(req,res)=>{
//     return studentModel.find({"first_name":req.query.first_name})
//     .then(result=>{
//         res.send(JSON.stringify(result))
//     })
// })


// POST
// app.post('/student',(req,res)=>{
//     return new studentModel(req.body).save().then(result=>{ 
//         res.send(result.toObject())
//     })
// })


// BULK POST AND DELETE
// app.post('/student/bulk',(req,res)=>{
//     const bulkData=[];
//     for(const data of req.body){
//         bulkData.push(new studentModel(data));
//     }
//     return studentModel.bulkSave(bulkData).then(result=>{
//         res.send(JSON.stringify(result))
//     })
// })

// UPDATE(PUT)
// app.put('/student',(req,res)=>{
//     const filter={"_id":new mongoose.Types.ObjectId(req.query.id)}
//     const update={first_name:req.body.first_name}
//     return studentModel.findOneAndUpdate(filter,update).then(result=>{
//         return res.end(JSON.stringify(result))
//     })
// })
