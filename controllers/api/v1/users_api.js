const User=require('../../../models/user');
const jwt=require('jsonwebtoken');

// Sign In and create the session for User
module.exports.createSession=async function(req,res){

    try {
        let user=User.findOne({email:req.body.email});
        if(!user || user.password!=req.body.password)
        {
            return res.json(422,{
                message:"Invalid username or password"
            });
        }
        return res.json(200,{
            message:"Sign in Successfully",
            data:{
                token:jwt.sign(user.toJSON(),'socialEnzyme',{expiresIn:'100000'})

            }
        })
    } catch (err) {
        console.log('******',err);
        return res.json(500,{
            message:"Internal Server Error"
        });
    }
   

}