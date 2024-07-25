import nodemailer from 'nodemailer';

export const sendMail = async (email) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "harshbhanderi47@gmail.com",
                pass: "squewctqpbrbwibd"
            }
        });
  
        const mail = await transporter.sendMail({
            from: "testimonials.io",
            to: `${email}`,
            subject: "OTP verification",
            html: "OTP for the same is",
        });

        // console.log("mail information: ", mail);
        return email;
    } catch (error) {
        console.log("Error while sending mail: ", error);
    }
};