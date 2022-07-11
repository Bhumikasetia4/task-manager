const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail=(email,name)=>{
sgMail.send({
to:email,
from:'bhumikasetia640@gmail.com',
subject:'Thanks for joining in!',
text:'welcome to the app,${name}. Let me know how  you get along with the app.'

})
}

const sendCancelationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'bhumikasetia640@gmail.com',
        subject:'sorry to see you go',
        text:'Goodbye!,${name}.I hope to see you soon.'
        })
}

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}