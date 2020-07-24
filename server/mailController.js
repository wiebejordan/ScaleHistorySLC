const nodemailer = require('nodemailer'),
      {EMAIL, PASSWORD} = process.env

module.exports = {
  email: async(req, res) => {

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
        to: `wiebe.jordan@yahoo.com`,
        subject: 'NodeMailer Test',
        //text is for plain text support if the html cannot load properly
        text: 'Welcome to ScaleHistorySLC!',
        //html contains the body of your email, and can use html tags to
        //structure it, and inline styling to style it. IF you are using an
        //image, you should pass the src that is provided below, and then
        //give the actual image a value in the attachments array below.
        html: `<div>This is NodeMailer Test</div>
               <img src="cid:unique@nodemailer.com"/>`,
        //attachments include files attached to the email, as well as sources
        //for your images.
        attachments: [
            {
                filename: 'license.txt',
                path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
            },
            {
                cid: 'unique@nodemailer.com',
                path: 'https://i.kym-cdn.com/photos/images/original/001/516/899/f31.jpg'
            }
        ]

        
    }, (err, res) => {
        if(err){
            console.log(err)
        } else {
            res.status(200).send(info);
            
        }
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


} catch(err){
    res.status(500).send(err);
}
} 
} 