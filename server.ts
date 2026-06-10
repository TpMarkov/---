import express from "express";
import path from "path";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";

// Load environment variables from .env
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API: Process Quote Form & Email to markowcvetan@gmail.com
  app.post("/api/quote", async (req, res) => {
    try {
      const {
        fullName,
        email,
        phone,
        notes,
        contactMethod,
        cart,
        totalAmount,
        uniqueQuoteId,
        lang
      } = req.body;

      if (!fullName || !email || !phone) {
        return res.status(400).json({ error: "Missing required contact details." });
      }

      if (!cart || !Array.isArray(cart) || cart.length === 0) {
        return res.status(400).json({ error: "Your quote selection sheet is empty." });
      }

      // Recipient email address as requested
      const recipient = "markowcvetan@gmail.com";

      // Format item list
      const itemsHtml = cart.map((item: any) => {
        const name = lang === "BG" ? item.product.nameBG : item.product.nameEN;
        return `
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 10px; font-size: 13px; text-transform: uppercase; font-weight: bold; color: #1a1a1a;">${name}</td>
            <td style="padding: 10px; font-size: 12px; color: #555;">${item.selectedFinish}</td>
            <td style="padding: 10px; font-size: 13px; text-align: center; color: #1a1a1a;">${item.quantity}</td>
            <td style="padding: 10px; font-size: 13px; text-align: right; font-family: monospace; color: #1a1a1a;">€${item.product.price.toLocaleString("de-DE")}</td>
            <td style="padding: 10px; font-size: 13px; text-align: right; font-weight: bold; font-family: monospace; color: #E85B5B;">€${(item.product.price * item.quantity).toLocaleString("de-DE")}</td>
          </tr>
        `;
      }).join("");

      // Build Email Body (HTML)
      const emailHtmlBody = `
        <div style="font-family: 'Inter', system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #ffffff; color: #1a1a1a; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <div style="text-align: center; border-bottom: 2px solid #E85B5B; padding-bottom: 20px; margin-bottom: 25px;">
            <h2 style="color: #E85B5B; margin: 0; font-size: 28px; text-transform: uppercase; letter-spacing: 3px; font-weight: 900;">LILOVI</h2>
            <p style="margin: 5px 0 0; font-size: 11px; text-transform: uppercase; color: #737373; letter-spacing: 4px; font-weight: bold;">Bespoke Wooden Elegance</p>
          </div>
          
          <div style="background-color: #fcfcfc; padding: 15px 20px; border-radius: 8px; border: 1px solid #f0f0f0; margin-bottom: 25px;">
            <h3 style="color: #E85B5B; margin-top: 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid #f0f0f0; padding-bottom: 8px; font-weight: 800;">
              Quote Spec Summary (${uniqueQuoteId})
            </h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #666; width: 140px;">Client Name:</td>
                <td style="padding: 6px 0; font-weight: bold; color: #1a1a1a;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #666;">Email Address:</td>
                <td style="padding: 6px 0; color: #1a1a1a;"><a href="mailto:${email}" style="color: #E85B5B; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #666;">Phone:</td>
                <td style="padding: 6px 0; color: #1a1a1a;"><a href="tel:${phone}" style="color: #E85B5B; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #666;">Preferred Contact:</td>
                <td style="padding: 6px 0; color: #E85B5B; text-transform: uppercase; font-size: 11px; font-weight: bold;">● ${contactMethod}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0 6px; font-weight: bold; color: #666; vertical-align: top;">Project Notes / Specs:</td>
                <td style="padding: 10px 0 6px; color: #333; line-height: 1.5; white-space: pre-line; background-color: #fff; border: 1px dashed #e5e5e5; padding: 10px; border-radius: 6px; font-style: italic;">
                  ${notes || "No extra requirements provided."}
                </td>
              </tr>
            </table>
          </div>

          <h4 style="color: #1a1a1a; margin-top: 0; margin-bottom: 12px; text-transform: uppercase; font-size: 12px; letter-spacing: 2px; font-weight: 800; border-bottom: 1px solid #e5e5e5; padding-bottom: 6px;">
            Product Breakdown
          </h4>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <thead>
              <tr style="background-color: #fafafa; border-bottom: 1px solid #e5e5e5;">
                <th style="padding: 10px; text-align: left; font-size: 11px; text-transform: uppercase; color: #666;">Item</th>
                <th style="padding: 10px; text-align: left; font-size: 11px; text-transform: uppercase; color: #666;">Finish</th>
                <th style="padding: 10px; text-align: center; font-size: 11px; text-transform: uppercase; color: #666;">Qty</th>
                <th style="padding: 10px; text-align: right; font-size: 11px; text-transform: uppercase; color: #666;">Price</th>
                <th style="padding: 10px; text-align: right; font-size: 11px; text-transform: uppercase; color: #666;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
            <tfoot>
              <tr style="background-color: #fafafa; font-weight: bold; border-top: 2px solid #E85B5B;">
                <td colspan="3" style="padding: 15px 10px; font-size: 13px; text-transform: uppercase; color: #1a1a1a; letter-spacing: 1px;">Estimated Total (excl. VAT)</td>
                <td colspan="2" style="padding: 15px 10px; text-align: right; font-size: 18px; color: #E85B5B; font-family: monospace;">€${totalAmount.toLocaleString("de-DE")}</td>
              </tr>
            </tfoot>
          </table>

          <div style="text-align: center; font-size: 11px; color: #999; margin-top: 30px; border-top: 1px solid #f0f0f0; padding-top: 15px;">
            <p style="margin: 0 0 5px;">This is an automated system dispatch from <strong>Lilovi Digital Workspace</strong>.</p>
            <p style="margin: 0;">© 2026 LILOVI FURNITURE. All rights reserved.</p>
          </div>
        </div>
      `;

      // Also make a plain text version for optimal mail client fallback
      const emailPlainBody = `
LILOVI — Bespoke Wooden Elegance
================================
Quote Request Details: ${uniqueQuoteId}

Client Name: ${fullName}
Email Address: ${email}
Phone Number: ${phone}
Preferred Contact Channel: ${contactMethod}

Project Notes:
--------------
${notes || "No extra specs provided."}

Product Breakdown:
------------------
${cart.map((i: any) => `- Name: ${lang === "BG" ? i.product.nameBG : i.product.nameEN}\n  Finish: ${i.selectedFinish}\n  Quantity: ${i.quantity}\n  Price: €${i.product.price.toLocaleString("de-DE")}\n  Subtotal: €${(i.product.price * i.quantity).toLocaleString("de-DE")}`).join("\n\n")}

================================
Estimated Grand Total (excl. VAT): €${totalAmount.toLocaleString("de-DE")}

Submitted details have been safely archived.
      `;

      // Transporter check (for real email delivery via configured Gmail SMTP or otherwise)
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
      const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);

      if (smtpUser && smtpPass) {
        console.log(`[Lilovi System] SMTP configuration detected. Sending real email to ${recipient}...`);
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Lilovi Bespoke" <${smtpUser}>`,
          to: recipient,
          replyTo: email,
          subject: `[Lilovi Quote ${uniqueQuoteId}] Bespoke Request from ${fullName}`,
          text: emailPlainBody,
          html: emailHtmlBody,
        });

        return res.json({
          success: true,
          message: "Your request has been successfully processed and emailed to Lilovi pricing coordinates.",
          deliveryType: "real_smtp",
          uniqueQuoteId,
        });
      } else {
        console.log("\n==========================================================================");
        console.log(`[Lilovi System Simulation] No SMTP setup details (SMTP_USER & SMTP_PASS) defined in secrets.`);
        console.log(`To enable REAL email delivery to ${recipient}, please specify credentials.`);
        console.log(`\n--- SIMULATED DISPATCH TO: ${recipient} ---`);
        console.log(`Subject: [Lilovi Quote ${uniqueQuoteId}] Bespoke Request from ${fullName}`);
        console.log(`Sender: "${fullName}" <${email}>`);
        console.log(`Content:\n${emailPlainBody}`);
        console.log("==========================================================================\n");

        return res.json({
          success: true,
          message: "Your request coordinates have been successfully processed.",
          deliveryType: "simulated_console",
          uniqueQuoteId,
          simulatedBody: emailPlainBody,
        });
      }
    } catch (error: any) {
      console.error("[Lilovi Server Error] Failed to submit quote request:", error);
      return res.status(500).json({ error: "Server error occurred while archiving specifications: " + error.message });
    }
  });

  // Vite Middleware integrated after API routes
  const isProd = process.env.NODE_ENV === "production";
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Bind to Port 3000 (standard for ingress, can't be customized)
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Lilovi System] Server successfully initiated at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("[Lilovi Startup Error] Failed to start server:", err);
});
