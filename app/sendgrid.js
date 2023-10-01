import sgMail from "@sendgrid/mail";

export const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message } = req.body;

  const msg = {
    to: "samuelou510@gmail.com",
    from: email,
    subject: "Message from Portfolio",
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
};
