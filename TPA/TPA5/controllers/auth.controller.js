const User = require("../models/user")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "msknjbjwxjnwdvcchevc";
module.exports = {
    register : async (req,res)=> {
        const emailExist = await User.findOne({email:req.body.email})
        if(emailExist) return res.status(404).json({
            message : 'email sudah digunakan'
        })

        const hash = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(req.body.password,hash)

        const user = new User({
            name : req.body.name,
            email : req.body.email,
            password : hashPass
        })
        console.log(user);
        try {
            const save=  user.save()
            res.status(200).json({
                message :"success"
            })
        }catch(error){
            res.status(404).json({
                message : "error"
            })
        }
    },
    login : async (req,res)=> {
        const user = await User.findOne({email: req.body.email})
        if(!user) return res.status(404).json({
            message : 'email anda salah'
        }) 

        const cekPass = await bcrypt.compare(req.body.password, user.password)
        if(!cekPass) return res.status(404).json({
            message : 'password anda salah'
        }) 

        const token = jwt.sign({id: user._id},SECRET_KEY)
        res.header('auth-token',token).json(token)

        // res.send('login berhasil')

        
        
    }

    
}