import { env } from "@/env/server.mjs";
import {
  contactFormInputValidator,
  type ContactFormData,
} from "@/types/contact";
import { TRPCError } from "@trpc/server";
import { createTransport, type SendMailOptions } from "nodemailer";
import { publicProcedure, router } from "../trpc";

export const contactRouter = router({
  sendContactFormData: publicProcedure
    .input(contactFormInputValidator)
    .mutation(async ({ input }) => {
      if (input.url) {
        throw new TRPCError({
          code: "BAD_REQUEST",
        });
      }

      const transporter = getTransporter();
      const mailData = generateContactEmail(input);
      transporter.sendMail(mailData, function (err) {
        if (err) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
          });
        }
      });

      return input;
    }),
});

const { CONTACT_AGENT_EMAIL, CONTACT_AGENT_PASSWORD, CONTACT_EMAIL } = env;

const getTransporter = () => {
  return createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: CONTACT_AGENT_EMAIL,
      pass: CONTACT_AGENT_PASSWORD,
    },
    secure: true,
  });
};

export const generateContactEmail = (contactFormData: ContactFormData) => {
  const mailData: SendMailOptions = {
    from: `Contact Rumeet Goradia ${"<"}${CONTACT_AGENT_EMAIL}>`,
    to: CONTACT_EMAIL,
    subject: `Message from ${contactFormData.name}`,
    text: contactFormData.subject,
    html: `
    <!DOCTYPE html>
    <html
      lang="en"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="x-apple-disable-message-reformatting" />
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
          h1,
          p {
            font-family: Arial, sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0">
        <div style="width: 100%; display: flex; justify-content: center">
          <div style="max-width: 500px; width: 100%; padding: 1rem 2rem">
            <h1>${contactFormData.subject}</h1>
            <p>${contactFormData.message}</p>
            <p style="text-align: right">
              &mdash;&nbsp;${contactFormData.name}
              <br />
              ${contactFormData.email}
            </p>
          </div>
        </div>
      </body>
    </html>
    `,
  };

  return mailData;
};
