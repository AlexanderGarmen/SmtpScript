const nodemailer = require("nodemailer");

async function sendEmail() {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.",
      port: 465,
      secure: true,
      auth: {
        user: "",
        pass: ""
      }
    });

    const info = await transporter.sendMail({
      from: '',
      to: "s6@gmail.com",
      subject: "Тема пewrwer",
      text: "Текст пwerewrисьма"
    });

    console.log("Email успешно отправлен: " + info.response);
  } catch (error) {
    console.log("Ошибка при отправке письма: " + error);
  }
}

sendEmail();
