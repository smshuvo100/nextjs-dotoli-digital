// app/api/contact/route.js (or .ts)
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // 1️⃣ get data sent from the form
    const data = await req.json();

    // 2️⃣ create reusable transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // 465 = SSL, 587 = STARTTLS
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    // 3️⃣ verify connection at startup (nice debug aid)
    await transporter.verify();

    // 4️⃣ craft your email
    const mail = await transporter.sendMail({
      from: `"Dotoli Digital" <${process.env.GMAIL_USER}>`,
      to: "waseem.linuxfreakz@gmail.com", // or data.email to CC them
      subject: `New Contact Form – ${data.name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone || "-"} </p>
        <p><b>Company:</b> ${data.company || "-"}</p>
        <p><b>Website:</b> ${data.website || "-"}</p>
        <p><b>Service Needed:</b> ${data.service}</p>
        <p><b>Goal:</b> ${data.goal}</p>
        <p><b>Budget:</b> ${data.budget}</p>
        <p><b>Referral:</b> ${data.referral || "-"}</p>
      `
    });

    console.log("✅ Email sent:", mail.messageId);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("❌ Mail error:", err);
    return new Response("Mail error", { status: 500 });
  }
}
