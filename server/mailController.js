
const nodemailer = require('nodemailer'),
      {EMAIL, PASSWORD} = process.env


module.exports = {
  email: async(req, res) => {
    const {email} = req.params;

    console.log(req.params);
    try{
      let testAccount = await nodemailer.createTestAccount();

      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: 'gmail',
        secure: false,
        requireTLS: true,
        auth: {
          user: EMAIL,
          pass: PASSWORD
        },
        logger: true
      });
      
      let info = await transporter.sendMail({
        from: `Jordan Wiebe <${EMAIL}>`,
        to: `${email}`,
        subject: 'Welcome to ScaleHistorySLC!',
        text: 'Welcome to ScaleHistorySLC!',
        html: `<div>Glad to have you on board with ScaleHistorySLC! Check out our upcoming Gajograd 2021 Bolt Action event! </div>
               <img src="https://www.forces.net/sites/default/files/styles/cover_image/public/Battle%20of%20Kursk%20picture.jpg?itok=9H1hk7Wc"/>`,
        
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


    } catch(err){
      res.status(500).send(err);
    }
  },
  
  GG2021regEmail: async(req, res) => {
    const {email} = req.params;

    console.log(req.params);
    try{
      let testAccount = await nodemailer.createTestAccount();

      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: 'gmail',
        secure: false,
        requireTLS: true,
        auth: {
          user: EMAIL,
          pass: PASSWORD
        },
        logger: true
      });
      
      let info = await transporter.sendMail({
        from: `Jordan Wiebe <${EMAIL}>`,
        to: `${email}`,
        subject: 'You have registered for Gajograd 2021!',
        text: 'You have registered for the Gajograd 2021 Bolt Action event on the side of the ${req.query.side}! Attached below is the player packet! See you there! ',
        html: `<div> You have registered for the Gajograd 2021 Bolt Action event on the side of the ${req.query.side}! Attached below is the player packet! See you there! </div>
               <img src="https://launch.battlefront.co.nz/wp-content/uploads/Stalingrad-artwork.jpeg"/>`,
        attachments: [
                {
                    filename: 'GajogradPack.pdf',
                    path: 'https://drive.google.com/file/d/1Us_YwHWfdzYyefqkXjNXIrhB00q6pJHJ/view?usp=sharing'
                }
                
            ]
        
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


    } catch(err){
      res.status(500).send(err);
    }
  },
} 