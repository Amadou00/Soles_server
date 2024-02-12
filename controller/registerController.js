const db = require('../seed');
const bcrypt = require('bcrypt');

module.exports = {
    post : async (req, res) => {
        const users = [];
        try{
            const hashedPassword = await bcrypt.hash(req.body.password);
            users.push[{
                name : req.body.email,
                email : hashedPassword
            }]
            console.log(users);
            res.redirect("/login");
        }
        catch(e){
            console.log(e);
            res.redirect("/register");
        }
    }
}