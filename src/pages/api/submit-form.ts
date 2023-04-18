// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "./_sendEmail";

type Data = {
  message: string;
};

export default async function handleSubmitForm(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { name, email, description } = req.body;

  let result = {
    status: 200,
    message: "",
  };

  const options = {
    subject: `Message from ${name}`,
    html: `
      <div>
        <label>Name:</label>
        <p>${name}</p>
      </div>
      <div>
        <label>Email:</label>
        <p>${email}</p>
      </div>
      <div>
        <label>message:</label>
        <p>${description}</p>
      </div>
    `,
  };

  try {
    await sendMail(options);

    result.message = "Email sent successfuly";
  } catch (error) {
    result = {
      status: 500,
      message: "Error while trying to send the Email. Try again or send me a message via whatsapp.",
    };
  }

  res.status(result.status).json({ message: result.message });
}
