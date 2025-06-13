import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'All fields are required.' }), {
                status: 400,
            });
        }

        // configure your SMTP transporter using env variables
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // or 'hotmail', 'yahoo', etc.
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email, // sender's email from form
            to: process.env.EMAIL_USER, // using same email from env
            subject: `New Message from ${name}`,
            html: `
                <h3>Contact Form Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
        });

    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email.' }), {
            status: 500,
        });
    }
}
