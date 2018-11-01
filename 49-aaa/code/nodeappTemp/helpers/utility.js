/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa các function dùng chung
 */
const nodemailer = require('nodemailer')
const PORT = 3000
const sendEmail = async (receiverEmail, secretKey) => {	    
    debugger
    try {        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "nodejst9@gmail.com", 
                pass: "Hung2011"
            }
        })
        let mailOptions = {
            from: '"Techmaster Test" <nodejst9@gmail.com>', //Email người gửi
            to: receiverEmail, 
            subject: 'Activate email', 
            //text: 'Please click here to activate your account',
            html: `<h1>Please click here to activate your account:</h1>
                   http://${require('os').hostname()}:${PORT}/users/activateUser?secretKey=${secretKey}&email=${receiverEmail}` 
        }
        
        let info = await transporter.sendMail(mailOptions)
        debugger
	  	console.log('Message sent: %s', info.messageId);
	} catch(error) {
		throw error
	}
}
module.exports = {
    sendEmail,
    PORT
}