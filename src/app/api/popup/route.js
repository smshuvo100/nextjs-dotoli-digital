/* ── app/api/popup/route.js ── */
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json(); // { name, email, service, message }

    /* validate minimal required fields */
    if (!data.name || !data.email || !data.service) {
      return new Response("Missing fields", { status: 400 });
    }

    /* Gmail transporter (App Password required) */
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    await transporter.verify(); // fail fast if creds wrong

    await transporter.sendMail({
      from: `"Dotoli Digital" <${process.env.GMAIL_USER}>`,
      to: "waseem.linuxfreakz@gmail.com",
      replyTo: data.email,
      subject: `Popup Lead – ${data.name}`,
      html: `
        <h2>New Popup Lead</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Service:</b> ${data.service}</p>
        <p><b>Message:</b><br/>${(data.message || "-").replace(/\n/g, "<br/>")}</p>
      `
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("❌ popup mail error:", err);
    return new Response("Mail error", { status: 500 });
  }
}
