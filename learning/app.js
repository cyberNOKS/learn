let express=require('express');
let app=express();
let path=require('path');
let bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

// app.get('/home',(req,res)=>{
//     res.send('welcome to the home page you never imagined')

// });
// app.use(express.static(path.join(__dirname,'public')));

// // login, logout, dashboard

// app.get('/logout',(req,res)=>{
//     res.send('logout page')
// })

// app.get('/dashboard',(req,res)=>{
//     res.send('dashboard page')
// })


// app.get('/product:data',(req,res)=>{
//     res.send('dashboard page')
// })
app.get('/login',(req,res)=>{
    
    res.render('index');
});
app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send('Data received successfully....')
});

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});