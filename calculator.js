const express=require('express');
const Bodyparser=require('body-parser');
const calc=express();
calc.use(Bodyparser.urlencoded({extended:true})); //to pass form data

calc.get("/",function(req,res){
   res.sendFile(__dirname+"/index.html");
});
calc.post("/",function(req,res){
  const n1=Number(req.body.num1);
  const n2=Number(req.body.num2);
  const result=n1+n2;
  res.send("Result is "+res);
})
calc.listen(3001,function(){
  console.log("Calculator App...");
});