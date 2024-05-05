const express = require('express')
const app = express()
const port = 3000

const arr = [];
app.use(express.json());

//Get all Todos
app.get('/api/v1/todo',(req,res)=>{
    res.send({todo:arr});
})

//Get Single Todo
app.get('/api/v1/todo/:id', (req, res) => {
    const { id } = req.params;
    const item = arr.filter(item => item.id == id);
    res.send({todo: item})
})


// Add Todo
app.post('/api/v1/todo',(req,res)=>{
    const {title} = req.body;
    arr.push({title: title, id:Date.now()});
    res.send({message: "Data has been added", todo:arr});
})

//Update Todo
app.put('/api/v1/todo/:id',(req,res)=>{
    const {title} = req.body;
    const {id} = req.params;
    const index = arr.findIndex((index)=>{
          return (index.id == Number.parseInt(id));
    })
    arr.splice(index,1,{title: title, id: id})  
    res.send({Message: "Data has been updated",todo:arr});
})

//Delete Todo
app.delete('/api/v1/todo/:id',(req,res)=>{
    const {id} = req.params;
    const index = arr.findIndex((index)=>{
        return (index.id == Number.parseInt(id));
  })
  arr.splice(index,1);  
  res.send({Message: "Data has been Deleted", todo:arr});

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})