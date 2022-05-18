const CreateUser = require("../models/login.js");
var bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

const usersignup = async (req, res) => {
    try {
        //  console.log(req.body);
        const{username,password:plainTextPassword}=req.body
        if (!username || typeof username !== 'string') {
            return res.json({ status: 'error', error: 'Invalid username' })
        }
    
        if (!plainTextPassword || typeof plainTextPassword !== 'string') {
            return res.json({ status: 'error', error: 'Invalid password' })
        }
    
        if (plainTextPassword.length < 5) {
            return res.json({
                status: 'error',
                error: 'Password too small. Should be atleast 6 characters'
            })
        }

        const password= await bcrypt.hash(plainTextPassword,10)
       await new CreateUser({username,password}).save();
        res.status(200).send({ message: "user created successfully" });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  };

  const userslogin = async (req, res) => {
    const { username, password } = req.body
    console.log(req.body);
        const user = await CreateUser.findOne({ username })
           
        if (!user) {
            console.log("usuario no encontrado");
             res.status(404).send({ message: "message" })
        }
    
       else if (await bcrypt.compare(password, user.password)) {
            // the username, password combination is successful
    
            const token = jwt.sign(
                {
                    id: user._id,
                    username: user.username
                },
                JWT_SECRET
            )
            console.log("usuario logueado")
            return res.send({ status: 'ok', data: token })
           
        }
        else{
            console.log("password no coincide");
          return  res.status(404).send({ message: "message" })
        }
        
     
       
      
        res.json({ status: 'error', error: 'Invalid username/password' })      
     

   
  };


  
  module.exports = {
    usersignup,
    userslogin
    
   };
  