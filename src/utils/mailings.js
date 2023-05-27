import nodemailer from "nodemailer";
// import invoice from "../../invoice.pdf";

export const sendMail = async (receiver, subject, body, content) => {
  try {
    const transporter = await nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
      secure: true,
    });
    const mailData = {
      from: process.env.EMAIL,
      to: receiver,
      subject: subject,
      html: body,
      attachments: [
        {
          filename: "dcm_file.pdf",
          // content: content,
          path: "dcm.pdf",
        },
      ],
    };
    transporter.sendMail(mailData, (err, info) => {
      if (err) console.log("mail error", err);
    });
  } catch (e) {
    console.log("mail error", e);
  }
};
