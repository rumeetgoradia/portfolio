import type { NextApiRequest, NextApiResponse } from "next"
import { createTransport, SendMailOptions } from "nodemailer"
import defaultHandler from "./_defaultHandler"

const handler = defaultHandler<NextApiRequest, NextApiResponse>().post(
	async (req, res) => {
		if (req.body.url) {
			res.status(404).send("")
			return
		}

		const transporter = createTransport({
			port: 465,
			host: "smtp.gmail.com",
			auth: {
				user: process.env.CONTACT_AGENT_EMAIL,
				pass: process.env.CONTACT_AGENT_PASSWORD,
			},
			secure: true,
		})

		const mailData: SendMailOptions = {
			from: `Contact Rumeet Goradia ${"<"}${process.env.CONTACT_AGENT_EMAIL}>`,
			to: process.env.CONTACT_EMAIL,
			subject: `Message from ${req.body.name}`,
			text: req.body.subject,
			html: `
            <!DOCTYPE html>
			<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width,initial-scale=1">
				<meta name="x-apple-disable-message-reformatting">
				<title></title>
				<!--[if mso]>
				<noscript>
					<xml>
						<o:OfficeDocumentSettings>
							<o:PixelsPerInch>96</o:PixelsPerInch>
						</o:OfficeDocumentSettings>
					</xml>
				</noscript>
				<![endif]-->
				<style>
					h1, p {
						font-family: Arial, sans-serif;
					}
					* {
						box-sizing: border-box
					}
				</style>
			</head>
			<body style="margin:0;padding:0;">
			<div style="width: 100%;display:flex;justify-content:center">
				<div style="max-width: 500px;width: 100%;padding:1rem 2rem;">
				<h1>${req.body.subject}</h1>
				<p>${req.body.message}</p>
				<p style="text-align:right">
					&mdash;&nbsp;${req.body.name}
					<br/>
					${req.body.email}
				</p>
				</div>
			</div>
			</body>
			</html>
            `,
		}

		transporter.sendMail(mailData, function (err) {
			if (err) {
				res.status(500).send(err)
			} else {
				res.status(200).send("Message sent successfully")
			}
		})
	}
)

export default handler
