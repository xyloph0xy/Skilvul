//memanggil jwt dari dependency
const { appendFile } = require('fs');
const jwt = require('jsonwebtoken')

//sign asynchronously, nilai privateKey bebas
jwt.sign({ foo : 'bar'},"privateKey",{algortihm:'RS222'}, function(err,token){
    console.log(token);
})

//contoh penerapan pada express
jwt.sign({example},'secret',{expiresIn:'10h'},(error,token)=>{
    if(error){
        console.log(error);
    }else{
        resizeBy.json({
            token,
        })
    }
})

//contoh verify token pada express
const verifyToken =(req, res, next)=> {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== "undefined"){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403)
    }
}

//contoh penerapan pada express, pada routes tertentu hanya bisa diakses saat user melakukan login
app.post('/users/posts', verifyToken,(req, res)=>{
    const newPost = req.body.post
    jwt.verify(req.token,'secret',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message: `Post Created......`,
                comment: newPost,
                authData
            })
        }
    })
})