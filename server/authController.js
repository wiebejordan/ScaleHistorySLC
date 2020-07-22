const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
      const {username, password, profile_img, email, isadmin} = req.body,
            db = req.app.get('db');
    
    const foundUser = await db.users.check_user({username});
    if(foundUser[0]){
      return res.status(400).send('username already exists.')
    }

    let salt = bcrypt.genSaltSync(10),
        hash = bcrypt.hashSync(password, salt);
    
    const newUser = await db.users.register_user({username, password: hash,
    profile_img, email, isadmin});
    req.session.userid = newUser[0];
    res.status(201).send(req.session.userid);
    }

}